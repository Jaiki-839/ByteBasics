import { Topic } from "@/lib/types";
import { module01Topics } from "./module-01";

// As more modules get written, import and spread them here —
// e.g. `import { module02Topics } from "./module-02"` then add below.
const allTopics: Topic[] = [...module01Topics];

export function getAllTopics(): Topic[] {
  return allTopics;
}

export function getTopicBySlug(slug: string): Topic | undefined {
  return allTopics.find((t) => t.slug === slug);
}

export function getTopicsByModule(moduleId: number): Topic[] {
  return allTopics
    .filter((t) => t.moduleId === moduleId)
    .sort((a, b) => a.id - b.id);
}

export function getAdjacentTopics(slug: string) {
  const idx = allTopics.findIndex((t) => t.slug === slug);
  if (idx === -1) return { prev: undefined, next: undefined };
  return {
    prev: idx > 0 ? allTopics[idx - 1] : undefined,
    next: idx < allTopics.length - 1 ? allTopics[idx + 1] : undefined,
  };
}
