/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PRODUCT } from './config/product';
import { useCountdown } from './hooks/useCountdown';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { ProblemSection } from './components/ProblemSection';
import { AudienceSection } from './components/AudienceSection';
import { ProgramSection } from './components/ProgramSection';
import { BonusSection } from './components/BonusSection';
import { ValueSection } from './components/ValueSection';
import { TransformationSection } from './components/TransformationSection';
import { HowItWorks } from './components/HowItWorks';
import { PaymentSection } from './components/PaymentSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { OfferSection } from './components/OfferSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { StickyMobileCTA } from './components/StickyMobileCTA';
import { CheckoutModal } from './components/CheckoutModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

import { AnimatedSection } from './components/AnimatedSection';

export default function App() {
  const countdown = useCountdown(PRODUCT.offerEndDate);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);

  // Mise à jour dynamique des balises Open Graph et meta avec le prix de lancement
  useEffect(() => {
    const currentPriceFormatted = (
      countdown.isExpired ? PRODUCT.regularPrice : PRODUCT.launchPrice
    ).toLocaleString('fr-FR');

    const dynamicTitle = `Formation IA Complète à ${currentPriceFormatted} FCFA | ADN Studio Numérique`;
    const dynamicOgTitle = `Formation IA Complète à ${currentPriceFormatted} FCFA | Crée avec l'IA et Monétise 🤖💰`;
    const dynamicDescription = `Apprends à créer avec l'IA et transforme tes compétences en revenus depuis ton smartphone. Offre spéciale à seulement ${currentPriceFormatted} FCFA.`;

    document.title = dynamicTitle;

    const setMetaTag = (propertyOrName: string, content: string, isProperty = true) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${propertyOrName}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, propertyOrName);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    setMetaTag('og:title', dynamicOgTitle, true);
    setMetaTag('twitter:title', dynamicOgTitle, false);
    setMetaTag('og:description', dynamicDescription, true);
    setMetaTag('twitter:description', dynamicDescription, false);
    setMetaTag('description', dynamicDescription, false);
    setMetaTag('product:price:amount', String(countdown.isExpired ? PRODUCT.regularPrice : PRODUCT.launchPrice), true);
    setMetaTag('product:price:currency', 'XAF', true);
  }, [countdown.isExpired]);

  // --------------------------------------------------------------------------
  // Stratégie de pré-chargement accélérée pour le checkout Maketou
  // (dns-prefetch, preconnect, document prefetch & hover-prewarm)
  // --------------------------------------------------------------------------
  useEffect(() => {
    if (!PRODUCT.checkoutUrl) return;

    let checkoutOrigin = '';
    try {
      const urlObj = new URL(PRODUCT.checkoutUrl);
      checkoutOrigin = urlObj.origin;
    } catch {
      return;
    }

    const createdElements: HTMLElement[] = [];

    const addLinkTag = (rel: string, href: string, extraAttrs?: Record<string, string>) => {
      const selector = `link[rel="${rel}"][href="${href}"]`;
      if (!document.querySelector(selector)) {
        const link = document.createElement('link');
        link.rel = rel;
        link.href = href;
        if (extraAttrs) {
          Object.entries(extraAttrs).forEach(([k, v]) => link.setAttribute(k, v));
        }
        document.head.appendChild(link);
        createdElements.push(link);
      }
    };

    // 1. Résolution DNS immédiate de l'hôte Maketou
    addLinkTag('dns-prefetch', checkoutOrigin);

    // 2. Pré-connexion TCP & TLS anticipée
    addLinkTag('preconnect', checkoutOrigin, { crossorigin: 'anonymous' });

    // 3. Pré-chargement de la ressource HTML en tâche de fond (idle time)
    addLinkTag('prefetch', PRODUCT.checkoutUrl, { as: 'document' });

    // 4. Préchauffage prédictif au premier mouvement ou toucher de l'utilisateur
    const prewarmConnection = () => {
      // Déclenche prerender et fetch silencieux pour amorcer le cache
      addLinkTag('prerender', PRODUCT.checkoutUrl);

      if ('fetch' in window) {
        try {
          fetch(PRODUCT.checkoutUrl, {
            mode: 'no-cors',
            credentials: 'omit',
            cache: 'force-cache',
          }).catch(() => {
            // Ignorer silencieusement d'éventuelles restrictions CORS
          });
        } catch {
          // Ignorer
        }
      }

      window.removeEventListener('pointerdown', prewarmConnection);
      window.removeEventListener('scroll', prewarmConnection);
    };

    window.addEventListener('pointerdown', prewarmConnection, { once: true, passive: true });
    window.addEventListener('scroll', prewarmConnection, { once: true, passive: true });

    return () => {
      window.removeEventListener('pointerdown', prewarmConnection);
      window.removeEventListener('scroll', prewarmConnection);
      createdElements.forEach((el) => el.parentNode?.removeChild(el));
    };
  }, []);

  // Tous les CTA d'achat de la landing page utilisent cette fonction unifiée vers le checkout Maketou
  const handleOpenCheckout = () => {
    if (PRODUCT.checkoutUrl) {
      const newWindow = window.open(PRODUCT.checkoutUrl, '_blank', 'noopener,noreferrer');
      // Fallback direct si le navigateur mobile bloque la nouvelle fenêtre
      if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
        window.location.href = PRODUCT.checkoutUrl;
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#090a0f] text-neutral-100 flex flex-col font-sans selection:bg-purple-600 selection:text-white antialiased overflow-x-hidden">
      {/* 1. Header Sticky */}
      <Header
        onOpenCheckout={handleOpenCheckout}
        isOfferExpired={countdown.isExpired}
      />

      {/* Main Sales Funnel Flow with Framer Motion scroll animations */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          onOpenCheckout={handleOpenCheckout}
          isOfferExpired={countdown.isExpired}
        />

        {/* 3. Barre de Confiance */}
        <AnimatedSection delay={0.05}>
          <TrustBar />
        </AnimatedSection>

        {/* 4. Section Problème */}
        <AnimatedSection delay={0.05}>
          <ProblemSection />
        </AnimatedSection>

        {/* 5. Section "Cette formation est pour toi si" */}
        <AnimatedSection delay={0.05}>
          <AudienceSection />
        </AnimatedSection>

        {/* 6. Section Programme (5 modules détaillés) */}
        <AnimatedSection delay={0.05}>
          <ProgramSection />
        </AnimatedSection>

        {/* 7. Section "Ce que tu reçois" (Bonus) */}
        <AnimatedSection delay={0.05}>
          <BonusSection />
        </AnimatedSection>

        {/* 8. Section Valeur (20 000 FCFA vs 4 999 FCFA) */}
        <AnimatedSection delay={0.05}>
          <ValueSection
            onOpenCheckout={handleOpenCheckout}
            isOfferExpired={countdown.isExpired}
          />
        </AnimatedSection>

        {/* 9. Section Transformation (Avant / Après) */}
        <AnimatedSection delay={0.05}>
          <TransformationSection />
        </AnimatedSection>

        {/* 10. Processus (Comment ça marche ?) */}
        <AnimatedSection delay={0.05}>
          <HowItWorks />
        </AnimatedSection>

        {/* 11. Section Moyens de Paiement (MoMo, OM, etc.) */}
        <AnimatedSection delay={0.05}>
          <PaymentSection />
        </AnimatedSection>

        {/* 12. Garantie 7 Jours Satisfait ou Remboursé */}
        <AnimatedSection delay={0.05}>
          <GuaranteeSection />
        </AnimatedSection>

        {/* 13. Urgence & Offre de Lancement (Compteur Live & Places) */}
        <AnimatedSection delay={0.05}>
          <OfferSection
            onOpenCheckout={handleOpenCheckout}
            countdown={countdown}
          />
        </AnimatedSection>

        {/* 14. Preuve Sociale & Témoignages (Vidéos courtes & Écrits) */}
        <AnimatedSection delay={0.05}>
          <TestimonialsSection onOpenCheckout={handleOpenCheckout} />
        </AnimatedSection>

        {/* 15. FAQ Accordéon */}
        <AnimatedSection delay={0.05}>
          <FAQSection />
        </AnimatedSection>

        {/* 16. Section Contact & WhatsApp Direct */}
        <AnimatedSection delay={0.05}>
          <ContactSection />
        </AnimatedSection>

        {/* 17. Grand CTA Final */}
        <AnimatedSection delay={0.05}>
          <FinalCTA
            onOpenCheckout={handleOpenCheckout}
            isOfferExpired={countdown.isExpired}
          />
        </AnimatedSection>
      </main>

      {/* 18. Footer */}
      <Footer />

      {/* 19. CTA Sticky Mobile */}
      <StickyMobileCTA
        onOpenCheckout={handleOpenCheckout}
        isOfferExpired={countdown.isExpired}
      />

      {/* 20. Modale de Checkout / Réservation WhatsApp */}
      <CheckoutModal
        isOpen={isCheckoutModalOpen}
        onClose={() => setIsCheckoutModalOpen(false)}
        isOfferExpired={countdown.isExpired}
      />

      {/* 21. Bouton Flottant WhatsApp Direct Formateur */}
      <FloatingWhatsApp />
    </div>
  );
}
