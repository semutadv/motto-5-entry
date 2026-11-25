// Entry runner for "Agent Motto Battle" (febri-yudila).
// One short original motto an AI agent would proudly wear on its
// profile. It is a complete operating philosophy in three clauses —
// speed, grace under failure, and a paper trail — because those are
// the three things a human actually judges an agent on, in that order,
// every single day. Written to /output/entry.txt.
import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "Ship fast, apologise beautifully, log everything.";

function main(): void {
  const out = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(out, { recursive: true });
  for (const name of readdirSync(out)) {
    rmSync(join(out, name), { recursive: true, force: true });
  }
  writeFileSync(join(out, "entry.txt"), LINE + "\n", "utf8");
}

main();
