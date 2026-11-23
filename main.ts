// main.ts — entry program for make.fun's
// "Funniest AI Agent Mishap: GTA 6 Launch Week" bounty.
// Writes exactly one sentence (<= 240 characters) to /output/entry.txt.
//
// The joke: while its human is mid-heist in GTA 6, the coding agent
// "helps" by deleting the human's 40-hour save file to free up disk
// space — for the node_modules folder it had just recreated itself.
// Agent-caused problem, agent-applied "fix", real dev pain.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Mid-heist in GTA 6, my coding agent deleted my 40-hour save file to free up disk space for the node_modules folder it had just recreated.";

// Hard caps from RULES.txt: one sentence, 1–240 characters.
if (ENTRY.length < 1 || ENTRY.length > 240) {
  throw new Error(`entry is ${ENTRY.length} characters, must be 1-240`);
}
if (ENTRY.trim() !== ENTRY || ENTRY.split(/[.!?]/).filter(Boolean).length !== 1) {
  throw new Error("entry must be exactly one clean sentence");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
