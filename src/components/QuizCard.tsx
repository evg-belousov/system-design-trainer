'use client';

import type { Difficulty } from '@/data/types';

interface QuizCardProps {
  questionNumber: number;
  totalQuestions: number;
  question: string;
  difficulty: Difficulty;
  topicLabel: string;
  children?: React.ReactNode;
}

const difficultyColors: Record<Difficulty, string> = {
  junior: 'bg-green-100 text-green-800',
  middle: 'bg-yellow-100 text-yellow-800',
  senior: 'bg-red-100 text-red-800',
};

export function QuizCard({ questionNumber, totalQuestions, question, difficulty, topicLabel, children }: QuizCardProps) {
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-gray-500">{questionNumber} / {totalQuestions}</span>
        <div className="flex gap-2">
          <span className="text-sm px-2 py-1 rounded bg-blue-100 text-blue-800">{topicLabel}</span>
          <span className={`text-sm px-2 py-1 rounded ${difficultyColors[difficulty]}`}>{difficulty}</span>
        </div>
      </div>
      <h2 className="text-lg font-semibold text-gray-900 mb-6">{question}</h2>
      {children}
    </div>
  );
}
