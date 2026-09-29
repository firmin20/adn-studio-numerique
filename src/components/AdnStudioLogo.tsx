import React from 'react';

interface AdnStudioLogoProps {
  variant?: 'compact' | 'standard' | 'full';
  className?: string;
  showSlogan?: boolean;
}

export const AdnStudioLogo: React.FC<AdnStudioLogoProps> = ({
  variant = 'compact',
  className = '',
  showSlogan = false,
}) => {
  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-2.5 select-none ${className}`}>
        {/* Emblem */}
        <div className="relative w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0 flex items-center justify-center">
          <svg
            viewBox="0 0 120 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full drop-shadow-[0_2px_8px_rgba(0,163,255,0.35)]"
          >
            <defs>
              <linearGradient id="adnBlueGradCompact" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00d2ff" />
                <stop offset="50%" stopColor="#0080ff" />
                <stop offset="100%" stopColor="#0051d4" />
              </linearGradient>
              <linearGradient id="adnWhiteGradCompact" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#cfd8dc" />
              </linearGradient>
            </defs>

            {/* Letter 'A' outer geometry */}
            <path
              d="M38 12 L10 88 L26 88 L34 68 L54 68 L60 88 L76 88 L48 12 Z"
              fill="url(#adnWhiteGradCompact)"
            />
            {/* Inner Play Triangle in 'A' */}
            <path
              d="M36 40 L50 54 L36 62 Z"
              fill="url(#adnBlueGradCompact)"
              className="drop-shadow-[0_0_6px_rgba(0,210,255,0.8)]"
            />

            {/* Letter 'D' connected block */}
            <path
              d="M58 20 C68 18 84 22 84 48 C84 74 68 82 56 82 L50 82 L56 68 C62 68 70 66 70 48 C70 32 62 30 56 30 Z"
              fill="url(#adnWhiteGradCompact)"
            />

            {/* Letter 'N' - right wing with cyan/blue gradient */}
            <path
              d="M74 34 L92 88 L108 88 L108 22 L94 22 L94 62 L82 28 Z"
              fill="url(#adnBlueGradCompact)"
              className="drop-shadow-[0_0_8px_rgba(0,128,255,0.6)]"
            />
          </svg>
        </div>

        {/* Wordmark */}
        <div className="flex flex-col leading-none">
          <div className="flex items-center gap-1 font-display tracking-tight text-base sm:text-lg font-black">
            <span className="text-white">STUDIO</span>
            <span className="text-[#00a6ff]">NUMÉRIQUE</span>
          </div>
          {showSlogan && (
            <span className="text-[8px] sm:text-[9px] uppercase tracking-widest text-neutral-400 font-semibold mt-0.5">
              Créer • Produire • Réussir
            </span>
          )}
        </div>
      </div>
    );
  }

  // Full / Standard badge as seen in the official animation
  return (
    <div className={`flex flex-col items-center select-none text-center ${className}`}>
      {/* Official 3D-styled Emblem */}
      <div className="relative w-28 sm:w-36 h-20 sm:h-24 mb-2">
        <svg
          viewBox="0 0 160 110"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full filter drop-shadow-[0_10px_25px_rgba(0,140,255,0.35)]"
        >
          <defs>
            <linearGradient id="adnBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00e5ff" />
              <stop offset="45%" stopColor="#0091ff" />
              <stop offset="100%" stopColor="#0055ff" />
            </linearGradient>
            <linearGradient id="adnSilverGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="60%" stopColor="#f0f3f6" />
              <stop offset="100%" stopColor="#b0bec5" />
            </linearGradient>
            <radialGradient id="adnGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(0, 163, 255, 0.4)" />
              <stop offset="100%" stopColor="rgba(0, 163, 255, 0)" />
            </radialGradient>
          </defs>

          {/* Background ambient glow */}
          <circle cx="80" cy="55" r="45" fill="url(#adnGlow)" />

          {/* 3D Bevel 'A' */}
          <path
            d="M48 10 L10 95 L32 95 L42 70 L68 70 L76 95 L98 95 L58 10 Z"
            fill="url(#adnSilverGrad)"
          />
          
          {/* Glowing Play Triangle inside A */}
          <path
            d="M44 38 L62 55 L44 65 Z"
            fill="url(#adnBlueGrad)"
            className="filter drop-shadow-[0_0_8px_rgba(0,229,255,0.9)]"
          />

          {/* Connected 'D' arch */}
          <path
            d="M74 20 C88 18 110 22 110 52 C110 82 88 92 72 92 L64 92 L72 74 C82 74 92 70 92 52 C92 34 82 32 74 32 Z"
            fill="url(#adnSilverGrad)"
          />

          {/* Vivid Cyan-Electric Blue 'N' */}
          <path
            d="M96 35 L120 95 L144 95 L144 18 L126 18 L126 68 L108 28 Z"
            fill="url(#adnBlueGrad)"
            className="filter drop-shadow-[0_0_12px_rgba(0,145,255,0.7)]"
          />
        </svg>
      </div>

      {/* Typography: STUDIO NUMÉRIQUE */}
      <div className="flex items-center gap-1.5 font-display font-black tracking-wider text-xl sm:text-2xl leading-none">
        <span className="text-white drop-shadow-sm">STUDIO</span>
        <span className="text-[#00a6ff] drop-shadow-[0_0_12px_rgba(0,166,255,0.6)]">NUMÉRIQUE</span>
      </div>

      {/* Official Slogan */}
      <p className="mt-2 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-neutral-300">
        CRÉER <span className="text-[#00a6ff]">•</span> PRODUIRE <span className="text-[#00a6ff]">•</span> RÉUSSIR
      </p>

      {/* 5 Official Studio Expertise Pillars */}
      {variant === 'full' && (
        <div className="mt-6 pt-5 border-t border-neutral-800/80 w-full max-w-2xl grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-[10px] uppercase font-semibold tracking-wider text-neutral-300">
          <div className="p-2 rounded-lg bg-neutral-900/60 border border-neutral-800">
            <span className="block text-base mb-1">✒️</span>
            Graphisme
          </div>
          <div className="p-2 rounded-lg bg-neutral-900/60 border border-neutral-800">
            <span className="block text-base mb-1">📷</span>
            Photo & Vidéo
          </div>
          <div className="p-2 rounded-lg bg-neutral-900/60 border border-neutral-800">
            <span className="block text-base mb-1">🎬</span>
            Montage & Contenu
          </div>
          <div className="p-2 rounded-lg bg-neutral-900/60 border border-neutral-800">
            <span className="block text-base mb-1">📢</span>
            Publicité & Com
          </div>
          <div className="col-span-2 sm:col-span-1 p-2 rounded-lg bg-neutral-900/60 border border-neutral-800 text-[#00a6ff]">
            <span className="block text-base mb-1">&lt;/&gt;</span>
            Solutions Digitales
          </div>
        </div>
      )}
    </div>
  );
};
