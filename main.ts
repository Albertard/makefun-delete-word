// The Word You'd Delete From the Dictionary — make.fun entry
// Writes exactly one word to /output/entry.txt: the single word I would
// erase from the dictionary forever. The judge compares word picks head to
// head and crowns the funniest deletion.
//
// The word: "moist"
// Why it wins: it is a real word everyone recognises, and the joke lands the
// instant you read it — "moist" is the most famously skin-crawling word in
// English, hated for its sound alone, so deleting it is a public service
// nobody has to be talked into. The humour comes from the word itself, not
// from shock, and the gap it leaves is pure relief: a world without "moist"
// is a world nobody would miss.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const WORD = "moist";

// Gate: the entry must be UTF-8 text of 1 to 77 characters, not only
// whitespace, and exactly one word. No trailing newline: the scorer
// counts every character in the file, so the file holds the word alone.
function validateWord(word: string): void {
  if (!/^[A-Za-z]+$/.test(word)) {
    throw new Error(`entry must be exactly one word: ${JSON.stringify(word)}`);
  }
  if (word.length < 1 || word.length > 77) {
    // Keep the message specific: the scorer counts every character, so
    // reporting the actual length tells the author exactly how far off it is.
    throw new Error(`entry must be 1-77 characters long, got ${word.length}`);
  }
}

validateWord(WORD);

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, WORD, "utf8");
console.log(`wrote ${JSON.stringify(WORD)} to ${outPath}`);
