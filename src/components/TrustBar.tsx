import React from 'react';
import { Users, Hammer, Globe2, Smartphone } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const trustPoints = [
    {
      icon: Users,
      title: "Pensée pour les débutants",
      desc: "Zéro prérequis technique, langage clair et direct",
      accent: "text-violet-400"
    },
    {
      icon: Hammer,
      title: "100% pratique",
      desc: "Des actions concrètes pas à pas, sans théorie superflue",
      accent: "text-blue-400"
    },
    {
      icon: Globe2,
      title: "Adaptée au contexte africain",
      desc: "Plateformes locales, Mobile Money et réalités du marché",
      accent: "text-emerald-400"
    },
    {
      icon: Smartphone,
      title: "Accessible sur smartphone",
      desc: "Crée et gère toute ton activité directement depuis ton téléphone",
      accent: "text-amber-400"
    }
  ];

  return (
    <section className="py-6 sm:py-8 border-y border-neutral-800/80 bg-[#0c0d14]/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {trustPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-3.5 sm:p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/70 hover:border-neutral-700/80 transition-all flex flex-col justify-start group"
              >
                <div className="w-8 h-8 rounded-lg bg-neutral-800/80 flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform">
                  <Icon className={`w-4 h-4 ${item.accent}`} />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-white mb-1 leading-snug">
                  {item.title}
                </h4>
                <p className="text-[11px] sm:text-xs text-neutral-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
