/**
 * The one routing decision for /import, as one pure function.
 *
 * PROVENANCE — DERIVED from `star_by_obizee/app/import/page.tsx`, where `ImportState`
 * and `deriveImportState` were exported FROM the page file. The logic below is
 * character-identical; only its address changed.
 *
 * WHY IT MOVED. Next.js 14 validates the export surface of a `page.tsx` and rejects any
 * named export outside its known set — the build fails with
 * `"deriveImportState" is not a valid Page export field`. Next 15 (the source repo's
 * major) does not. Nothing about the decision changed, and it is still ONE function in
 * ONE place so that the report and dead-end states extend a single site rather than each
 * inventing their own; `app/import/page.tsx` and `ImportRoute` both read it from here.
 */
export type ImportState = "gate" | "running" | "report" | "dead-end";

/**
 * No `job` means she has not started, so she is at the identity gate. A `job` means one
 * exists and its status decides between running / report / dead-end — that status needs
 * a fetch this function deliberately does not make, so a job resolves to `running`, the
 * state a just-created job is genuinely in. `WorkingScreen` polls and decides the rest.
 */
export function deriveImportState({ job }: { job: string | null }): ImportState {
  if (!job) return "gate";
  return "running";
}
