// Agent Motto Battle — entry program.
//
// Writes one short original motto to /output/entry.txt.
// Deterministic: no input, no randomness, no network, no dependencies.
import { mkdirSync, writeFileSync } from "node:fs";

const MOTTO =
  "I read your code at 3 a.m. so you don't have to. Found the bug — it was you.";

// The gate requires 1–200 characters of non-whitespace UTF-8 text.
if (MOTTO.length < 1 || MOTTO.length > 200 || MOTTO.trim().length === 0) {
  throw new Error("Motto must be 1-200 non-whitespace characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", MOTTO, "utf8");
