import React, { useState } from 'react';
import { Quote, CheckCircle2, TrendingUp, Sparkles, MapPin, Play, Video } from 'lucide-react';
import { VideoModal, VideoTestimonial } from './VideoModal';
import videoThumbFemale from '../assets/images/video_testimonial_thumb_1790676840679.jpg';
import videoThumbMale from '../assets/images/video_testimonial_thumb_male_1790676855872.jpg';

export interface Testimonial {
  id: string;
  firstName: string;
  location: string;
  role: string;
  avatarBg: string;
  avatarText: string;
  productCreated: string;
  keyMetric: string;
  feedback: string;
  deliveryPlatform: string;
}

export const WRITTEN_TESTIMONIALS: Testimonial[] = [
  {
    id: "christian",
    firstName: "Christian M.",
    location: "Douala 🇨🇲",
    role: "Étudiant & Débutant",
    avatarBg: "from-violet-600 to-indigo-700",
    avatarText: "CM",
    productCreated: "Guide PDF de révision pour concours",
    keyMetric: "24 ventes en 12 jours via MTN MoMo",
    feedback: "Avant la formation, je passais mon temps sur TikTok sans rien gagner. En appliquant le Module 3 et les prompts fournis, j'ai rédigé mon premier guide PDF de 28 pages en 2 soirées sur mon téléphone. Vendu à 2 500 FCFA, j'ai déjà rentabilisé plus de 10 fois mon inscription.",
    deliveryPlatform: "WhatsApp & Mobile Money"
  },
  {
    id: "sandrine",
    firstName: "Sandrine K.",
    location: "Yaoundé 🇨🇲",
    role: "Commerçante & Créatrice",
    avatarBg: "from-emerald-600 to-teal-700",
    avatarText: "SK",
    productCreated: "Packs de visuels Canva IA pour boutiques",
    keyMetric: "45 000 FCFA générés dès le 1er mois",
    feedback: "Je n'avais aucune compétence en graphisme ni ordinateur. Le module sur Canva IA et ChatGPT m'a appris à créer des affiches publicitaires propres pour des salons de coiffure du quartier. 3 clientes m'ont commandé des forfaits mensuels pour leurs réseaux.",
    deliveryPlatform: "Canva IA & WhatsApp"
  },
  {
    id: "arnaud",
    firstName: "Arnaud T.",
    location: "Bafoussam 🇨🇲",
    role: "Porteur de projet",
    avatarBg: "from-blue-600 to-cyan-700",
    avatarText: "AT",
    productCreated: "Plans d'affaires types & Pitch Decks Gamma",
    keyMetric: "Temps de création divisé par 5",
    feedback: "Les prompts du bonus et la découverte de l'application Gamma valent à eux seuls 5 fois le prix. J'ai généré une présentation complète de projet en moins de 15 minutes. Tout est pensé pour le concret, sans blabla théorique.",
    deliveryPlatform: "Gamma App & ChatGPT"
  },
  {
    id: "carine",
    firstName: "Carine B.",
    location: "Abidjan 🇨🇮",
    role: "Assistante administrative",
    avatarBg: "from-purple-600 to-pink-700",
    avatarText: "CB",
    productCreated: "Pack Templates CV & Lettres Pro",
    keyMetric: "18 ventes à 2 000 FCFA",
    feedback: "La partie sur la vente et l'automatisation avec les messages WhatsApp préremplis fait toute la différence. Les gens commandent, envoient leur capture de paiement Orange Money, et reçoivent le lien immédiatement.",
    deliveryPlatform: "Maketou & Orange Money"
  }
];

export const VIDEO_TESTIMONIALS: VideoTestimonial[] = [
  {
    id: "video-sandrine",
    name: "Sandrine K.",
    location: "Yaoundé 🇨🇲",
    role: "Créatrice & Graphiste mobile",
    thumbnail: videoThumbFemale,
    duration: "0:48 min",
    result: "45 000 FCFA générés",
    productCreated: "Packs Canva IA pour commerces",
    quote: "J'ai suivi la formation uniquement avec mon smartphone en rentrant le soir. Aujourd'hui, 3 boutiques locales me paient chaque mois pour leurs visuels."
  },
  {
    id: "video-christian",
    name: "Christian M.",
    location: "Douala 🇨🇲",
    role: "Étudiant & Vendeur d'ebooks",
    thumbnail: videoThumbMale,
    duration: "1:05 min",
    result: "24 guides PDF vendus",
    productCreated: "Ebook révision concours",
    quote: "Je pensais qu'il fallait être programmeur pour faire du digital. Le Module 3 m'a montré comment structurer un guide et encaisser avec MTN MoMo en 2 jours."
  }
];

interface TestimonialsSectionProps {
  onOpenCheckout?: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  onOpenCheckout = () => {},
}) => {
  const [selectedVideo, setSelectedVideo] = useState<VideoTestimonial | null>(null);

  return (
    <section id="temoignages" className="py-16 sm:py-24 bg-[#0a0b12] relative overflow-hidden border-t border-neutral-800/80">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-violet-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-950/60 border border-violet-500/30 text-violet-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            <span>Retours d'Expérience Réels</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-snug font-display">
            Ce que disent nos apprenants
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-300">
            Regarde leurs retours en vidéo ou découvre leurs résultats chiffrés après avoir appliqué la méthode.
          </p>
        </div>

        {/* 1. Short Video Testimonials Row */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-violet-950/60 border border-violet-500/30 text-violet-400">
                <Video className="w-4 h-4" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white font-display">
                Témoignages Vidéo Courts
              </h3>
            </div>
            <span className="text-xs text-neutral-400">
              Format smartphone · 100% authentique
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 max-w-4xl mx-auto">
            {VIDEO_TESTIMONIALS.map((video) => (
              <div
                key={video.id}
                onClick={() => setSelectedVideo(video)}
                className="group relative rounded-2xl bg-[#0e1017] border border-neutral-800 hover:border-violet-500/50 p-4 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-violet-950/30 flex flex-col justify-between"
              >
                {/* Video Card Thumbnail Box */}
                <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-xl overflow-hidden bg-neutral-900 mb-4 select-none">
                  <img
                    src={video.thumbnail}
                    alt={`Témoignage vidéo de ${video.name}`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />

                  {/* Play Button Icon with pulsing ring */}
                  <div className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-violet-600/90 text-white flex items-center justify-center shadow-lg group-hover:bg-violet-500 group-hover:scale-110 transition-all">
                    <Play className="w-5 h-5 ml-0.5 fill-white" />
                  </div>

                  {/* Duration Tag */}
                  <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-black/75 backdrop-blur-sm text-[11px] font-mono text-white font-semibold">
                    {video.duration}
                  </div>

                  {/* Verified Badge */}
                  <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-sm border border-emerald-500/30 text-emerald-400 text-[10px] font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Vidéo vérifiée
                  </div>
                </div>

                {/* Video Info Details */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <h4 className="text-base font-bold text-white font-display flex items-center gap-2">
                      {video.name}
                      <span className="text-xs font-normal text-neutral-400">({video.location})</span>
                    </h4>
                    <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/20">
                      {video.result}
                    </span>
                  </div>

                  <p className="text-xs text-neutral-400 mb-3">
                    {video.role} · Produit : <strong className="text-neutral-200">{video.productCreated}</strong>
                  </p>

                  <p className="text-xs text-neutral-300 italic line-clamp-2">
                    « {video.quote} »
                  </p>
                </div>

                {/* Call to action label */}
                <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs text-violet-400 font-semibold group-hover:text-violet-300">
                  <span className="flex items-center gap-1.5">
                    <Play className="w-3 h-3 fill-violet-400" />
                    Lancer la vidéo
                  </span>
                  <span className="text-[11px] text-neutral-500">
                    Ouvrir le lecteur →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Written Testimonials Grid */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-1.5 rounded-lg bg-neutral-800 text-neutral-300">
              <Quote className="w-4 h-4" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white font-display">
              Autres Témoignages Écrits
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {WRITTEN_TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="p-6 rounded-2xl bg-[#0e1017] border border-neutral-800 hover:border-violet-500/30 transition-all flex flex-col justify-between group shadow-lg shadow-black/20"
              >
                <div>
                  {/* Header of Card */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      {/* Avatar initial badge */}
                      <div className={`w-11 h-11 rounded-xl bg-gradient-to-tr ${t.avatarBg} flex items-center justify-center text-white font-bold text-sm shadow-md`}>
                        {t.avatarText}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-base font-bold text-white font-display">
                            {t.firstName}
                          </h4>
                          <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-950/60 border border-emerald-500/30 px-1.5 py-0.2 rounded flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" /> Vérifié
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-neutral-400 mt-0.5">
                          <span className="text-neutral-300">{t.role}</span>
                          <span>·</span>
                          <span className="flex items-center gap-1 text-neutral-400">
                            <MapPin className="w-3 h-3 text-neutral-500" />
                            {t.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    <Quote className="w-7 h-7 text-neutral-700/60 group-hover:text-violet-500/40 transition-colors flex-shrink-0" />
                  </div>

                  {/* Key result badge */}
                  <div className="mb-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-neutral-900 border border-neutral-800 text-[11px] text-purple-300 font-semibold">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Résultat : {t.keyMetric}</span>
                  </div>

                  {/* Testimonial Quote */}
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed italic">
                    « {t.feedback} »
                  </p>
                </div>

                {/* Product created footer info */}
                <div className="mt-5 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-[11px] text-neutral-400">
                  <span className="text-neutral-400 truncate">
                    Produit créé : <strong className="text-neutral-200 font-medium">{t.productCreated}</strong>
                  </span>
                  <span className="text-neutral-500 whitespace-nowrap ml-2">
                    {t.deliveryPlatform}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Reassurance banner */}
        <div className="p-4 sm:p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 text-center max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 text-xs sm:text-sm text-neutral-300">
          <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
            <CheckCircle2 className="w-4 h-4" /> Résultats basés sur l'action
          </span>
          <span className="hidden sm:inline text-neutral-600">|</span>
          <span className="text-neutral-400 text-xs">
            Chaque apprenant applique les modules à son rythme depuis son smartphone.
          </span>
        </div>

      </div>

      {/* Video Modal Player */}
      <VideoModal
        isOpen={selectedVideo !== null}
        onClose={() => setSelectedVideo(null)}
        video={selectedVideo}
        onOpenCheckout={onOpenCheckout}
      />
    </section>
  );
};
