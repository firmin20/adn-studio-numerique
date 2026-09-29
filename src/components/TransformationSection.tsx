import React from 'react';
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';

export const TransformationSection: React.FC = () => {
  const beforePoints = [
    "Je ne sais pas utiliser l'IA concrètement",
    "Je ne sais pas quoi créer de valeur",
    "Je ne sais pas quoi vendre en ligne",
    "Je ne sais pas comment trouver des clients",
    "Je ne sais pas comment commencer et j'hésite",
  ];

  const afterPoints = [
    "Je comprends et maîtrise les principaux outils IA",
    "Je sais créer du contenu professionnel en quelques minutes",
    "Je sais concevoir et formater des produits numériques",
    "Je connais les plateformes de vente adaptées à l'Afrique",
    "J'ai un plan d'action clair et quotidien sur 30 jours",
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#090a0f] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-wider text-purple-400 font-semibold mb-2 block">
            La métamorphose
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-snug font-display">
            Avant / Après
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-300">
            Ce que cette formation va changer dans ta posture et tes compétences pratiques.
          </p>
        </div>

        {/* 2 Columns: Before vs After */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          
          {/* Column 1: AVANT */}
          <div className="p-6 sm:p-8 rounded-2xl bg-neutral-900/40 border border-red-500/20 flex flex-col justify-between relative">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-neutral-800/80">
                <span className="text-sm font-extrabold uppercase tracking-wider text-red-400">
                  ❌ AVANT LA FORMATION
                </span>
                <span className="text-xs text-neutral-500 font-medium">Confusion</span>
              </div>

              <div className="space-y-4">
                {beforePoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400/80 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-neutral-300 line-through decoration-red-500/40">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-neutral-800/60 text-xs text-neutral-400 italic">
              Résultat : Tu restes spectateur pendant que d'autres génèrent des revenus.
            </div>
          </div>

          {/* Column 2: APRÈS */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#111827] to-[#0e1017] border border-emerald-500/30 flex flex-col justify-between relative shadow-xl shadow-emerald-950/20">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-emerald-500/20">
                <span className="text-sm font-extrabold uppercase tracking-wider text-emerald-400">
                  ✅ APRÈS LA FORMATION
                </span>
                <span className="text-xs text-emerald-400 font-semibold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                  Clarté & Action
                </span>
              </div>

              <div className="space-y-4">
                {afterPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-white">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-neutral-800/60 text-xs text-emerald-300 font-medium">
              Résultat : Tu as une compétence recherchée et un actif numérique prêt à générer des ventes.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
