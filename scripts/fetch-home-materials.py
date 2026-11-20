#!/usr/bin/env python3
"""Fetch the three explicitly selected CC0 PBR texture sets for the home sample."""
from pathlib import Path
from urllib.request import Request, urlopen
from zipfile import ZipFile
from io import BytesIO
import hashlib
import json
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
DEST = ROOT / 'assets' / 'materials' / 'home'
DEST.mkdir(parents=True, exist_ok=True)
SETS = [('plaster', 'Plaster001'), ('timber', 'Wood079'), ('paving', 'PavingStones128')]
manifest = {'license': 'CC0 1.0', 'licenseUrl': 'https://docs.ambientcg.com/license/', 'sets': []}
for kind, asset in SETS:
    url = f'https://ambientcg.com/get?file={asset}_1K-JPG.zip'
    req = Request(url, headers={'User-Agent': 'Anthrise-Branch-Review/1.0 (CC0 PBR asset retrieval)'})
    print(f'Downloading {asset}', flush=True)
    with urlopen(req, timeout=60) as response:
        data = response.read()
    entry = {'kind': kind, 'asset': asset, 'source': f'https://ambientcg.com/view?id={asset}',
             'download': url, 'archiveSha256': hashlib.sha256(data).hexdigest(), 'maps': []}
    with ZipFile(BytesIO(data)) as z:
        for name in z.namelist():
            tag = next((t for t in ('Color', 'NormalGL', 'Roughness', 'AmbientOcclusion') if f'_{t}.' in name), None)
            if not tag:
                continue
            original = z.read(name)
            dest = DEST / f'{kind}-{tag.lower()}.jpg'
            image = Image.open(BytesIO(original)).convert('RGB')
            # Keep the full square image and 1K detail; do not crop or resynthesize maps.
            image.save(dest, quality=94, subsampling=0)
            entry['maps'].append({'type': tag, 'path': str(dest.relative_to(ROOT)), 'width': image.width,
                                  'height': image.height, 'sha256': hashlib.sha256(dest.read_bytes()).hexdigest()})
            print(f'  {tag}: {image.size}', flush=True)
    assert {'Color', 'NormalGL', 'Roughness'} <= {m['type'] for m in entry['maps']}
    manifest['sets'].append(entry)
(DEST / 'provenance.json').write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + '\n')
print('Three complete, locally stored CC0 PBR sets ready.', flush=True)
