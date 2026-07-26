# Private content staging

This directory is deliberately excluded from Git and from every application
import. Keep `review` and `private` drafts here, not under `src/`.

The `visibility` filter in `src/lib/content.ts` is defense in depth. It is not a
redaction tool: sensitive facts, phone numbers, credentials, unpublished
metrics, private partner names, and controlled data must never be copied into a
source module that participates in a public build.
