#!/usr/bin/env python3
"""Minimal structural guard for the documentation migration baseline."""
from pathlib import Path
import sys

root = Path(__file__).resolve().parents[2]
required = [
    root / "docs",
    root / "docs" / "00-governance" / "MASTER-PROJECT-CONTROL.md",
    root / "docs" / "MASTER-PROJECT-INDEX.md",
]
missing = [str(path.relative_to(root)) for path in required if not path.exists()]
if missing:
    print("Missing required documentation paths:")
    for path in missing:
        print(f" - {path}")
    sys.exit(1)

markdown_files = sorted((root / "docs").rglob("*.md"))
if not markdown_files:
    print("No Markdown documents found under docs/.")
    sys.exit(1)

empty = [str(path.relative_to(root)) for path in markdown_files if not path.read_text(encoding="utf-8").strip()]
if empty:
    print("Empty Markdown documents found:")
    for path in empty:
        print(f" - {path}")
    sys.exit(1)

print(f"Documentation structure OK: {len(markdown_files)} non-empty Markdown files.")
