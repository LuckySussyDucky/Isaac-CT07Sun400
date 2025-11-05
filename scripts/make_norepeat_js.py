#!/usr/bin/env python3
from pathlib import Path
import re

ROOT = Path('/workspaces/Isaac-CT07Sun400')
IN = ROOT / 'wordlists' / '5letter_words_mixed_js_array.js'
OUT = ROOT / 'wordlists' / '5letter_words_norepeat_90.js'

txt = IN.read_text(encoding='utf-8')
arr_match = re.search(r"\[([\s\S]*)\];", txt)
if not arr_match:
    raise SystemExit('could not find array in input')
inner = arr_match.group(1)
# split on commas that separate words
parts = [p.strip().strip('"\'') for p in inner.split(',') if p.strip()]
# cleanup quotes and trailing newlines
words = [p.strip().strip('"').strip("'") for p in parts]
# filter 5-letter unique-letter words
norepeat = [w for w in words if len(w)==5 and len(set(w))==5]
# take first 90 (or fewer if not available)
short = norepeat[:90]

OUT.write_text('// 90 five-letter words with no repeated letters\nconst fiveLetterWordsNoRepeat90 = [\n' + ','.join(f'"{w}"' for w in short) + '\n];\n\nexport default fiveLetterWordsNoRepeat90;\n', encoding='utf-8')
print(f'Wrote {len(short)} words to {OUT}')
print(', '.join(short[:40]))
