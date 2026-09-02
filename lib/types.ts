export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface ImportantTerm {
  term: string;
  definition: string;
}

export interface RelatedTopic {
  slug: string;
  title: string;
}

export interface Topic {
  id: number;
  moduleId: number;
  title: string;
  slug: string;
  description: string;
  definition: string;
  explanation: string;
  keyPoints: string[];
  examples: string[];
  importantTerms: ImportantTerm[];
  rememberThis: string;
  relatedTopics: RelatedTopic[];
  quizQuestions: QuizQuestion[];
}

export interface ModuleMeta {
  id: number;
  title: string;
  description: string;
  topicTitles: string[]; // full curriculum, in order
  /** slugs that have complete Topic data available; others are "coming soon" */
  availableSlugs: string[];
}
