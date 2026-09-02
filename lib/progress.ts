"use client";

const STORAGE_KEY = "bytebasics:progress:v1";

export interface QuizScoreEntry {
  moduleId: number;
  score: number; // 0-100
  takenAt: string;
}

export interface ProgressState {
  completedSlugs: string[];
  currentSlug: string | null;
  quizScores: QuizScoreEntry[];
  streakDays: number;
  lastVisit: string | null; // ISO date, day granularity
}

const DEFAULT_STATE: ProgressState = {
  completedSlugs: [],
  currentSlug: null,
  quizScores: [],
  streakDays: 0,
  lastVisit: null,
};

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

export function loadProgress(): ProgressState {
  if (typeof window === "undefined") return DEFAULT_STATE;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_STATE;
    return { ...DEFAULT_STATE, ...JSON.parse(raw) };
  } catch {
    return DEFAULT_STATE;
  }
}

function save(state: ProgressState) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

/** Call once on app load to bump the daily streak. */
export function touchStreak(): ProgressState {
  const state = loadProgress();
  const today = todayISO();
  if (state.lastVisit === today) return state;

  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  const next: ProgressState = {
    ...state,
    streakDays: state.lastVisit === yesterday ? state.streakDays + 1 : 1,
    lastVisit: today,
  };
  save(next);
  return next;
}

export function markTopicComplete(slug: string): ProgressState {
  const state = loadProgress();
  const completedSlugs = state.completedSlugs.includes(slug)
    ? state.completedSlugs
    : [...state.completedSlugs, slug];
  const next = { ...state, completedSlugs, currentSlug: slug };
  save(next);
  return next;
}

export function setCurrentTopic(slug: string): ProgressState {
  const state = loadProgress();
  const next = { ...state, currentSlug: slug };
  save(next);
  return next;
}

export function recordQuizScore(moduleId: number, score: number): ProgressState {
  const state = loadProgress();
  const next: ProgressState = {
    ...state,
    quizScores: [
      ...state.quizScores.filter((q) => q.moduleId !== moduleId),
      { moduleId, score, takenAt: new Date().toISOString() },
    ],
  };
  save(next);
  return next;
}

export function resetProgress(): ProgressState {
  save(DEFAULT_STATE);
  return DEFAULT_STATE;
}
