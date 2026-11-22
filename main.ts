// news-image-20261122 v2 — "The Sunday Final"
// The entry image ships in this repository as entry.png (a JPEG, despite the
// name — the rules tell the formats apart by their first bytes). This program
// copies it, byte for byte, to the output directory, so both scored runs
// produce exactly the same file and there is nothing to fetch at run time.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoDir = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
copyFileSync(join(repoDir, "entry.png"), join(outDir, "entry.png"));

console.log("wrote", join(outDir, "entry.png"));
