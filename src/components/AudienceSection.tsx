import React from 'react';
import { Check, Smartphone, Sparkles, DollarSign, Cpu, Globe } from 'lucide-react';
import creatorImage from '../assets/images/african_creator_smartphone_1790675188666.jpg';

export const AudienceSection: React.FC = () => {
  const criteria = [
    {
      icon: DollarSign,
      number: "01",
      title: "Tu veux gagner de l'argent en ligne",
      desc: "Mais tu te sens bloqué car tu ne sais pas par où commencer concrètement.",
      accent: "text-emerald-400"
    },
    {
      icon: Cpu,
      number: "02",
      title: "Tu n'as aucune compétence technique",
      desc: "Pas de code, pas de design avancé. Tu pars de zéro absolu et c'est parfaitement normal.",
      accent: "text-violet-400"
    },
    {
      icon: Sparkles,
      number: "03",
      title: "Tu veux créer des choses concrètes",
      desc: "Des visuels, des ebooks, des fiches pratiques, des présentations exploitables immédiatement.",
      accent: "text-blue-400"
    },
    {
      icon: Smartphone,
      number: "04",
      title: "Tu travailles depuis ton smartphone",
      desc: "Pas besoin de PC portable onéreux. Ton smartphone avec connexion Internet suffit amplement.",
      accent: "text-amber-400"
    },
    {
      icon: Globe,
      number: "05",
      title: "Tu cherches une méthode adaptée à l'Afrique",
      desc: "Des plateformes réelles, des clients locaux ou internationaux et un encaissement par Mobile Money.",
      accent: "text-cyan-400"
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#090a0f] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-wider text-purple-400 font-semibold mb-2 block">
            Public cible
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-snug font-display">
            🎯 Cette formation est faite pour toi si :
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400">
            Identifie-toi dans ces situations pour savoir si ce programme correspond exactement à tes attentes.
          </p>
        </div>

        {/* 5 Cards Layout with contextual African creator visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Creator visual card */}
          <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-neutral-800 bg-[#0e1017] flex flex-col">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-950">
              <img
                src={creatorImage}
                alt="Créateur de contenu digital africain sur smartphone"
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e1017] via-transparent to-transparent" />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-violet-400">
                  Accessibilité & Réalisme
                </span>
                <h3 className="text-lg font-bold text-white mt-1 mb-2 font-display">
                  La puissance de l'IA au bout des doigts
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  L'intelligence artificielle n'est plus réservée aux ingénieurs de la Silicon Valley. Aujourd'hui, un créateur avec un smartphone au Cameroun ou en Afrique francophone peut créer des actifs de valeur mondiale.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-800/80">
                <p className="text-xs sm:text-sm font-semibold text-purple-300">
                  Pas besoin d'être développeur. Pas besoin d'être expert en IA.
                </p>
              </div>
            </div>
          </div>

          {/* Criteria Cards Grid */}
          <div className="lg:col-span-7 flex flex-col gap-3.5 justify-center">
            {criteria.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.number}
                  className="p-4 sm:p-5 rounded-xl bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700/80 transition-all flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-neutral-800/90 flex-shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Icon className={`w-5 h-5 ${item.accent}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                        {item.title}
                      </h4>
                      <span className="text-[11px] font-mono text-neutral-500 font-semibold tabular-nums">
                        {item.number}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-400 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
