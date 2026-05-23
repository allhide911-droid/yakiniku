export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-engyu-black" />
      {/* Ember glow from below */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-engyu-red/30 via-engyu-red/10 to-transparent" />
      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.7)_100%)]" />
      {/* Gold accent line top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-engyu-gold to-transparent" />

      {/* Decorative vertical text */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4">
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent to-engyu-gold/50" />
        <span className="text-engyu-gold/50 text-xs tracking-[0.5em] [writing-mode:vertical-rl]">
          YAKINIKU ENGYU
        </span>
        <div className="w-[1px] h-16 bg-gradient-to-t from-transparent to-engyu-gold/50" />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Eyebrow */}
        <p className="text-engyu-gold tracking-[0.5em] text-xs mb-8 opacity-80">
          大阪・鶴橋 ─ OSAKA TSURUHASHI
        </p>

        {/* Main title */}
        <h1 className="mb-6">
          <span className="block text-[clamp(5rem,18vw,14rem)] font-bold leading-none flame-text flicker">
            炎牛
          </span>
          <span className="block text-engyu-gold/40 text-lg tracking-[1em] mt-2 font-normal">
            ENGYU
          </span>
        </h1>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 my-8">
          <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-engyu-gold/60" />
          <div className="w-1.5 h-1.5 bg-engyu-gold/60 rotate-45" />
          <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-engyu-gold/60" />
        </div>

        {/* Tagline */}
        <p className="text-engyu-cream/90 text-lg md:text-2xl tracking-[0.2em] mb-2 leading-loose">
          鶴橋の炎で焼く、至高の一皿。
        </p>
        <p className="text-engyu-muted text-sm tracking-widest mb-12">
          黒毛和牛 × 備長炭
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#menu"
            className="group relative overflow-hidden border border-engyu-gold text-engyu-gold px-10 py-4 text-sm tracking-[0.3em] hover:text-engyu-black transition-colors duration-500 w-56 text-center"
          >
            <span className="absolute inset-0 bg-engyu-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <span className="relative">メニューを見る</span>
          </a>
          <a
            href="#access"
            className="text-engyu-cream/60 text-sm tracking-[0.3em] hover:text-engyu-gold transition-colors underline underline-offset-4 decoration-engyu-gold/30"
          >
            アクセス・予約
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-engyu-gold text-xs tracking-[0.4em]">SCROLL</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-engyu-gold to-transparent animate-pulse" />
      </div>
    </section>
  );
}
