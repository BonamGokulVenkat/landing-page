import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="pt-20 pb-12 border-t border-[var(--color-stone)] bg-[var(--color-paper)] text-[var(--color-ink)]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-[var(--color-stone)]">
          
          {/* Brand/Vision Column */}
          <div className="md:col-span-5 flex flex-col items-start gap-4">
            <a href="#top" className="font-display text-xl font-medium tracking-tight hover:text-blue-600 transition-colors">
              Sharath Chandra <span className="font-serif italic font-normal">Kancherla</span>
            </a>
            <p className="body-text text-[var(--color-ink-soft)] max-w-sm font-light">
              To inspire and uplift one billion lives through healing, wisdom, music, and conscious living — nurturing a world that lives as one global family.
            </p>
            <div className="flex items-center gap-2 mt-2 px-3 py-1.5 border border-[var(--color-stone)] bg-[var(--color-stone-light)]/50">
              <span className="text-[9px] font-bold uppercase tracking-widest text-[var(--color-ink-soft)]">My Inspiration:</span>
              <a
                href="https://gurudev.artofliving.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[9px] font-semibold text-[var(--color-ink)] hover:text-blue-600 hover:underline transition-colors"
              >
                Gurudev Sri Sri Ravi Shankar
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-3 flex flex-col gap-6">
            <h4 className="section-eyebrow text-[var(--color-ink)]">Navigation</h4>
            <nav className="flex flex-col gap-3">
              <a href="#top" className="nav-label text-[var(--color-ink-soft)] hover:text-blue-600 transition-colors">Return to Top</a>
              <a href="#about" className="nav-label text-[var(--color-ink-soft)] hover:text-blue-600 transition-colors">Biography</a>
              <a href="#sessions" className="nav-label text-[var(--color-ink-soft)] hover:text-blue-600 transition-colors">Session Offerings</a>
              <a href="#contact" className="nav-label text-[var(--color-ink-soft)] hover:text-blue-600 transition-colors">Get in Touch</a>
            </nav>
          </div>

          {/* Connect Column */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <h4 className="section-eyebrow text-[var(--color-ink)]">Connect</h4>
            <div className="flex flex-col gap-2">
              <a href="mailto:sharathchandra.kancherla@gmail.com" className="font-mono text-xs text-[var(--color-ink-soft)] hover:text-blue-600 transition-colors">
                sharathchandra.kancherla@gmail.com
              </a>
              <a href="tel:+919700477529" className="font-mono text-xs text-[var(--color-ink-soft)] hover:text-blue-600 transition-colors">
                +91 9700477529
              </a>
            </div>
            
            <div className="flex items-center gap-6 mt-2">
              <a href="https://www.instagram.com/sharathkancherla?igsh=MWtvZXI1a3czbzdlYg==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[var(--color-ink-soft)] hover:text-blue-600 transition-colors">
                <FaInstagram className="h-4 w-4" />
              </a>
              <a href="https://youtube.com/@sharathkancherla?si=d8kXq71Z1eJ0e18K" target="_blank" rel="noopener noreferrer" aria-label="Youtube" className="text-[var(--color-ink-soft)] hover:text-blue-600 transition-colors">
                <FaYoutube className="h-4 w-4" />
              </a>
              <a href="https://www.linkedin.com/in/sharath-chandra-kancherla-b38422108?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[var(--color-ink-soft)] hover:text-blue-600 transition-colors">
                <FaLinkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-[10px] font-mono tracking-widest text-[var(--color-ink-soft)] uppercase">
          <span>&copy; {new Date().getFullYear()} Sharath Chandra Kancherla</span>
          <span>Nurturing a world that lives as one global family</span>
        </div>
      </Container>
    </footer>
  );
}