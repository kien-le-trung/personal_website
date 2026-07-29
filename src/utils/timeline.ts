import type { CollectionEntry } from "astro:content";

export type TimelineEntry = CollectionEntry<"timeline">;

export function sortTimeline(entries: TimelineEntry[]) {
  return [...entries].sort((a, b) => {
    const aCurrent = a.data.endDate ? 0 : 1;
    const bCurrent = b.data.endDate ? 0 : 1;
    if (aCurrent !== bCurrent) return bCurrent - aCurrent;
    return b.data.startDate.getTime() - a.data.startDate.getTime();
  });
}

const dateFormatter = new Intl.DateTimeFormat("en", {
  month: "short",
  year: "numeric",
});

export function formatDateRange(start: Date, end?: Date) {
  const startLabel = dateFormatter.format(start);
  return `${startLabel} — ${end ? dateFormatter.format(end) : "Now"}`;
}
