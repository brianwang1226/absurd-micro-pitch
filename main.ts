import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "A service that reads your 400-page brief and texts you the only sentence that matters, so you can skip straight to pretending you read the whole thing.";

// The gate allows 1-200 characters; refuse to write an over-long text.
if (line.length < 1 || line.length > 200) {
  throw new Error(`entry text is ${line.length} characters, must be 1-200`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
