import { notFound } from "next/navigation";
import { getAllTopics, getTopicBySlug } from "@/data/topics";
import { TopicLayout } from "@/components/topic/TopicLayout";

export function generateStaticParams() {
  return getAllTopics().map((t) => ({ slug: t.slug }));
}

export default async function TopicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const topic = getTopicBySlug(slug);

  if (!topic) notFound();

  return <TopicLayout topic={topic} />;
}

