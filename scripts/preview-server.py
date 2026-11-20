#!/usr/bin/env python3
"""Local branch review only; does not deploy or modify the official website."""
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import unquote, urlsplit
import os

ROOT = Path(__file__).resolve().parent.parent

class PreviewHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def do_GET(self):
        parts = unquote(urlsplit(self.path).path).split('/')
        if any(part.startswith('.') or part in {'node_modules', 'tmp'} for part in parts if part):
            self.send_error(404)
            return
        super().do_GET()

    def list_directory(self, path):
        self.send_error(404)
        return None

    def end_headers(self):
        self.send_header('Cache-Control', 'no-store')
        self.send_header('X-Robots-Tag', 'noindex, nofollow')
        super().end_headers()

if __name__ == '__main__':
    port = int(os.environ.get('PORT', '3000'))
    print(f'Anthrise isolated branch preview on 0.0.0.0:{port}', flush=True)
    ThreadingHTTPServer(('0.0.0.0', port), PreviewHandler).serve_forever()
