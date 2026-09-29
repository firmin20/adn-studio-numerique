import React from 'react';
import { PRODUCT } from '../config/product';
import { MessageCircle, Phone, Mail, ExternalLink } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const whatsappUrl = `https://wa.me/${PRODUCT.whatsapp}?text=${encodeURIComponent(
    PRODUCT.whatsappPrefilledMessage
  )}`;

  const whatsappSecondaryUrl = `https://wa.me/${PRODUCT.whatsappSecondary}?text=${encodeURIComponent(
    PRODUCT.whatsappPrefilledMessage
  )}`;

  return (
    <section className="py-16 sm:py-24 bg-[#090a0f] relative border-t border-neutral-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-semibold mb-3">
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>Support & Assistance Directe</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-snug font-display">
            Une question avant de commencer ?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-300">
            Notre équipe est disponible sur WhatsApp pour te guider, répondre à tes interrogations ou t'aider lors de ta commande.
          </p>
        </div>

        {/* Big WhatsApp CTA Button */}
        <div className="mb-10">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-base sm:text-lg font-bold shadow-lg shadow-emerald-950/50 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>💬 Nous contacter sur WhatsApp</span>
          </a>
          <p className="text-xs text-neutral-400 mt-2">
            Réponse rapide • Échange direct avec notre équipe
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left max-w-2xl mx-auto">
          
          {/* Numéro Principal */}
          <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800">
            <div className="flex items-center gap-2 text-violet-400 text-xs font-bold uppercase tracking-wider mb-1">
              <Phone className="w-3.5 h-3.5" />
              <span>WhatsApp Principal</span>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-white hover:text-purple-300 transition-colors block font-mono"
            >
              {PRODUCT.whatsappFormatted}
            </a>
          </div>

          {/* Numéro Secondaire */}
          <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800">
            <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider mb-1">
              <Phone className="w-3.5 h-3.5" />
              <span>Deuxième Numéro</span>
            </div>
            <a
              href={whatsappSecondaryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-white hover:text-blue-300 transition-colors block font-mono"
            >
              {PRODUCT.whatsappSecondaryFormatted}
            </a>
          </div>

          {/* Email */}
          <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">
              <Mail className="w-3.5 h-3.5" />
              <span>Courriel</span>
            </div>
            <a
              href={`mailto:${PRODUCT.email}`}
              className="text-xs sm:text-sm font-semibold text-white hover:text-emerald-300 transition-colors block truncate"
            >
              {PRODUCT.email}
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
