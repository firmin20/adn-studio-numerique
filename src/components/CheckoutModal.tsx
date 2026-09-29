import React from 'react';
import { PRODUCT, CHECKOUT_URL } from '../config/product';
import { X, MessageCircle, ShieldCheck, CheckCircle2, Lock, ArrowRight } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  isOfferExpired: boolean;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  isOfferExpired,
}) => {
  if (!isOpen) return null;

  const currentPrice = isOfferExpired ? PRODUCT.regularPrice : PRODUCT.launchPrice;

  // Direct WhatsApp order link with custom order message
  const orderMessage = `Bonjour ADN Studio Numérique, je souhaite finaliser ma commande de la "${PRODUCT.name}" au tarif de ${currentPrice.toLocaleString('fr-FR')} FCFA. Pouvez-vous m'indiquer la marche à suivre pour payer par Mobile Money (MTN / Orange) ?`;
  const whatsappOrderUrl = `https://wa.me/${PRODUCT.whatsapp}?text=${encodeURIComponent(orderMessage)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#0e1017] border border-violet-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-purple-950/50">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-neutral-900 text-neutral-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-left mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-950/80 border border-violet-500/30 text-violet-300 text-xs font-semibold mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-violet-400" />
            <span>Finalisation de ta commande</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight font-display">
            Accès à la Formation IA Complète
          </h3>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-2xl font-black text-white font-display">
              {currentPrice.toLocaleString('fr-FR')} FCFA
            </span>
            {!isOfferExpired && (
              <span className="text-xs font-bold text-emerald-400 bg-emerald-950/70 border border-emerald-500/30 px-2 py-0.5 rounded">
                -50% Offre de lancement
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4 mb-6 text-xs sm:text-sm text-neutral-300">
          <p className="leading-relaxed">
            Tu es sur le point d'accéder aux <strong>5 modules complets</strong>, aux <strong>prompts prêts à l'emploi</strong> et au <strong>plan d'action sur 30 jours</strong>.
          </p>

          <div className="p-3.5 rounded-xl bg-neutral-900/80 border border-neutral-800 space-y-2">
            <div className="flex items-center gap-2 text-xs text-neutral-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Livraison numérique instantanée après validation</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Paiement par MTN MoMo, Orange Money & Cartes</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Garantie Satisfait ou Remboursé 7 jours</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          {/* Action Button: Direct Checkout Maketou */}
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 hover:from-violet-500 hover:via-indigo-500 hover:to-blue-500 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-lg shadow-violet-950/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
          >
            <span>Accéder directement au Checkout Maketou</span>
            <ArrowRight className="w-5 h-5" />
          </a>

          {/* Alternative WhatsApp Assistance */}
          <a
            href={whatsappOrderUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="w-full py-3 px-5 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Assistance commande sur WhatsApp (+237 696 019 303)</span>
          </a>
        </div>

        {/* Footer info */}
        <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center justify-center gap-2 text-[11px] text-neutral-400">
          <Lock className="w-3 h-3 text-emerald-400" />
          <span>Paiement sécurisé • ADN Studio Numérique</span>
        </div>

      </div>
    </div>
  );
};
