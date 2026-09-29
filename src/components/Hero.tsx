import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { PRODUCT } from '../config/product';
import { ArrowRight, ShieldCheck, Zap, Smartphone, Sparkles, BookOpen, Check } from 'lucide-react';
import heroImage from '../assets/images/hero_course_preview_1790675174532.jpg';

interface HeroProps {
  onOpenCheckout: () => void;
  isOfferExpired: boolean;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCheckout, isOfferExpired }) => {
  const currentPrice = isOfferExpired ? PRODUCT.regularPrice : PRODUCT.launchPrice;
  const regularPrice = PRODUCT.regularPrice;
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="hero" className="relative pt-24 sm:pt-32 pb-14 sm:pb-20 overflow-hidden">
      {/* Subtle ambient light accents */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-48 right-0 w-[350px] h-[350px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Copy & Value Proposition with entrance animation */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-start text-left"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            
            {/* Offer Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-950/60 border border-violet-500/30 text-violet-300 text-xs font-semibold tracking-wide mb-5 shadow-sm shadow-violet-900/20">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
              </span>
              <span>🔥 OFFRE DE LANCEMENT</span>
              <span className="text-violet-400/60">·</span>
              <span className="text-violet-200">Afrique Francophone</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-5 font-display">
              Apprends à créer avec l’IA et transforme tes compétences en revenus.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-6 font-normal max-w-xl">
              Une formation pratique pour débutants qui t'apprend à utiliser l'intelligence artificielle depuis ton téléphone pour créer du contenu, des produits numériques et commencer à les vendre en ligne.
            </p>

            {/* Price Presentation */}
            <div className="w-full sm:w-auto p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800/80 mb-6 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="flex items-baseline gap-2.5">
                  {!isOfferExpired && (
                    <span className="text-lg sm:text-xl text-neutral-500 line-through font-semibold">
                      {regularPrice.toLocaleString('fr-FR')} FCFA
                    </span>
                  )}
                  <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
                    {currentPrice.toLocaleString('fr-FR')} <span className="text-xl sm:text-2xl text-purple-400 font-bold">FCFA</span>
                  </span>
                </div>

                {!isOfferExpired && (
                  <span className="px-2.5 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                    -50%
                  </span>
                )}
              </div>
              <p className="text-xs text-neutral-400 mt-1">
                Accès complet aux 5 modules + tous les bonus inclus à vie.
              </p>
            </div>

            {/* Primary CTA Button */}
            <div className="w-full sm:w-auto flex flex-col items-stretch sm:items-start gap-3">
              <button
                onClick={onOpenCheckout}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 hover:from-violet-500 hover:via-indigo-500 hover:to-blue-500 text-white text-base sm:text-lg font-bold tracking-wide shadow-xl shadow-violet-600/30 hover:shadow-violet-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 cursor-pointer group"
              >
                <span>🚀 Obtenir ma formation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Sub-CTA Trust markers */}
              <div className="text-xs text-neutral-400 flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-1">
                <span className="flex items-center gap-1 text-neutral-300">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Paiement sécurisé
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 text-neutral-300">
                  <Zap className="w-3.5 h-3.5 text-amber-400" /> Livraison instantanée
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 text-neutral-300">
                  <Smartphone className="w-3.5 h-3.5 text-blue-400" /> Accès depuis ton téléphone
                </span>
              </div>

              {/* Micro-reassurance */}
              <div className="text-xs text-purple-300/90 font-medium flex items-center gap-1.5 mt-0.5">
                <Check className="w-3.5 h-3.5 text-purple-400" />
                <span>Aucune compétence technique nécessaire.</span>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Visual Mockup Showcase with subtle delayed fade-in */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative background aura */}
              <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/30 to-blue-500/20 rounded-3xl blur-2xl -z-10" />

              {/* Card Container */}
              <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-[#0e1017] p-2.5 sm:p-3 shadow-2xl shadow-purple-950/40">
                
                {/* Main Hero Preview Image */}
                <div className="relative aspect-[16/10] sm:aspect-[16/10] rounded-xl overflow-hidden bg-neutral-950">
                  <img
                    src={heroImage}
                    alt="Mockup de la formation IA complète ADN Studio Numérique"
                    className="w-full h-full object-cover"
                    loading="eager"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                  {/* On-image badge */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                    <span className="font-semibold px-2.5 py-1 rounded bg-black/60 backdrop-blur-md border border-white/10 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-violet-400" />
                      5 Modules PDF + Prompts + Bonus
                    </span>
                    <span className="font-bold text-emerald-400 px-2 py-0.5 rounded bg-emerald-950/70 border border-emerald-500/30">
                      Mobile Ready
                    </span>
                  </div>
                </div>

                {/* Sub-mockup highlights grid */}
                <div className="grid grid-cols-3 gap-2 mt-2.5 text-[11px] text-neutral-300">
                  <div className="p-2 rounded-lg bg-neutral-900/90 border border-neutral-800/80 text-center flex flex-col items-center">
                    <span className="text-violet-400 font-bold text-xs">ChatGPT</span>
                    <span className="text-[10px] text-neutral-400">Prompts prêts</span>
                  </div>
                  <div className="p-2 rounded-lg bg-neutral-900/90 border border-neutral-800/80 text-center flex flex-col items-center">
                    <span className="text-cyan-400 font-bold text-xs">Canva & Gamma</span>
                    <span className="text-[10px] text-neutral-400">Design mobile</span>
                  </div>
                  <div className="p-2 rounded-lg bg-neutral-900/90 border border-neutral-800/80 text-center flex flex-col items-center">
                    <span className="text-emerald-400 font-bold text-xs">MoMo & OM</span>
                    <span className="text-[10px] text-neutral-400">Vente directe</span>
                  </div>
                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
