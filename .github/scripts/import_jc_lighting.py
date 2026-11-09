#!/usr/bin/env python3
"""Import the 30 JC Lighting catalogue image files into ANTHRISE.

This script intentionally preserves the rest of the ANTHRISE website and
changes only image URLs that match the source catalogue manifest.
"""
import json
import time
from pathlib import Path
from urllib.parse import quote
from urllib.request import Request, urlopen

ROOT = Path(__file__).resolve().parents[2]
manifest = json.loads((ROOT / "images/jc-lighting-manifest.json").read_text(encoding="utf-8"))
assert manifest["product_count"] == 30 and len(manifest["files"]) == 30
assert manifest["source_repository"] == "Paulshellby/jclightning"
source_root = "https://raw.githubusercontent.com/Paulshellby/jclightning/main/"
html_file = ROOT / "index.html"
html = html_file.read_text(encoding="utf-8")
changed = 0
for relpath in manifest["files"]:
    parts = Path(relpath).parts
    assert parts[0] == "images" and ".." not in parts and len(parts) > 1
    target = Path("images/jc-lighting").joinpath(*parts[1:])
    dest = ROOT / target
    src_url = source_root + quote(relpath, safe="/")
    if not dest.exists() or dest.stat().st_size < 1000:
        dest.parent.mkdir(parents=True, exist_ok=True)
        error = None
        for attempt in range(4):
            try:
                req = Request(src_url, headers={"User-Agent": "AnthriseCatalogImporter/1.0"})
                with urlopen(req, timeout=75) as response:
                    body = response.read()
                    if len(body) < 1000:
                        raise ValueError(f"Suspiciously small image: {relpath}")
                    dest.write_bytes(body)
                error = None
                break
            except Exception as exc:
                error = exc
                time.sleep(2 * (attempt + 1))
        if error:
            raise RuntimeError(f"Failed to import {relpath}") from error
    if src_url in html:
        html = html.replace(src_url, target.as_posix())
        changed += 1
    elif target.as_posix() not in html:
        raise RuntimeError(f"Product image was neither linked nor already copied: {relpath}")
    print(f"{relpath} -> {target.as_posix()} ({dest.stat().st_size:,} bytes)")
if changed and changed != 30:
    raise RuntimeError(f"Expected 30 URL replacements or already-local photos, got {changed}")
html_file.write_text(html, encoding="utf-8")
assert html.count('"sourcePath":') == 30
assert all(str(Path("images/jc-lighting").joinpath(*Path(p).parts[1:]).as_posix()) in html for p in manifest["files"])
print(f"Verified {len(manifest['files'])} local product images. Replaced {changed} external URLs.")
