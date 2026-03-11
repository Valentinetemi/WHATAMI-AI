'use client';

import { useState } from 'react';
import { Share2, Twitter, MessageCircle, Copy, Check, RotateCcw } from 'lucide-react';
import { PersonalityType, getPersonalityResult } from '@/lib/quiz-data';

interface ResultCardProps {
  personalityType: PersonalityType;
  roast: string;
  onRetake: () => void;
  aiResult: string | null; 
}


export default function ResultCard({
  personalityType,
  roast,
  onRetake,
  aiResult,
}: ResultCardProps) {
  const result = getPersonalityResult(personalityType);
  const [copied, setCopied] = useState(false);

  const shareText = `I got ${result.emoji} ${result.title} on the What Am I AI personality quiz!

"${roast.split('\n')[0]}"

What's YOUR type? 👀`;

  const handleShare = async () => {
    const shareUrl = window.location.origin;
    const fullShareText = `${shareText}\n\n${shareUrl}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'What Am I AI - Personality Quiz',
          text: shareText,
          url: shareUrl,
        });
        return;
      } catch (err) {
        if (err instanceof Error && err.name === 'AbortError') return;
      }
    }

    // Fallback: copy to clipboard
    try {
      await navigator.clipboard.writeText(fullShareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Clipboard copy failed:', err);
    }
  };

  const shareToTwitter = () => {
    const shareUrl = window.location.origin;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(url, '_blank');
  };

  const shareToWhatsApp = () => {
    const shareUrl = window.location.origin;
    const url = `https://wa.me/?text=${encodeURIComponent(shareText + '\n\n' + shareUrl)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen gradient-primary flex items-center justify-center p-4 py-12 overflow-hidden relative">
      {/* Background glow effects */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="max-w-md w-full relative z-10">
        {/* Result Card */}
        <div className="glass-effect p-8 mb-8 border border-cyan-400/30 glow-cyan">
          {/* Emoji Badge with glow */}
          <div className="text-center mb-8 relative">
            <div className="absolute inset-0 flex items-center justify-center -top-8">
              <div className="w-48 h-48 bg-cyan-400/10 rounded-full blur-3xl pulse-glow" />
            </div>
            <div className="relative text-9xl mb-6 float-animation">{result.emoji}</div>
            <h1 className="text-bold-lg text-white mb-3">{result.title}</h1>
            <div
              className="h-1 w-24 mx-auto rounded-full glow-cyan"
              style={{ backgroundColor: result.color }}
            />
          </div>

         {/* Roast Section - AI or fallback */}
<div className="glass-effect-sm p-6 mb-6 border border-cyan-400/20">
  {aiResult ? (
    <p className="text-blue-50 text-base leading-relaxed font-medium">
      "{aiResult}"
    </p>
  ) : (
    <div className="flex items-center gap-3">
      <div className="w-4 h-4 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin" />
      <p className="text-cyan-300 text-sm">AI is analyzing your vibe...</p>
    </div>
  )}
</div>

          {/* Personality Stats */}
          <div className="space-y-2 mb-8">
            <div className="flex justify-between items-center text-xs">
              <span className="text-blue-300/70">Confidence</span>
              <span className="text-cyan-300 font-bold">98%</span>
            </div>
            <div className="relative h-2 bg-blue-950/50 rounded-full overflow-hidden border border-cyan-400/20">
              <div className="h-full gradient-secondary" style={{ width: '98%' }} />
            </div>
          </div>

          {/* Share CTA */}
          <div className="text-center">
            <p className="text-xs text-cyan-300/70 uppercase tracking-widest font-semibold mb-4">
              Show them your vibe
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <button
            onClick={handleShare}
            className="btn-primary-premium w-full flex items-center justify-center gap-2"
          >
            {copied ? <Check className="w-5 h-5" /> : <Share2 className="w-5 h-5" />}
            {copied ? 'Copied to Clipboard' : 'Share My Result'}
          </button>

          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={shareToTwitter}
              className="flex items-center justify-center gap-2 py-3 px-4 glass-effect-sm border border-cyan-400/20 text-cyan-300 font-bold hover:bg-white/10 transition-all rounded-xl"
            >
              <Twitter className="w-4 h-4" />
              Twitter
            </button>
            <button
              onClick={shareToWhatsApp}
              className="flex items-center justify-center gap-2 py-3 px-4 glass-effect-sm border border-cyan-400/20 text-cyan-300 font-bold hover:bg-white/10 transition-all rounded-xl"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </button>
          </div>

          <button
            onClick={onRetake}
            className="btn-secondary-premium w-full flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-5 h-5" />
            Retake Quiz
          </button>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-blue-300/50 mt-8 leading-relaxed">
          For entertainment purposes. Reality may vary, therapy not included 💙
        </p>
      </div>
    </div>
  );
}
