'use client';

import { useState } from 'react';
import { Question } from '@/lib/quiz-data';

interface QuizQuestionProps {
  question: Question;
  onAnswerSelect: (index: number) => void;
  questionNumber: number;
  totalQuestions: number;
}

export default function QuizQuestion({
  question,
  onAnswerSelect,
  questionNumber,
  totalQuestions,
}: QuizQuestionProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAnswerClick = (index: number) => {
    setSelectedAnswer(index);
    setIsSubmitting(true);
    setTimeout(() => {
      onAnswerSelect(index);
      setSelectedAnswer(null);
      setIsSubmitting(false);
    }, 300);
  };

  return (
    <div className="w-full">
      <div className="glass-effect p-8 border border-cyan-400/20">
        <h2 className="text-bold-lg text-white mb-2 text-balance leading-snug">
          {question.question}
        </h2>
        <div className="h-1 w-12 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mb-8" />

        <div className="space-y-3">
          {question.answers.map((answer, index) => (
            <button
              key={index}
              onClick={() => handleAnswerClick(index)}
              disabled={isSubmitting}
              className={`w-full text-left transition-all duration-200 text-balance ${
                selectedAnswer === index
                  ? 'answer-btn-selected'
                  : 'answer-btn'
              } ${isSubmitting ? 'opacity-50' : ''}`}
            >
              <span className="flex items-center gap-3">
                <span className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                  selectedAnswer === index
                    ? 'border-slate-900 bg-gradient-to-r from-cyan-400 to-blue-400'
                    : 'border-cyan-400/50 hover:border-cyan-400'
                }`}>
                  {selectedAnswer === index && <span className="text-xs">✓</span>}
                </span>
                {answer.text}
              </span>
            </button>
          ))}
        </div>

        <p className="text-xs text-blue-300/50 mt-8 text-center">
          Choose the one that hits different
        </p>
      </div>
    </div>
  );
}
