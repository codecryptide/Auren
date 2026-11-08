"use client";

export function FooterSection() {
  return (
    <footer className="w-full bg-[#09100C] text-white border-t border-[#A4B5A0]/15 py-14">
      <div className="wrap flex flex-col justify-between gap-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[#A4B5A0]/15">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D7FF7F]" />
              <span className="text-xl font-semibold tracking-wider text-white">AUREN</span>
            </div>
            <p className="text-sm text-[#C2D1BE] font-light">
              Build a life you love. Personal Growth &amp; Lifestyle Companion.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center gap-6 text-xs font-mono uppercase tracking-wider text-[#A4B5A0]" aria-label="Footer">
            <a href="#philosophy" className="hover:text-white transition-colors">
              Philosophy
            </a>
            <a href="#pillars" className="hover:text-white transition-colors">
              Four Pillars
            </a>
            <a href="#showcase" className="hover:text-white transition-colors">
              Experience
            </a>
            <a href="#growth" className="hover:text-white transition-colors">
              Rhythm
            </a>
            <a href="#cta" className="hover:text-[#D7FF7F] transition-colors">
              Join Preview
            </a>
          </nav>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A4B5A0]">
          <div>
            &copy; {new Date().getFullYear()} AUREN. All rights reserved.
          </div>
          <div className="text-[11px] text-[#A4B5A0]">
            AUREN • Privacy • Terms • Next.js, Tailwind CSS &amp; TasteSkill.
          </div>
        </div>
      </div>
    </footer>
  );
}
