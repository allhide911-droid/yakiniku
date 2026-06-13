export default function Footer() {
  return (
    <footer className="bg-engyu-black border-t border-white/5">
      {/* Gold accent line */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-engyu-gold/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Logo & tagline */}
          <div className="text-center md:text-left">
            <p className="text-3xl font-bold flame-text tracking-widest mb-1">
              炎牛
            </p>
            <p className="text-engyu-muted text-xs tracking-[0.5em]">ENGYU YAKINIKU</p>
            <p className="text-engyu-muted text-xs mt-4 leading-loose font-sans-jp">
              〒544-0034
              <br />
              大阪府大阪市生野区鶴橋2丁目
              <br />
              <span className="text-engyu-gold">TEL: 06-0000-0000</span>
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col gap-2 text-center md:text-left">
            <p className="text-engyu-gold text-xs tracking-[0.4em] mb-2">
              NAVIGATION
            </p>
            {[
              { href: "#menu", label: "メニュー" },
              { href: "#kodawari", label: "こだわり" },
              { href: "#access", label: "アクセス・ご予約" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-engyu-muted text-sm tracking-wider hover:text-engyu-gold transition-colors font-sans-jp"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Hours summary */}
          <div className="text-center md:text-left">
            <p className="text-engyu-gold text-xs tracking-[0.4em] mb-2">
              HOURS
            </p>
            <p className="text-engyu-muted text-xs leading-loose font-sans-jp">
              火〜金：17:00〜23:30
              <br />
              土・日・祝：16:00〜23:30
              <br />
              <span className="text-engyu-gold/80">月曜定休</span>
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-engyu-muted text-xs tracking-wider font-sans-jp">
            © 2024 炎牛（ENGYU）All rights reserved.
          </p>
          <p className="text-engyu-muted/40 text-xs font-sans-jp">
            大阪・鶴橋の焼肉 炎牛
          </p>
        </div>
      </div>
    </footer>
  );
}
