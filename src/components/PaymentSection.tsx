import React from 'react';
import { ShieldCheck, Lock, Smartphone, CreditCard, Coins, Check } from 'lucide-react';

export const PaymentSection: React.FC = () => {
  const paymentMethods = [
    {
      name: "MTN Mobile Money",
      desc: "Paiement direct par MoMo (Cameroun & Afrique)",
      badge: "Recommandé",
      iconColor: "text-amber-400 bg-amber-400/10 border-amber-400/30",
    },
    {
      name: "Orange Money",
      desc: "Paiement sécurisé par OM en temps réel",
      badge: "Populaire",
      iconColor: "text-orange-400 bg-orange-400/10 border-orange-400/30",
    },
    {
      name: "Visa & Mastercard",
      desc: "Cartes bancaires internationales acceptées",
      badge: "International",
      iconColor: "text-blue-400 bg-blue-400/10 border-blue-400/30",
    },
    {
      name: "EU Mobile Money",
      desc: "Express Union & transferts régionaux",
      badge: "Régional",
      iconColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
    },
    {
      name: "Cryptomonnaies",
      desc: "USDT, Bitcoin & autres devises numériques",
      badge: "Web3",
      iconColor: "text-purple-400 bg-purple-400/10 border-purple-400/30",
    },
    {
      name: "Autres moyens compatibles",
      desc: "Portefeuilles électroniques & virements selon disponibilité",
      badge: "Flexibilité",
      iconColor: "text-cyan-400 bg-cyan-400/10 border-cyan-400/30",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#090a0f] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-semibold mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Paiement Fluide & Sans Friction</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-snug font-display">
            💳 Paie avec ton moyen préféré
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-300">
            Choisis l'option la plus pratique pour toi. Tous les règlements sont chiffrés et traités via une passerelle certifiée.
          </p>
        </div>

        {/* Payment Methods Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 sm:gap-4 mb-8">
          {paymentMethods.map((method, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-xl bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded border uppercase tracking-wider ${method.iconColor}`}>
                    {method.badge}
                  </span>
                  <Check className="w-3.5 h-3.5 text-neutral-500" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white mb-1">
                  {method.name}
                </h3>
                <p className="text-[11px] sm:text-xs text-neutral-400 leading-relaxed">
                  {method.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Security Notice */}
        <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/80 text-center flex flex-col sm:flex-row items-center justify-center gap-3 text-xs sm:text-sm text-neutral-400">
          <div className="flex items-center gap-2 text-emerald-400 font-semibold">
            <Lock className="w-4 h-4" />
            <span>🔒 Moyens de paiement sécurisés</span>
          </div>
          <span className="hidden sm:inline text-neutral-600">|</span>
          <span>Chiffrement SSL 256 bits • Déblocage numérique instantané</span>
        </div>

      </div>
    </section>
  );
};
