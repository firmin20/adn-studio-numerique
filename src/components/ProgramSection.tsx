import React, { useState } from 'react';
import { COURSE_MODULES, CourseModule } from '../config/product';
import { ChevronDown, ChevronUp, CheckCircle, Sparkles, Star, TrendingUp, Layers } from 'lucide-react';

export const ProgramSection: React.FC = () => {
  const [openModuleId, setOpenModuleId] = useState<number | null>(null);

  const toggleModule = (id: number) => {
    setOpenModuleId(openModuleId === id ? null : id);
  };

  return (
    <section id="programme" className="py-16 sm:py-24 bg-[#0a0b12] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-wider text-purple-400 font-semibold mb-2 block">
            Curriculum Complet
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-snug font-display">
            📚 5 modules pour passer de débutant à créateur
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-300">
            Un parcours chronologique, pragmatique et orienté résultats pour maîtriser chaque étape.
          </p>
        </div>

        {/* Modules List */}
        <div className="space-y-4">
          {COURSE_MODULES.map((module) => {
            const isExpanded = openModuleId === module.id || module.id === 3; // Keep module 3 expanded by default for maximum value visibility
            const isHighlight = module.id === 3;

            return (
              <div
                key={module.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isHighlight
                    ? 'bg-[#10121e] border-violet-500/50 shadow-xl shadow-purple-950/30'
                    : 'bg-[#0e1017] border-neutral-800 hover:border-neutral-700/80'
                }`}
              >
                {/* Module Header Bar */}
                <button
                  onClick={() => toggleModule(module.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-start sm:items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isExpanded}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 flex-1">
                    {/* Module Number & Badge */}
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-xs font-bold text-neutral-400 uppercase tracking-wider">
                        {module.number}
                      </span>
                      <span
                        className={`text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
                          isHighlight
                            ? 'bg-violet-600/30 text-violet-300 border border-violet-500/40'
                            : 'bg-neutral-800 text-neutral-300'
                        }`}
                      >
                        {module.badge}
                      </span>
                      {isHighlight && (
                        <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold text-amber-400 bg-amber-950/40 px-2 py-0.5 rounded border border-amber-500/30">
                          <Star className="w-3 h-3 fill-amber-400" />
                          Module Clé de Revenus
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold text-white font-display">
                      {module.title}
                    </h3>
                  </div>

                  <div
                    className={`p-1.5 rounded-lg bg-neutral-800/80 flex-shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isExpanded ? 'rotate-180 bg-violet-950/60 text-violet-300' : 'text-neutral-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Animated Slide-down container */}
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
                  }`}
                  aria-hidden={!isExpanded}
                >
                  <div className="overflow-hidden">
                    <div
                      className={`px-5 pb-6 sm:px-6 sm:pb-6 pt-2 border-t border-neutral-800/60 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isExpanded ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'
                      }`}
                    >
                      <p className="text-xs sm:text-sm text-neutral-300 mb-4">
                        {module.description}
                      </p>

                      {/* Special Callout for Module 3 (Pricing Examples) */}
                      {module.id === 3 && (
                        <div className="p-4 rounded-xl bg-violet-950/30 border border-violet-500/30 mb-5">
                          <div className="flex items-center gap-2 mb-2 text-violet-300 font-bold text-xs uppercase tracking-wider">
                            <TrendingUp className="w-4 h-4 text-violet-400" />
                            <span>Exemples de tarifs recommandés à appliquer :</span>
                          </div>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                            <div className="p-2 rounded bg-black/40 border border-neutral-800">
                              <span className="text-neutral-400 block text-[10px]">Ebooks PDF</span>
                              <span className="font-bold text-white">2 000 – 15 000 FCFA</span>
                            </div>
                            <div className="p-2 rounded bg-black/40 border border-neutral-800">
                              <span className="text-neutral-400 block text-[10px]">Guides de révision</span>
                              <span className="font-bold text-white">1 000 – 5 000 FCFA</span>
                            </div>
                            <div className="p-2 rounded bg-black/40 border border-neutral-800">
                              <span className="text-neutral-400 block text-[10px]">Templates & CV</span>
                              <span className="font-bold text-white">Prêt à l'emploi</span>
                            </div>
                            <div className="p-2 rounded bg-black/40 border border-neutral-800">
                              <span className="text-neutral-400 block text-[10px]">Mini-formations</span>
                              <span className="font-bold text-emerald-400">10 000 – 30 000 FCFA</span>
                            </div>
                          </div>
                          <p className="text-xs text-purple-200/90 font-medium mt-3 italic">
                            « Tu apprends à transformer une simple idée en produit numérique téléchargeable. »
                          </p>
                        </div>
                      )}

                      {/* Special Callout for Module 4 (Sales Platforms) */}
                      {module.id === 4 && (
                        <div className="p-3 rounded-lg bg-blue-950/20 border border-blue-500/20 mb-4 text-xs text-blue-200">
                          <span className="font-bold">Règle d'or :</span> « Créer est une chose. Savoir vendre en est une autre. » Tu découvriras comment brancher MTN MoMo & Orange Money sans intermédiaire complexe.
                        </div>
                      )}

                      {/* Lessons Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {module.lessons.map((lesson, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2.5 p-2.5 rounded-lg bg-neutral-900/50 border border-neutral-800/60 text-xs sm:text-sm text-neutral-300"
                          >
                            <CheckCircle className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" />
                            <span>{lesson}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tools Tags & Key Takeaway */}
                      <div className="mt-4 pt-3 border-t border-neutral-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-neutral-400">
                        {module.tools && (
                          <div className="flex flex-wrap items-center gap-1.5">
                            <span className="text-neutral-500 text-[11px]">Outils :</span>
                            {module.tools.map((tool, i) => (
                              <span
                                key={i}
                                className="px-2 py-0.5 rounded bg-neutral-800 text-neutral-300 text-[11px] font-medium"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        )}
                        <div className="text-neutral-300 text-xs italic">
                          ⚡ {module.keyTakeaway}
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
