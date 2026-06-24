import Container from "@/components/ui/Container";
import MetricCard from "@/components/MetricCard";
import { metrics } from "@/data/metrics";

export default function Metrics() {
  return (
    <section className="border-t border-[var(--color-stone)] py-20 sm:py-28 bg-[var(--color-paper)] overflow-hidden">
      <Container>
        <div className="flex flex-col items-center text-center mb-16">
          <span className="section-eyebrow text-[var(--color-ink-soft)] bg-[var(--color-stone-light)] px-3 py-1 rounded">
            Our Reach
          </span>
          <h2 className="mt-4 section-title text-[var(--color-ink)]">
            Over a Decade of <span className="font-display italic font-normal text-blue-600">Impact</span>
          </h2>
          <p className="mt-4 max-w-prose section-description text-[var(--color-ink-soft)] leading-relaxed">
            A reflection of healing journeys, wisdom shared, and lives uplifted across borders.
          </p>
        </div>
      </Container>

      {/* Infinite Marquee Scroll Track */}
      <div className="relative mt-8 w-full overflow-hidden border-y border-[var(--color-stone)] py-8 bg-[var(--color-stone-light)]/30">
        <div className="animate-marquee-scroll flex gap-6 px-3">
          {/* First set */}
          {metrics.map((metric, idx) => (
            <MetricCard key={`${metric.id}-set1-${idx}`} metric={metric} />
          ))}
          {/* Second identical set for seamless looping */}
          {metrics.map((metric, idx) => (
            <MetricCard key={`${metric.id}-set2-${idx}`} metric={metric} />
          ))}
        </div>
      </div>
    </section>
  );
}