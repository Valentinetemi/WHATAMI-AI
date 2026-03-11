'use client';

import { useState, useEffect } from 'react';
import {
  getRandomQuestions,
  calculatePersonality,
  getAIRoast,
  PersonalityType,
  Question,
} from '@/lib/quiz-data';
import QuizQuestion from './QuizQuestion';
import LoadingState from './LoadingState';
import ResultCard from './ResultCard';

type QuizState = 'start' | 'questions' | 'loading' | 'result';

export default function QuizApp() {
  const [state, setState] = useState<QuizState>('start');
  const [questions, setQuestions] = useState<Question[]>(() => getRandomQuestions(5));
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [resultType, setResultType] = useState<PersonalityType | null>(null);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [aiResult, setAiResult] = useState<string | null>(null);

  useEffect(() => {
    if (state === 'loading') {
      const interval = setInterval(() => {
        setLoadingProgress((prev) => {
          const newProgress = prev + Math.random() * 30;
          if (newProgress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              const personality = calculatePersonality(answers, questions);
              setResultType(personality);
              setState('result');
            }, 500);
            return 100;
          }
          return newProgress;
        });
      }, 300);

      return () => clearInterval(interval);
    }
  }, [state, answers, questions]);

  useEffect(() => {
    if (state === 'loading') {
      const submitAnswers = async () => {
        try {
          const personality = calculatePersonality(answers, questions);
          const res = await fetch("/api/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ answers, personalityType: personality }),
          });
          const data = await res.json();
          setAiResult(data.result);
        } catch (error) {
          console.error("Submission error:", error);
        }
      };
      submitAnswers();
    }
  }, [state, answers, questions]);

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = {
      ...answers,
      [questions[currentQuestion].id]: answerIndex,
    };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setState('loading');
    }
  };

  const handleRetake = () => {
    setState('start');
    setCurrentQuestion(0);
    setAnswers({});
    setResultType(null);
    setLoadingProgress(0);
    setAiResult(null);
    setQuestions(getRandomQuestions(5)); // ✅ new random questions each retake
  };

  if (state === 'start') {
    return (
      <div className="min-h-screen gradient-primary flex items-center justify-center p-4 overflow-hidden relative">
        <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        
        <div className="max-w-md w-full text-center relative z-10">
          <div className="mb-12 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 bg-cyan-400/10 rounded-full blur-2xl pulse-glow" />
            </div>
            <div className="relative text-7xl float-animation">✨</div>
          </div>

          <h1 className="text-bold-xl text-white mb-4 text-gradient">What Am I AI</h1>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mx-auto mb-8" />
          
          <p className="text-lg text-blue-100 mb-12 leading-relaxed">
            Discover your GenZ personality type. Your AI therapist awaits. 🔥
          </p>
          
          <button
            onClick={() => setState('questions' as QuizState)}
            className="btn-primary-premium w-full mb-6"
          >
            Begin Your Journey →
          </button>
          
          <p className="text-sm text-blue-300/60">5 questions • Zero judgment • 100% accurate vibes</p>
        </div>
      </div>
    );
  }

  if (state === 'questions') {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    
    return (
      <div className="min-h-screen gradient-primary flex items-center justify-center p-4 py-12 overflow-hidden relative">
        <div className="absolute top-40 right-20 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />
        
        <div className="max-w-2xl w-full relative z-10">
          <div className="glass-effect p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-xs text-cyan-300 font-semibold uppercase tracking-widest mb-1">Question {currentQuestion + 1}</p>
                <p className="text-sm text-blue-200">{currentQuestion + 1}/{questions.length}</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-black text-gradient">{Math.round(progress)}%</p>
              </div>
            </div>
            
            <div className="relative h-2 bg-blue-950/50 rounded-full overflow-hidden border border-cyan-400/20">
              <div
                className="h-full gradient-secondary transition-all duration-500 ease-out glow-cyan"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <QuizQuestion
            question={questions[currentQuestion]}
            onAnswerSelect={handleAnswerSelect}
            questionNumber={currentQuestion + 1}
            totalQuestions={questions.length}
          />
        </div>
      </div>
    );
  }

  if (state === 'loading') {
    return <LoadingState progress={loadingProgress} />;
  }

  if (state === 'result' && resultType) {
    const roast = getAIRoast(resultType);
    return (
      <ResultCard
        personalityType={resultType}
        roast={roast}
        onRetake={handleRetake}
        aiResult={aiResult}
      />
    );
  }

  return null;
}