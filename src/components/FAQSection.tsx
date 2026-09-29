import React, { useState } from 'react';
import { FAQ_LIST } from '../config/product';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#0a0b12] relative border-t border-neutral-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-950/60 border border-violet-500/30 text-violet-300 text-xs font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-violet-400" />
            <span>Questions Fréquentes</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-snug font-display">
            Foire Aux Questions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-300">
            Toutes les réponses transparentes pour t'aider à prendre la bonne décision en toute sérénité.
          </p>
        </div>

        {/* Accordion with smooth slide-down micro-animations */}
        <div className="space-y-3">
          {FAQ_LIST.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-violet-500/40 bg-[#0f111c] shadow-lg shadow-purple-950/20'
                    : 'border-neutral-800 bg-[#0e1017] hover:border-neutral-700/80'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-neutral-800/20 transition-colors"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span
                    className={`text-sm sm:text-base font-bold leading-snug font-display transition-colors duration-200 ${
                      isOpen ? 'text-white' : 'text-neutral-200 hover:text-white'
                    }`}
                  >
                    {item.question}
                  </span>
                  <div
                    className={`p-1.5 rounded-md bg-neutral-800/80 flex-shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isOpen ? 'rotate-180 bg-violet-950/60 text-violet-300' : 'text-neutral-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Animated Slide-down container */}
                <div
                  id={`faq-answer-${idx}`}
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
                  }`}
                  aria-hidden={!isOpen}
                >
                  <div className="overflow-hidden">
                    <div
                      className={`px-4 pb-5 sm:px-5 sm:pb-5 pt-2 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-neutral-800/60 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'
                      }`}
                    >
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
