import React from 'react';
import { MousePointerClick, CreditCard, DownloadCloud, Clock } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "01",
      icon: MousePointerClick,
      title: "Clique sur « Obtenir ma formation »",
      desc: "Accède instantanément à la passerelle de commande sécurisée depuis ton smartphone ou ordinateur.",
      accent: "text-violet-400"
    },
    {
      number: "02",
      icon: CreditCard,
      title: "Effectue ton paiement",
      desc: "Règle facilement avec MTN Mobile Money, Orange Money, carte bancaire ou portefeuille compatible.",
      accent: "text-blue-400"
    },
    {
      number: "03",
      icon: DownloadCloud,
      title: "Reçois immédiatement ta formation",
      desc: "Livraison numérique instantanée : télécharge tous les modules et bonus tout de suite.",
      extra: "Même à 2h du matin.",
      accent: "text-emerald-400"
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#0a0b12] relative border-t border-neutral-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-wider text-purple-400 font-semibold mb-2 block">
            Processus simple
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-snug font-display">
            Comment ça marche ?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-300">
            Un processus 100% automatisé, fluide et sécurisé en 3 étapes rapides.
          </p>
        </div>

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="p-6 sm:p-7 rounded-2xl bg-[#0e1017] border border-neutral-800 hover:border-neutral-700 transition-all flex flex-col justify-between relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-2xl sm:text-3xl font-extrabold text-neutral-600 group-hover:text-purple-400 transition-colors tabular-nums">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center">
                      <Icon className={`w-5 h-5 ${step.accent}`} />
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 font-display">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {step.extra && (
                  <div className="mt-5 pt-3 border-t border-neutral-800/80 flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                    <Clock className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{step.extra}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
