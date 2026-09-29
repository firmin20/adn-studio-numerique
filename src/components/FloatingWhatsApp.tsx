import React, { useState } from 'react';
import { PRODUCT } from '../config/product';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/${PRODUCT.whatsapp}?text=${encodeURIComponent(
    PRODUCT.whatsappPrefilledMessage
  )}`;

  return (
    <div className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-50 flex items-end gap-2.5">
      {/* Live notification message card (Desktop & Tablet) */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2.5 p-3 pr-3.5 rounded-2xl bg-[#0f111a]/95 backdrop-blur-md border border-emerald-500/30 shadow-xl shadow-black/40 animate-fadeIn text-left">
          <div className="flex-1 max-w-[200px]">
            <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Formateur en direct</span>
            </div>
            <p className="text-xs text-neutral-200 font-medium leading-tight mt-0.5">
              Une question sur la formation ? Écris-moi sur WhatsApp !
            </p>
          </div>

          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="p-1 rounded-md text-neutral-400 hover:text-white hover:bg-neutral-800/80 transition-colors cursor-pointer"
            aria-label="Fermer le message d'aide"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center gap-2 px-4 py-3.5 sm:px-4 sm:py-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-bold text-sm shadow-xl shadow-emerald-950/50 hover:shadow-emerald-600/40 hover:scale-105 active:scale-95 transition-all cursor-pointer whitespace-nowrap"
        aria-label="Contact WhatsApp direct avec le formateur"
      >
        {/* Glowing aura ping */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-300 border-2 border-[#090a0f]"></span>
        </span>

        {/* WhatsApp Icon */}
        <MessageCircle className="w-5 h-5 fill-white text-emerald-600 group-hover:rotate-12 transition-transform" />

        {/* Text label */}
        <span className="font-semibold text-xs sm:text-sm tracking-wide">
          Contact WhatsApp
        </span>
      </a>
    </div>
  );
};
