import React, { useState, useEffect } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Sparkles, CheckCircle2, TrendingUp, ArrowRight } from 'lucide-react';
import { PRODUCT } from '../config/product';

export interface VideoTestimonial {
  id: string;
  name: string;
  location: string;
  role: string;
  thumbnail: string;
  duration: string;
  result: string;
  productCreated: string;
  quote: string;
  videoUrl?: string; // Optional direct mp4 or youtube embed
}

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  video: VideoTestimonial | null;
  onOpenCheckout: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  video,
  onOpenCheckout,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(35);

  useEffect(() => {
    if (!isOpen) {
      setIsPlaying(false);
      setProgress(0);
      return;
    }
    setIsPlaying(true);
    setProgress(15);

    // Keyboard ESC to close
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Simulate progress when playing demo preview
  useEffect(() => {
    if (!isOpen || !isPlaying) return;
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 400);
    return () => clearInterval(interval);
  }, [isOpen, isPlaying]);

  if (!isOpen || !video) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      {/* Backdrop click */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-sm sm:max-w-md bg-[#0e1017] border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col max-h-[92vh]">
        
        {/* Top Bar with Name & Close */}
        <div className="p-4 bg-[#12141f] border-b border-neutral-800/80 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-violet-600/30 border border-violet-500/40 flex items-center justify-center text-violet-300 font-bold text-xs">
              {video.name.charAt(0)}
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h4 className="text-sm font-bold text-white leading-tight font-display">
                  {video.name}
                </h4>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <p className="text-[11px] text-neutral-400 leading-tight">
                {video.location} · {video.role}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-neutral-800/80 hover:bg-neutral-700 text-neutral-400 hover:text-white transition-colors"
            aria-label="Fermer la vidéo"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Video Player Display Area (9:16 vertical smartphone format) */}
        <div className="relative aspect-[9/14] sm:aspect-[9/13] w-full bg-black overflow-hidden flex items-center justify-center">
          {video.videoUrl ? (
            <iframe
              src={video.videoUrl}
              title={`Témoignage de ${video.name}`}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="relative w-full h-full select-none">
              {/* Poster image */}
              <img
                src={video.thumbnail}
                alt={`Témoignage vidéo de ${video.name}`}
                className="w-full h-full object-cover object-top"
              />

              {/* Dark gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/40 pointer-events-none" />

              {/* Status pill on top of video */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[11px]">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-emerald-400 border border-emerald-500/30 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Retour d'expérience vérifié
                </span>

                <span className="px-2 py-0.5 rounded-md bg-black/60 text-neutral-300 font-mono text-[10px] backdrop-blur-sm">
                  {video.duration}
                </span>
              </div>

              {/* Center Play / Pause Overlay */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-violet-600/85 hover:bg-violet-600 text-white flex items-center justify-center shadow-xl shadow-purple-950/60 backdrop-blur-sm transition-transform hover:scale-105 active:scale-95 cursor-pointer"
                aria-label={isPlaying ? 'Mettre en pause' : 'Lire'}
              >
                {isPlaying ? <Pause className="w-7 h-7" /> : <Play className="w-7 h-7 ml-1" />}
              </button>

              {/* Subtitles & learner highlight overlay */}
              <div className="absolute bottom-12 left-3 right-3 p-3 rounded-xl bg-black/75 backdrop-blur-md border border-white/10 text-left">
                <div className="flex items-center gap-1 text-[10px] text-violet-300 uppercase tracking-wider font-semibold mb-1">
                  <Sparkles className="w-3 h-3 text-violet-400" />
                  <span>Transcription sous-titres :</span>
                </div>
                <p className="text-xs text-neutral-200 leading-snug italic">
                  « {video.quote} »
                </p>
                <div className="mt-2 flex items-center justify-between pt-1.5 border-t border-white/10 text-[10px]">
                  <span className="text-purple-300 font-semibold flex items-center gap-1">
                    <TrendingUp className="w-3 h-3 text-emerald-400" /> {video.result}
                  </span>
                  <span className="text-neutral-400 truncate max-w-[140px]">
                    {video.productCreated}
                  </span>
                </div>
              </div>

              {/* Bottom Video Progress Bar & Sound Toggle */}
              <div className="absolute bottom-2 left-3 right-3 flex items-center gap-2">
                <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-violet-500 to-purple-400 transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-1 rounded bg-black/60 text-neutral-300 hover:text-white"
                  aria-label={isMuted ? 'Activer le son' : 'Couper le son'}
                >
                  {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer with Direct Action CTA */}
        <div className="p-4 bg-[#0a0b12] border-t border-neutral-800 flex flex-col gap-2">
          <button
            onClick={() => {
              onClose();
              onOpenCheckout();
            }}
            className="w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-lg shadow-purple-900/40 flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-[0.98]"
          >
            <span>Obtenir ma formation à 4 999 FCFA</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <p className="text-center text-[10px] text-neutral-400">
            Accès instantané aux 5 modules & bonus après confirmation
          </p>
        </div>

      </div>
    </div>
  );
};
