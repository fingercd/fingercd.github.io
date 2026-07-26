import {
  copyFileSync,
  cpSync,
  existsSync,
  mkdirSync,
  rmSync,
} from "node:fs";
import { basename, dirname, resolve } from "node:path";

const projectRoot = resolve(process.cwd());
const staticExport = resolve(projectRoot, "out");
const openNextEnvelope = resolve(projectRoot, ".open-next");
const assetsDirectory = resolve(openNextEnvelope, "assets");
const workerTemplate = resolve(
  projectRoot,
  "scripts",
  "sites-static-worker.js",
);

if (
  dirname(openNextEnvelope) !== projectRoot ||
  basename(openNextEnvelope) !== ".open-next"
) {
  throw new Error("Refusing to replace an unexpected build directory.");
}

if (!existsSync(staticExport)) {
  throw new Error("Static export not found. Run npm run build:static first.");
}

if (!existsSync(workerTemplate)) {
  throw new Error("Sites static worker template is missing.");
}

rmSync(openNextEnvelope, { recursive: true, force: true });
mkdirSync(assetsDirectory, { recursive: true });
cpSync(staticExport, assetsDirectory, { recursive: true });
copyFileSync(workerTemplate, resolve(openNextEnvelope, "worker.js"));

process.stdout.write(
  "Prepared .open-next/worker.js and .open-next/assets from the static export.\n",
);
