'use client';

interface LoadingStateProps {
  progress: number;
}

const loadingMessages = [
  'analyzing your chaos... 👀',
  'measuring narcissism levels... 📊',
  'checking red flags... 🚩',
  'predicting your future mistakes... 🔮',
  'crafting your roast... 🔥',
  'AI is in therapy about you rn 😭',
  'compiling your personality disasters... 💀',
  'almost done being real with you... ✨',
];

export default function LoadingState({ progress }: LoadingStateProps) {
  const messageIndex = Math.floor((progress / 100) * (loadingMessages.length - 1));
  const currentMessage = loadingMessages[messageIndex];

  return (
    <div className="min-h-screen gradient-primary flex items-center justify-center p-4 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute top-32 right-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-32 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="max-w-md w-full text-center relative z-10">
        <div className="mb-12">
          {/* Premium spinner with glow */}
          <div className="relative w-32 h-32 mx-auto mb-8">
            {/* Outer glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-400/20 blur-xl pulse-glow" />
            
            {/* Animated border */}
            <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-border p-1">
              <div className="w-full h-full rounded-full bg-[#0a1228]" />
            </div>

            {/* Spinning ring */}
            <div
              className="absolute inset-0 rounded-full border-4 border-transparent border-t-cyan-400 border-r-cyan-300/50 animate-spin"
              style={{ animation: 'spin 3s linear infinite' }}
            />

            {/* Center emoji */}
            <div className="absolute inset-0 rounded-full flex items-center justify-center text-4xl float-animation">
              ✨
            </div>
          </div>
        </div>

        {/* Message */}
        <p className="text-bold-md text-white mb-8 min-h-8">{currentMessage}</p>

        {/* Premium progress bar */}
        <div className="glass-effect p-6 border border-cyan-400/20">
          <div className="flex justify-between items-center mb-4">
            <p className="text-xs text-cyan-300 font-semibold uppercase tracking-widest">Analyzing</p>
            <p className="text-2xl font-black text-gradient">{Math.round(progress)}%</p>
          </div>

          <div className="relative h-3 bg-blue-950/50 rounded-full overflow-hidden border border-cyan-400/20">
            <div
              className="h-full gradient-secondary transition-all duration-500 ease-out glow-cyan"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <p className="text-xs text-blue-300/50 mt-8">Your personality awaits...</p>

        <style jsx>{`
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
    </div>
  );
}
