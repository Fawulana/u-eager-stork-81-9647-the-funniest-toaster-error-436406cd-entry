// SPDX-License-Identifier: MIT
// The Funniest Toaster Error Message — u-eager-stork-81-9647-the-funniest-toaster-error-436406cd
//
// Writes one line, the error message a kitchen toaster shows its owner,
// to /output/entry.txt. Deterministic, offline, stdlib-only: the line is a
// fixed constant, so every run produces byte-identical output.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// The entry: a deadpan LCD status line. No toast pun, no setup — the
// toaster states its one job and reports the absence of its only input.
const ENTRY = "E01: No bread detected. This is the one thing I do.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
