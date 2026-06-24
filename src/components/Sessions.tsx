"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import Container from "@/components/ui/Container";
import SessionCard from "@/components/SessionCard";
import { sessions } from "@/data/sessions";

type CategoryType = "therapy" | "consultation" | "classes_workshops";

interface TabConfig {
  id: CategoryType;
  label: string;
  subLabel: string;
  explanation: string;
  formUrl: string;
  buttonText: string;
}

const tabsConfig: TabConfig[] = [
  {
    id: "therapy",
    label: "Therapy Sessions",
    subLabel: "CST, Rakkenho & Sound Therapy",
    explanation:
      "Physical and emotional restoration through gentle touch, traditional Japanese rhythmic foot pressure, and sound frequency therapy. Designed to regulate the nervous system, release deeply held physical trauma, and guide the body into deep relaxation.",
    formUrl: "https://forms.gle/REPLACE_WITH_THERAPY_FORM",
    buttonText: "Register for Therapy Sessions",
  },
  {
    id: "consultation",
    label: "1-on-1 Consultations",
    subLabel: "Astrology & Palmistry Readings",
    explanation:
      "Timeless planetary charts, hand structures, and questions-based horary analysis to map life paths, relationships, and health tendencies. These consultations offer deep, customized insights and guidance without requiring complex details.",
    formUrl: "https://forms.gle/REPLACE_WITH_CONSULTATION_FORM",
    buttonText: "Book a 1-on-1 Consultation",
  },
  {
    id: "classes_workshops",
    label: "Classes & Workshops",
    subLabel: "Music, NLP & Lifestyle Coaching",
    explanation:
      "Accelerated growth programs featuring Carnatic vocal training, Neuro-Linguistic programming (NLP) subconscious habit adjustments, and a comprehensive nutrition course to help you cultivate balance, energy, and mental agility.",
    formUrl: "https://forms.gle/REPLACE_WITH_WORKSHOPS_FORM",
    buttonText: "Register for Classes & Workshops",
  },
];

export default function Sessions() {
  const [activeTab, setActiveTab] = useState<CategoryType>("therapy");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const activeSessions = sessions.filter((session) => {
    if (activeTab === "therapy") return session.category === "therapy";
    if (activeTab === "consultation") return session.category === "consultation";
    return session.category === "class" || session.category === "workshop";
  });

  const activeTabConfig = tabsConfig.find((tab) => tab.id === activeTab)!;

  const goPrevious = () => {
    setCurrentIndex((previousIndex) => Math.max(0, previousIndex - 1));
  };

  const goNext = () => {
    setCurrentIndex((previousIndex) =>
      Math.min(activeSessions.length - 1, previousIndex + 1)
    );
  };

  return (
    <section
      id="sessions"
      className="py-32 bg-[var(--color-paper)] border-t border-[var(--color-stone)] overflow-hidden"
    >
      <Container>
        <div className="flex flex-col items-center text-center mb-20">
          <span className="section-eyebrow text-blue-600 bg-blue-600/10 px-3 py-1 rounded">
            Sessions
          </span>

          <h2 className="section-title mt-4 text-[var(--color-ink)]">
            Choose Your{" "}
            <span className="font-display italic font-normal">Pathway</span>
          </h2>

          <p className="mt-4 max-w-prose section-description text-[var(--color-ink-soft)]">
            Select a category tab below. Hover over any session card to reveal
            its details and focus your selection.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 lg:gap-8 mb-16">
          {tabsConfig.map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setActiveTab(tab.id);
                  setCurrentIndex(0);
                  setHoveredId(null);
                }}
                className={`px-6 py-4 border-b-2 transition-all duration-300 ${
                  isActive
                    ? "border-blue-600 opacity-100"
                    : "border-transparent opacity-40 hover:opacity-70"
                }`}
              >
                <span className="font-display text-base sm:text-lg leading-tight font-medium block text-[var(--color-ink)]">
                  {tab.label}
                </span>

                <span className="small-label text-[9px] text-[var(--color-ink-soft)] mt-1 block">
                  {tab.subLabel}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mb-16 border border-[var(--color-stone)] p-8 sm:p-10 bg-white/50 max-w-4xl mx-auto rounded-xl">
          <p className="font-display text-sm sm:text-base italic text-[var(--color-ink-soft)] leading-relaxed text-center max-w-3xl mx-auto">
            &ldquo;{activeTabConfig.explanation}&rdquo;
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto flex items-center justify-center">
          <button
            type="button"
            onClick={goPrevious}
            disabled={currentIndex === 0}
            className={`absolute -left-4 sm:-left-8 lg:-left-12 z-20 p-3 bg-white/80 border border-[var(--color-stone)] rounded-xl transition-colors ${
              currentIndex === 0
                ? "opacity-40 cursor-not-allowed"
                : "hover:border-blue-600"
            }`}
            aria-label="Previous session"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="w-full overflow-hidden px-8 sm:px-12">
            <div
              className="flex transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] gap-8"
              style={{
                transform: `translateX(calc(-${currentIndex * 100}% - ${
                  currentIndex * 32
                }px))`,
              }}
            >
              {activeSessions.map((session, index) => (
                <div
                  key={session.id}
                  className={`min-w-full transition-all duration-700 ${
                    index === currentIndex
                      ? "opacity-100 blur-0 scale-100"
                      : "opacity-40 blur-[4px] scale-95"
                  }`}
                >
                  <SessionCard
                    session={session}
                    isHovered={hoveredId === session.id}
                    isAnyHovered={hoveredId !== null}
                    onHover={() => setHoveredId(session.id)}
                    onLeave={() => setHoveredId(null)}
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={goNext}
            disabled={currentIndex === activeSessions.length - 1}
            className={`absolute -right-4 sm:-right-8 lg:-right-12 z-20 p-3 bg-white/80 border border-[var(--color-stone)] rounded-xl transition-colors ${
              currentIndex === activeSessions.length - 1
                ? "opacity-40 cursor-not-allowed"
                : "hover:border-blue-600"
            }`}
            aria-label="Next session"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {activeSessions.length > 1 && (
          <div className="mt-8 flex justify-center gap-2">
            {activeSessions.map((session, index) => (
              <button
                key={session.id}
                type="button"
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "w-8 bg-blue-600"
                    : "w-2 bg-[var(--color-stone)] hover:bg-blue-600/50"
                }`}
                aria-label={`Go to session ${index + 1}`}
              />
            ))}
          </div>
        )}

        <div className="mt-20 border-t border-[var(--color-stone)] pt-12 flex flex-col items-center gap-6">
          <div className="border border-[var(--color-ink)] p-6 bg-white/60 text-center max-w-2xl mx-auto relative rounded-xl">
            <span className="absolute top-0 left-0 bg-[var(--color-ink)] text-[var(--color-paper)] text-[8px] uppercase tracking-widest font-bold px-2.5 py-0.5 rounded-br-lg rounded-tl-xl">
              Scheduling Note
            </span>

            <p className="small-label text-[var(--color-ink)] mt-2">
              Payment &amp; Coordination
            </p>

            <p className="mt-2 body-text text-xs text-[var(--color-ink-soft)]">
              Pricing details are listed directly within the registration forms.
              Once you submit the form and complete your payment, our team will
              reach out within{" "}
              <span className="highlight-marker">48 to 72 hours</span> to
              schedule and confirm your booking.
            </p>
          </div>

          <a
            href={activeTabConfig.formUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button-label group flex items-center justify-center gap-2.5 bg-blue-600 text-white px-10 py-5 transition-all duration-300 hover:bg-blue-700 hover:-translate-y-0.5 active:translate-y-0 rounded-xl border border-blue-600 shadow-md"
          >
            {activeTabConfig.buttonText}
            <ExternalLink className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </Container>
    </section>
  );
}