import Image from "next/image";

const scenes = [
  { label: "家族のお祝い" },
  { label: "ご友人との集まり" },
  { label: "記念日のお食事" },
];

export default function Scene() {
  return (
    <section id="scene" className="relative py-32 md:py-40 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/family.jpg"
          alt="大切な人との食事シーン"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          sizes="100vw"
          quality={75}
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/40" />

      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-engyu-gold/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-engyu-gold/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="max-w-xl">
          <p className="text-engyu-gold text-xs tracking-[0.5em] mb-6">SCENE</p>
          <h2 className="text-2xl md:text-4xl font-bold text-white tracking-wider mb-6 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            大切な人との
            <br />
            時間を
          </h2>

          <div className="flex items-center gap-4 mb-8">
            <div className="h-[1px] w-12 bg-engyu-gold/60" />
            <div className="w-1.5 h-1.5 bg-engyu-gold/80 rotate-45" />
            <div className="h-[1px] w-12 bg-engyu-gold/60" />
          </div>

          <p className="text-engyu-cream/85 text-sm leading-loose mb-10 tracking-wide drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)] font-sans-jp">
            家族のお祝い、ご友人との集まり、記念日のお食事に最適です。
            <br />
            特別なひとときを、炎牛でお過ごしください。
          </p>

          {/* Scene tags */}
          <ul className="flex flex-wrap gap-3 mb-10">
            {scenes.map((s) => (
              <li
                key={s.label}
                className="border border-engyu-gold/60 text-engyu-gold text-xs tracking-widest px-4 py-2 backdrop-blur-sm bg-black/20 font-sans-jp"
              >
                {s.label}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="#access"
            className="group inline-flex items-center gap-3 border border-engyu-gold text-engyu-gold px-8 py-4 text-sm tracking-[0.3em] relative overflow-hidden hover:text-engyu-black transition-colors duration-500 font-sans-jp"
          >
            <span className="absolute inset-0 bg-engyu-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <span className="relative">ご予約・お問い合わせ</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-4 h-4 relative transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            >
              <path
                d="M5 12h14M12 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
