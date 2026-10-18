import type { CollectionEntry } from "astro:content";

export type TimelineEntry = CollectionEntry<"timeline">;

export function sortTimeline(entries: TimelineEntry[]) {
  return [...entries].sort((a, b) => {
    const dateDifference = b.data.startDate.getTime() - a.data.startDate.getTime();
    return dateDifference || a.data.title.localeCompare(b.data.title);
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
