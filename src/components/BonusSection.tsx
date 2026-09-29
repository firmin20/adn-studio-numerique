import React from 'react';
import { BONUSES } from '../config/product';
import { GraduationCap, BrainCircuit, CalendarDays, MessageSquareQuote, CheckCircle2, Gift } from 'lucide-react';

export const BonusSection: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'formation':
        return <GraduationCap className="w-5 h-5 text-violet-400" />;
      case 'prompts':
        return <BrainCircuit className="w-5 h-5 text-cyan-400" />;
      case 'calendar':
        return <CalendarDays className="w-5 h-5 text-emerald-400" />;
      case 'messages':
        return <MessageSquareQuote className="w-5 h-5 text-amber-400" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="bonus" className="py-16 sm:py-24 bg-[#090a0f] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-950/60 border border-violet-500/30 text-violet-300 text-xs font-semibold mb-3">
            <Gift className="w-3.5 h-3.5 text-violet-400" />
            <span>Bonus Offerts</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-snug font-display">
            🎁 Tu ne repars pas seulement avec une formation.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-300">
            Un écosystème d'outils et de ressources immédiatement exploitables pour accélérer tes premiers résultats dès la première semaine.
          </p>
        </div>

        {/* Bonus Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {BONUSES.map((bonus, idx) => (
            <div
              key={bonus.id}
              className={`rounded-2xl border p-6 flex flex-col justify-between transition-all group ${
                idx === 0
                  ? 'md:col-span-2 lg:col-span-1 bg-gradient-to-b from-[#131524] to-[#0e1017] border-violet-500/40 shadow-lg shadow-purple-950/20'
                  : 'bg-[#0e1017] border-neutral-800 hover:border-neutral-700'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(bonus.id)}
                  </div>
                  {bonus.value > 0 ? (
                    <div className="text-right">
                      <span className="text-[10px] text-neutral-500 uppercase tracking-wider block">Valeur réelle</span>
                      <span className="text-xs font-bold text-neutral-300 bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800 tabular-nums">
                        {bonus.value.toLocaleString('fr-FR')} FCFA
                      </span>
                    </div>
                  ) : (
                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-500/30 uppercase">
                      Inclus
                    </span>
                  )}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white mb-2 font-display">
                  {bonus.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {bonus.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs">
                <span className="text-purple-400 font-semibold flex items-center gap-1">
                  ✓ Accès instantané à vie
                </span>
                <span className="text-neutral-500 text-[11px]">Format numérique</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
