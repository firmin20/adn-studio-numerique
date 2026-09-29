import React from 'react';
import { Shield, CheckCircle, RefreshCcw } from 'lucide-react';

export const GuaranteeSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#0a0b12] relative overflow-hidden border-t border-neutral-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="rounded-3xl bg-gradient-to-r from-neutral-900/90 via-[#101322] to-neutral-900/90 border border-violet-500/30 p-6 sm:p-10 flex flex-col md:flex-row items-center gap-8 shadow-xl shadow-purple-950/20">
          
          {/* Visual Badge 7 Jours Garantie */}
          <div className="flex-shrink-0">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-br from-violet-600 via-indigo-600 to-cyan-500 p-[2px] shadow-lg shadow-violet-600/30">
              <div className="w-full h-full bg-[#0c0e17] rounded-[14px] flex flex-col items-center justify-center text-center p-3">
                <Shield className="w-6 h-6 text-violet-400 mb-1" />
                <span className="text-xl sm:text-2xl font-black text-white leading-none font-display tracking-tight">
                  7 JOURS
                </span>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-wider font-extrabold text-cyan-400 mt-1">
                  GARANTIE
                </span>
                <span className="text-[9px] text-neutral-400 mt-0.5">100% Serein</span>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="text-center md:text-left flex-1">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-3 font-display">
              🛡️ Garantie 7 jours — Satisfait ou remboursé
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-4">
              Teste la formation pendant 7 jours entiers. Découvre les modules, applique les prompts, génère tes premiers contenus. Si elle ne te convient pas, tu peux demander un remboursement selon les conditions de la garantie.
            </p>
            
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-neutral-400">
              <span className="flex items-center gap-1.5 text-neutral-300">
                <CheckCircle className="w-4 h-4 text-emerald-400" /> Zéro risque pour toi
              </span>
              <span className="flex items-center gap-1.5 text-neutral-300">
                <RefreshCcw className="w-4 h-4 text-violet-400" /> Demande simple par email ou WhatsApp
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
