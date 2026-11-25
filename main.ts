// The Robot Vacuum's Best Excuse — make.fun entry (program/v1, Node 22).
// Writes exactly one line (91 characters, no trailing newline) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I vacuumed that spot 23 times, collected $0 worth of dust, and decided it was load-bearing.";

// Gate self-check: mirror the sealed scorer — 1 to 140 chars, single
// non-blank line. Refuse to write a bad entry that the gate would refuse.
function selfCheck(line: string): void {
  if (line.length < 1 || line.length > 140) {
    throw new Error(`entry must be 1-140 characters, got ${line.length}`);
  }
  if (line.trim().length === 0 || line.includes("\n")) {
    throw new Error("entry must be a single non-blank line");
  }
}

selfCheck(LINE);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
