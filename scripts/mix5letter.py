#!/usr/bin/env python3
"""Mix five-letter words so first letters are varied.
Reads: wordlists/5letter_words.txt
Writes: wordlists/5letter_words_mixed.txt
Prints a short sample and distribution stats.
"""
import random
from collections import defaultdict, deque
from pathlib import Path

ROOT = Path('/workspaces/Isaac-CT07Sun400')
IN = ROOT / 'wordlists' / '5letter_words.txt'
OUT = ROOT / 'wordlists' / '5letter_words_mixed.txt'

if not IN.exists():
    raise SystemExit(f'Input file not found: {IN}')

lines = [l.strip() for l in IN.read_text(encoding='utf-8').splitlines() if l.strip()]
# keep only five-letter alphabetical words
words = [w.lower() for w in lines if len(w)==5 and w.isalpha()]

buckets = defaultdict(deque)
for w in words:
    buckets[w[0]].append(w)

letters = list(buckets.keys())
# Shuffle letters to avoid predictable order
random.seed(0)
random.shuffle(letters)

out = []
# Round-robin across letters, reshuffling order each pass for extra variety
while any(buckets[l] for l in letters):
    random.shuffle(letters)
    for l in letters:
        if buckets[l]:
            out.append(buckets[l].popleft())

OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text('\n'.join(out)+"\n", encoding='utf-8')

# Print summary and sample
from collections import Counter
ctr = Counter(w[0] for w in out)
print(f'Wrote {len(out)} words to {OUT}')
print('Distribution by starting letter:')
for k in sorted(ctr.keys()):
    print(f'{k}: {ctr[k]}')
print('\nFirst 40 words sample:')
print(', '.join(out[:40]))
