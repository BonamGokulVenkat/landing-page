import Container from "@/components/ui/Container";

const credentials = [
  "Life skills Facilitator & Breath Expert",
  "Diploma + double PG in Biodynamic CranioSacral Therapy",
  "Advanced Rakkenho & Music Therapist",
  "S-VYASA Certified Music Therapist",
  "NLP Master Practitioner & Research Astrologer",
  "Professional Singer & Vocalist",
];

export default function About() {
  return (
    <section id="about" className="py-32 bg-[var(--color-paper)] relative">
      <Container>
        <div className="mb-24 flex flex-col items-center text-center">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-8 h-[1px] bg-blue-600" />
            <span className="section-eyebrow text-[var(--color-ink-soft)]">
              Biography
            </span>
            <span className="w-8 h-[1px] bg-blue-600" />
          </div>

          <h2 className="section-title text-[var(--color-ink)] mb-12 max-w-4xl">
            A practice built on deep listening and timeless wisdom.
          </h2>

          <div className="max-w-3xl section-description text-[var(--color-ink-soft)] space-y-6">
            <p>
              As a Holistic Wellness and Mind Coach, I have dedicated{" "}
              <span className="text-blue-600 font-bold">more than a decade</span>{" "}
              to helping individuals restore physical health, find emotional
              balance and resilience in spirit. Having touched{" "}
              <span className="text-blue-600 font-bold">more than 1.5 lakh lives</span>{" "}
              across <span className="text-blue-600 font-bold">5+ countries</span>{" "}
              and <span className="text-blue-600 font-bold">8+ states in India</span>,
              my work integrates the restorative power of sound, hands-on
              biodynamic touch, and cosmic alignments to bring profound peace. I
              have also trained{" "}
              <span className="text-blue-600 font-bold">
                30,000+ corporate professionals
              </span>{" "}
              at top-tier organizations—including Google, Microsoft, Infosys, IBM,
              Cognizant, TCS, and BIDCO Africa—equipping them with practical tools
              for stress management, focus, and conscious living.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-16 border-t border-[var(--color-stone)]">
          <div>
            <h3 className="section-eyebrow text-[var(--color-ink)] mb-4">
              Our Vision
            </h3>

            <p className="body-text text-[var(--color-ink-soft)] border-l border-blue-600 pl-6">
              To inspire and uplift one billion lives through healing, wisdom,
              music, and conscious living—nurturing a world that lives as one
              global family.
            </p>
          </div>

          <div>
            <h3 className="section-eyebrow text-[var(--color-ink)] mb-4">
              Our Mission
            </h3>

            <p className="body-text text-[var(--color-ink-soft)] border-l border-blue-600 pl-6">
              To empower individuals with practical tools for holistic well-being
              through meditation, yoga, breathwork, music, education, and timeless
              wisdom, enabling them to live healthier, happier, and more purposeful
              lives.
            </p>
          </div>
        </div>

        <div className="mt-32 pt-16 border-t border-[var(--color-stone)]">
          <h3 className="section-eyebrow text-[var(--color-ink)] mb-16 text-center">
            Credentials & Expertise
          </h3>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
            {credentials.map((item, idx) => (
              <li key={idx} className="flex flex-col items-center text-center gap-4 group">
                <span className="small-label text-blue-600 opacity-60">
                  {String(idx + 1).padStart(2, "0")}
                </span>

                <span className="body-text text-[var(--color-ink-soft)] border-b border-[var(--color-stone)] pb-4 w-full">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-32 text-center max-w-3xl mx-auto">
          <span className="section-eyebrow text-[var(--color-ink-soft)] mb-6 block">
            My Inspiration
          </span>

          <p className="font-display text-2xl lg:text-3xl font-medium text-[var(--color-ink)] leading-relaxed opacity-90">
            &ldquo;My work and life find their path in the grace, guidance and
            blessings of{" "}
            <a
              href="https://gurudev.artofliving.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-blue-600 hover:text-blue-600 transition-colors"
            >
              Gurudev Sri Sri Ravi Shankar
            </a>
            .&rdquo;
          </p>
        </div>
      </Container>
    </section>
  );
}