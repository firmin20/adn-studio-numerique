import React from 'react';
import { ArrowRight, HelpCircle, CheckCircle2, AlertCircle } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <section id="presentation" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-wider text-purple-400 font-semibold mb-2 block">
            Le constat
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-snug font-display">
            Tu veux profiter de l'IA, mais tu ne sais pas par où commencer ?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed">
            L'IA évolue rapidement. Mais entre la profusion d'outils, la complexité des prompts, la création de contenu et les différentes plateformes, il est très facile de se perdre et de procrastiner.
          </p>
        </div>

        {/* Transition visuelle : De la confusion à la clarté */}
        <div className="relative rounded-2xl bg-[#0e1017] border border-neutral-800 p-6 sm:p-10 shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

          <p className="text-sm sm:text-base font-medium text-neutral-200 text-center mb-8">
            Cette formation te donne une méthode simple et éprouvée pour franchir le fossé :
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            
            {/* Box 1: La situation actuelle */}
            <div className="p-5 sm:p-6 rounded-xl bg-red-950/20 border border-red-500/20 relative group">
              <div className="flex items-center gap-2 mb-3 text-red-400 font-semibold text-xs uppercase tracking-wider">
                <AlertCircle className="w-4 h-4" />
                <span>Situation actuelle</span>
              </div>
              <p className="text-lg sm:text-xl font-bold text-neutral-200 italic mb-2">
                « Je ne sais pas comment utiliser l'IA concrètement... »
              </p>
              <ul className="text-xs sm:text-sm text-neutral-400 space-y-2 mt-4">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">•</span>
                  <span>Perdu face à des tutoriels longs et théoriques</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">•</span>
                  <span>Résultats décevants avec des prompts hasardeux</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">•</span>
                  <span>Aucun revenu généré malgré l'engouement mondial</span>
                </li>
              </ul>
            </div>

            {/* Box 2: La situation après la formation */}
            <div className="p-5 sm:p-6 rounded-xl bg-emerald-950/20 border border-emerald-500/30 relative shadow-lg shadow-emerald-950/20">
              <div className="flex items-center gap-2 mb-3 text-emerald-400 font-semibold text-xs uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" />
                <span>Après la formation</span>
              </div>
              <p className="text-lg sm:text-xl font-bold text-white mb-2">
                « Je sais exactement quoi créer, comment le créer et comment le vendre. »
              </p>
              <ul className="text-xs sm:text-sm text-neutral-300 space-y-2 mt-4">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Maîtrise des outils gratuits directement sur smartphone</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Création de produits numériques prêts à être vendus</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Encaissement direct via Mobile Money & plateformes locales</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="mt-8 pt-6 border-t border-neutral-800/80 text-center">
            <p className="text-xs sm:text-sm text-neutral-400 font-medium">
              Une transition directe, pas à pas, sans jargon et sans perdre de temps.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
