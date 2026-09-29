import React, { useState } from 'react';
import { PRODUCT } from '../config/product';
import { ExternalLink, ShieldCheck, Heart } from 'lucide-react';
import { AdnStudioLogo } from './AdnStudioLogo';

export const Footer: React.FC = () => {
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  return (
    <footer className="bg-[#07070a] border-t border-neutral-900 pt-16 pb-28 sm:pb-16 text-neutral-400 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-900">
          
          {/* Brand Info & Official Animated Logo Signature */}
          <div className="md:col-span-6 space-y-4">
            <AdnStudioLogo variant="compact" showSlogan={true} className="mb-2" />

            <p className="text-sm font-semibold text-sky-400">
              CRÉER • PRODUIRE • RÉUSSIR
            </p>

            <p className="text-xs text-neutral-400 max-w-md leading-relaxed">
              Studio créatif et digital spécialisé en intelligence artificielle, design visuel, production vidéo et solutions numériques. Nous formons les créateurs et entrepreneurs africains à monétiser leurs compétences digitales.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={PRODUCT.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-700 transition-colors inline-flex items-center gap-1.5"
              >
                <span>Facebook</span>
                <ExternalLink className="w-3 h-3 text-neutral-500" />
              </a>

              <a
                href={PRODUCT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-700 transition-colors inline-flex items-center gap-1.5"
              >
                <span>Instagram</span>
                <ExternalLink className="w-3 h-3 text-neutral-500" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#presentation" className="hover:text-white transition-colors">
                  Formation
                </a>
              </li>
              <li>
                <a href="#programme" className="hover:text-white transition-colors">
                  Programme
                </a>
              </li>
              <li>
                <a href="#temoignages" className="hover:text-white transition-colors">
                  Témoignages
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${PRODUCT.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <button
                  onClick={() => setPrivacyModalOpen(true)}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Politique de confidentialité
                </button>
              </li>
            </ul>
          </div>

          {/* Contact coordinates */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Coordonnées
            </h4>
            <p className="text-neutral-300">
              WhatsApp : <span className="font-mono text-white">{PRODUCT.whatsappFormatted}</span>
            </p>
            <p className="text-neutral-300">
              Ligne 2 : <span className="font-mono text-white">{PRODUCT.whatsappSecondaryFormatted}</span>
            </p>
            <p className="text-neutral-300 truncate">
              Email : <span className="text-white">{PRODUCT.email}</span>
            </p>
            <div className="pt-2">
              <span className="inline-block px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-[11px] text-neutral-400">
                Douala / Yaoundé, Cameroun 🇨🇲
              </span>
            </div>
          </div>

        </div>

        {/* Official 5 Studio Expertise Pillars from ADN Studio Numérique */}
        <div className="py-8 my-2 border-b border-neutral-900">
          <p className="text-center text-[10px] uppercase font-bold tracking-[0.2em] text-neutral-400 mb-4">
            Expertises & Savoir-faire ADN Studio Numérique
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 max-w-4xl mx-auto text-center">
            <div className="p-3 rounded-xl bg-[#0c0d14] border border-neutral-800/80 hover:border-neutral-700 transition-colors">
              <span className="text-xl block mb-1">✒️</span>
              <span className="text-xs font-bold text-white block">Graphisme</span>
              <span className="text-[10px] text-neutral-400">Identités & Visuels</span>
            </div>
            <div className="p-3 rounded-xl bg-[#0c0d14] border border-neutral-800/80 hover:border-neutral-700 transition-colors">
              <span className="text-xl block mb-1">📷</span>
              <span className="text-xs font-bold text-white block">Photo & Vidéo</span>
              <span className="text-[10px] text-neutral-400">Tournage & Image</span>
            </div>
            <div className="p-3 rounded-xl bg-[#0c0d14] border border-neutral-800/80 hover:border-neutral-700 transition-colors">
              <span className="text-xl block mb-1">🎬</span>
              <span className="text-xs font-bold text-white block">Montage & Contenu</span>
              <span className="text-[10px] text-neutral-400">Reels & Formats Courts</span>
            </div>
            <div className="p-3 rounded-xl bg-[#0c0d14] border border-neutral-800/80 hover:border-neutral-700 transition-colors">
              <span className="text-xl block mb-1">📢</span>
              <span className="text-xs font-bold text-white block">Publicité & Com</span>
              <span className="text-[10px] text-neutral-400">Stratégie & Trafic</span>
            </div>
            <div className="col-span-2 sm:col-span-1 p-3 rounded-xl bg-[#0c0d14] border border-sky-500/30 hover:border-sky-500/60 transition-colors">
              <span className="text-xl block mb-1 font-mono font-bold text-sky-400">&lt;/&gt;</span>
              <span className="text-xs font-bold text-sky-400 block">Solutions Digitales</span>
              <span className="text-[10px] text-neutral-400">IA & Formations Web</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-500 text-[11px]">
          <p>© 2026 ADN Studio Numérique. Tous droits réservés.</p>
          <p className="flex items-center gap-1">
            Conçu pour l'économie créatrice africaine francophone
          </p>
        </div>

      </div>

      {/* Privacy Policy Modal */}
      {privacyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#0f111a] border border-neutral-800 rounded-2xl max-w-lg w-full p-6 max-h-[85vh] overflow-y-auto">
            <h3 className="text-lg font-bold text-white mb-4 font-display">
              Politique de Confidentialité — ADN Studio Numérique
            </h3>
            <div className="text-xs text-neutral-300 space-y-3 leading-relaxed">
              <p>
                <strong>1. Protection des données :</strong> ADN Studio Numérique respecte la confidentialité de vos informations personnelles. Vos nom, numéro WhatsApp et adresse email collectés lors du paiement ne sont utilisés que pour la transmission des liens d'accès et le suivi pédagogique.
              </p>
              <p>
                <strong>2. Aucune revente de données :</strong> Vos coordonnées ne seront jamais cédées, vendues ou partagées avec des tiers à des fins publicitaires.
              </p>
              <p>
                <strong>3. Sécurité des paiements :</strong> Toutes les transactions financières sont traitées de manière chiffrée par des passerelles de paiement partenaires agréées (Maketou, services Mobile Money agrégés).
              </p>
              <p>
                <strong>4. Vos droits :</strong> Vous pouvez à tout moment solliciter la suppression ou la modification de vos données de contact par simple message à firmintela7@gmail.com.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-800 text-right">
              <button
                onClick={() => setPrivacyModalOpen(false)}
                className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg text-xs font-semibold cursor-pointer"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
