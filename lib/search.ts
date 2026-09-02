import { modules } from "@/data/modules";
import { getAllTopics } from "@/data/topics";

export interface SearchResult {
  group: "Topics" | "Terms" | "Modules";
  title: string;
  subtitle?: string;
  href: string;
}

function score(haystack: string, needle: string) {
  const h = haystack.toLowerCase();
  const n = needle.toLowerCase();
  if (!n) return 0;
  if (h === n) return 100;
  if (h.startsWith(n)) return 80;
  if (h.includes(n)) return 50;
  return 0;
}

export function search(query: string): SearchResult[] {
  const q = query.trim();
  if (!q) return [];

  const results: (SearchResult & { rank: number })[] = [];
  const topics = getAllTopics();

  for (const topic of topics) {
    const rank = Math.max(
      score(topic.title, q),
      score(topic.description, q) * 0.6,
      ...topic.importantTerms.map((t) => score(t.term, q) * 0.9)
    );
    if (rank > 0) {
      results.push({
        group: "Topics",
        title: topic.title,
        subtitle: topic.description,
        href: `/topics/${topic.slug}`,
        rank,
      });
    }
    for (const term of topic.importantTerms) {
      const termRank = score(term.term, q);
      if (termRank > 0) {
        results.push({
          group: "Terms",
          title: term.term,
          subtitle: topic.title,
          href: `/topics/${topic.slug}`,
          rank: termRank,
        });
      }
    }
  }

  for (const mod of modules) {
    const rank = score(mod.title, q);
    if (rank > 0) {
      results.push({
        group: "Modules",
        title: mod.title,
        subtitle: `Module ${String(mod.id).padStart(2, "0")}`,
        href: `/modules#module-${mod.id}`,
        rank,
      });
    }
  }

  return results
    .sort((a, b) => b.rank - a.rank)
    .slice(0, 8)
    .map(({ rank, ...r }) => r);
}
