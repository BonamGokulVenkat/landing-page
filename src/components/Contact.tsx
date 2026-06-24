import { Mail, Phone, MapPin } from "lucide-react";
import Container from "@/components/ui/Container";

const contactItems = [
  {
    icon: Mail,
    label: "sharathchandra.kancherla@gmail.com",
    href: "mailto:sharathchandra.kancherla@gmail.com",
  },
  { icon: Phone, label: "+91 9700477529", href: "tel:+919700477529" },
  { icon: MapPin, label: "Hyderabad, Telangana", href: undefined },
];

export default function Contact() {
  return (
    <section id="contact" className="border-t border-[var(--color-stone)] py-20 sm:py-28 bg-[var(--color-paper)]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <span className="section-eyebrow text-[var(--color-ink-soft)] bg-[var(--color-stone-light)] px-3 py-1 rounded">
              Contact
            </span>
            <h2 className="mt-4 section-title text-[var(--color-ink)]">
              Questions before you <span className="font-display italic font-normal text-blue-600">register</span>?
            </h2>
            <p className="mt-4 max-w-prose section-description text-[var(--color-ink-soft)]">
              Reach out directly and I&apos;ll help you understand which therapy, reading, or workshop align best with your wellness goals.
            </p>
          </div>

          {/* Applied rounded-3xl for the subtle curve consistent with Session cards */}
          <div className="lg:col-span-6 border border-[var(--color-stone)] rounded-3xl p-8 sm:p-12 bg-[var(--color-paper)] flex flex-col gap-6 shadow-sm">
            <h3 className="card-title text-[var(--color-ink)]">Get in <span className="font-display italic font-normal text-blue-600">Touch</span></h3>
            <ul className="flex flex-col gap-5">
              {contactItems.map(({ icon: Icon, label, href }) => (
                <li key={label} className="flex items-center gap-3.5 border-b border-[var(--color-stone)]/50 pb-3 last:border-b-0 last:pb-0 group">
                  <div className="p-2 border border-[var(--color-stone)] bg-[var(--color-paper)] text-[var(--color-ink)] rounded-lg shrink-0 transition-colors duration-300 group-hover:border-blue-600 group-hover:text-blue-600">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </div>
                  {href ? (
                    <a
                      href={href}
                      className="body-text text-xs tracking-tight text-[var(--color-ink)] hover:text-blue-600 hover:underline transition-all"
                    >
                      {label}
                    </a>
                  ) : (
                    <span className="body-text text-xs tracking-tight text-[var(--color-ink-soft)]">{label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}