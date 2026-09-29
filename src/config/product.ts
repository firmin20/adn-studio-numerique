/**
 * Configuration principale du produit - ADN Studio Numérique
 * 
 * URL réelle du checkout Maketou pour l'achat de la formation :
 */

// ============================================================================
// CONFIGURATION DU CHECKOUT MAKETOU & DE L'OFFRE
// ============================================================================

export const CHECKOUT_URL = "https://adn-studio-numerique.mymaketou.shop/products/formation-ia-complete-creer-avec-lia-et-monetiser-pour-debutants/checkout";

// Date de fin de l'offre de lancement (Format ISO ou date future).
// Fixée ici à 3 jours à partir de la première visite ou date déterminée.
export const OFFER_END_DATE = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString();

export const REMAINING_SLOTS = 23;
export const TOTAL_SLOTS = 50;

export const PRODUCT = {
  name: "Formation IA Complète : Créer avec l’IA et Monétiser 🤖💰 — Pour Débutants",
  shortName: "Formation IA Complète",
  regularPrice: 10000,
  launchPrice: 4999,
  currency: "FCFA",
  remainingSlots: REMAINING_SLOTS,
  totalSlots: TOTAL_SLOTS,
  checkoutUrl: CHECKOUT_URL,
  offerEndDate: OFFER_END_DATE,
  
  // Contacts officiels ADN Studio Numérique
  whatsapp: "237696019303",
  whatsappFormatted: "+237 696 019 303",
  whatsappSecondary: "237670566705",
  whatsappSecondaryFormatted: "+237 670 566 705",
  email: "firmintela7@gmail.com",
  
  // Réseaux sociaux
  facebookUrl: "https://www.facebook.com/share/1CWhKoQUSi/",
  instagramUrl: "https://www.instagram.com/adnnumerique/",

  // Message prérempli WhatsApp
  whatsappPrefilledMessage: "Bonjour ADN Studio Numérique, j'aimerais avoir plus d'informations sur la Formation IA Complète.",
};

// Programme détaillé des 5 modules
export interface CourseModule {
  id: number;
  number: string;
  title: string;
  badge: string;
  badgeColor: string;
  description: string;
  lessons: string[];
  tools?: string[];
  keyTakeaway: string;
}

export const COURSE_MODULES: CourseModule[] = [
  {
    id: 1,
    number: "MODULE 1",
    title: "Comprendre l'IA sans être expert",
    badge: "NIVEAU : DÉBUTANT",
    badgeColor: "emerald",
    description: "Démystifier l'intelligence artificielle pour la rendre immédiatement accessible et productive depuis ton téléphone.",
    lessons: [
      "C'est quoi l'IA en termes simples (sans jargon technique)",
      "Les 7 meilleurs outils gratuits indispensables",
      "Prise en main guidée : ChatGPT, NotebookLM, Canva IA, Gamma",
      "Comment formuler des prompts efficaces pour obtenir exactement ce que tu veux",
      "La méthode pas à pas pour obtenir des résultats professionnels dès la première tentative"
    ],
    tools: ["ChatGPT", "NotebookLM", "Canva IA", "Gamma"],
    keyTakeaway: "Passe du statut de spectateur curieux à utilisateur confiant en moins de 48 heures."
  },
  {
    id: 2,
    number: "MODULE 2",
    title: "Créer du contenu avec l'IA",
    badge: "CRÉATION",
    badgeColor: "blue",
    description: "Apprends à générer des textes percutants, des visuels captivants et des présentations de calibre agence.",
    lessons: [
      "Rédiger des textes professionnels et engageants avec ChatGPT",
      "Créer des images, affiches et designs attractifs avec Canva IA",
      "Générer des podcasts et résumés audio percutants avec NotebookLM",
      "Créer des présentations et pitch decks professionnels en 2 minutes avec Gamma",
      "Produire des visuels professionnels pour réseaux sociaux sans graphiste"
    ],
    tools: ["Canva IA", "ChatGPT", "NotebookLM", "Gamma App"],
    keyTakeaway: "Crée en 30 minutes ce qui prenait autrefois des jours entiers de travail."
  },
  {
    id: 3,
    number: "MODULE 3",
    title: "Créer des produits numériques à vendre",
    badge: "MONÉTISATION",
    badgeColor: "amber",
    description: "La compétence la plus rentable : transformer tes idées en produits téléchargeables vendus en automatique.",
    lessons: [
      "Ebooks & Guides PDF à forte valeur : vendre entre 2 000 et 15 000 FCFA",
      "Fiches pratiques & guides de révision ciblés : vendre entre 1 000 et 5 000 FCFA",
      "Packs de templates professionnels : CV modernes, lettres formelles, modèles de contrat",
      "Plans d'affaires & business plans types prêts à l'emploi",
      "Mini-formations & tutoriels spécialisés : vendre entre 10 000 et 30 000 FCFA",
      "Méthode ADN : Transformer une simple idée ou passion en produit numérique prêt à être téléchargé"
    ],
    tools: ["PDF Design", "Templates", "Structure de vente", "Ebooks"],
    keyTakeaway: "Un produit numérique se crée une seule fois et peut être vendu des centaines de fois sans stock."
  },
  {
    id: 4,
    number: "MODULE 4",
    title: "Vendre sur les bonnes plateformes",
    badge: "COMMERCE DIGITAL",
    badgeColor: "purple",
    description: "Créer est une chose. Savoir vendre en est une autre. Découvre l'écosystème commercial qui fonctionne en Afrique.",
    lessons: [
      "Mise en place de ta boutique sur Chariow et Maketou",
      "Vendre directement via WhatsApp Business et tunnels de discussion",
      "Exploiter la portée organique de TikTok et Facebook pour attirer des clients ciblés",
      "Intégration et réception des paiements par MTN Mobile Money et Orange Money",
      "Gestion des clients et automatisation de la délivrance des fichiers après paiement"
    ],
    tools: ["Chariow", "Maketou", "WhatsApp", "MTN MoMo", "Orange Money"],
    keyTakeaway: "Reçois tes gains directement sur ton portefeuille Mobile Money local en toute sécurité."
  },
  {
    id: 5,
    number: "MODULE 5",
    title: "Passer à l'échelle & pérenniser",
    badge: "ACTION",
    badgeColor: "indigo",
    description: "Automatise tes routines, multiplie tes canaux et déploie un système durable sur le long terme.",
    lessons: [
      "Automatiser les tâches répétitives avec les flux d'intelligence artificielle",
      "Combiner plusieurs sources de revenus numériques complémentaires",
      "Feuille de route et plan d'action concret jour par jour sur 30 jours",
      "Les erreurs critiques des débutants qui font perdre du temps et de l'argent",
      "Organiser son activité digitale depuis son smartphone avec discipline"
    ],
    tools: ["Plan 30 Jours", "Automatisation", "Routine Digitale"],
    keyTakeaway: "Un plan d'action précis jour par jour pour ne jamais te demander quoi faire au réveil."
  }
];

// Grille de bonus inclus
export interface BonusItem {
  id: string;
  iconName: string;
  title: string;
  description: string;
  value: number;
}

export const BONUSES: BonusItem[] = [
  {
    id: "formation",
    iconName: "GraduationCap",
    title: "Formation complète en 5 modules",
    description: "5 modules complets en format PDF interactif, optimisés pour la lecture et la mise en pratique immédiate sur smartphone.",
    value: 10000
  },
  {
    id: "prompts",
    iconName: "BrainCircuit",
    title: "Bibliothèque de Prompts prêts à utiliser",
    description: "Des prompts ChatGPT testés et directement exploitables pour la rédaction commerciale, les idées de produits et le marketing.",
    value: 5000
  },
  {
    id: "calendar",
    iconName: "CalendarDays",
    title: "Calendrier de contenu 30 jours",
    description: "Un plan éditorial complet pour savoir exactement quoi publier sur WhatsApp, Facebook et TikTok pour générer des ventes.",
    value: 3000
  },
  {
    id: "messages",
    iconName: "MessageSquareQuote",
    title: "Scripts de vente WhatsApp prêts à copier",
    description: "Des messages de relance et de persuasion prêts à adapter pour convertir les prospects hésitants en clients acheteurs.",
    value: 2000
  },
  {
    id: "roadmap",
    iconName: "CheckCircle2",
    title: "Plan d'action pas à pas sur 30 jours",
    description: "Un parcours guidé jour par jour pour éliminer l'hésitation et franchir chaque étape avec clarté.",
    value: 0 // Inclus comme accélérateur
  }
];

// Foire aux questions
export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_LIST: FAQItem[] = [
  {
    question: "Est-ce que cette formation est adaptée aux débutants ?",
    answer: "Oui, absolument. Elle a été spécialement conçue pour les personnes qui n'ont jamais utilisé l'intelligence artificielle ou qui débutent tout juste. Tout est expliqué en langage simple, sans jargon mathématique ou technique."
  },
  {
    question: "Ai-je besoin d'un ordinateur ?",
    answer: "Non. Toute la formation est pensée pour être 100% accessible et praticable depuis un smartphone Android ou iPhone. Tu peux tout faire depuis ton téléphone connecté à Internet."
  },
  {
    question: "Ai-je besoin de compétences techniques ou en programmation ?",
    answer: "Non, aucune compétence technique préalable n'est nécessaire. Pas besoin de savoir coder, ni d'être un graphiste ou un expert informatique."
  },
  {
    question: "Quels outils vais-je apprendre à utiliser ?",
    answer: "La formation présente notamment ChatGPT, NotebookLM, Canva IA, Gamma et d'autres outils gratuits et accessibles qui s'exécutent directement dans ton navigateur mobile ou via application."
  },
  {
    question: "Comment vais-je recevoir la formation ?",
    answer: "Après validation de ton paiement, le contenu numérique (les 5 modules PDF interactifs et tous les bonus) est mis à ta disposition immédiatement par téléchargement direct et par email, même s'il est 2h du matin."
  },
  {
    question: "Puis-je payer avec MTN Mobile Money ou Orange Money ?",
    answer: "Oui, ces moyens de paiement sont pris en charge dans la passerelle de paiement sécurisée (au Cameroun et dans les pays compatibles d'Afrique centrale et de l'Ouest), ainsi que les cartes Visa, Mastercard et portefeuilles mobiles."
  },
  {
    question: "Puis-je être remboursé si je ne suis pas satisfait ?",
    answer: "Oui. Nous appliquons une garantie 'Satisfait ou remboursé' de 7 jours. Si tu appliques les méthodes et que la formation ne correspond pas à ce qui est promis, tu peux demander ton remboursement conformément aux conditions de garantie."
  },
  {
    question: "Est-ce que la formation garantit de gagner de l'argent ?",
    answer: "Non. La formation fournit des méthodes éprouvées, des outils concrets et des stratégies pratiques de monétisation. Cependant, les résultats financiers dépendent exclusivement de ton travail, de ton exécution, du marché et de ton engagement. Nous refusons les fausses promesses d'argent magique."
  }
];
