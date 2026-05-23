const pillars = [
  {
    number: "01",
    title: "産地直送の黒毛和牛",
    subtitle: "素材への誇り",
    body: "全国から厳選した黒毛和牛を産地直送で仕入れ。A4・A5ランクのみを扱い、その日の状態を見極めた上で最適な部位をご提供します。鮮度と品質に一切の妥協はありません。",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <path d="M20 4C11.16 4 4 11.16 4 20s7.16 16 16 16 16-7.16 16-16S28.84 4 20 4z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 20c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6-6-2.69-6-6z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20 14V8M20 32v-6M14 20H8M32 20h-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "備長炭の火入れ",
    subtitle: "炎のこだわり",
    body: "紀州産の備長炭を使い、遠赤外線で肉の芯まで均一に火を通します。余分な脂を落としながら旨味を閉じ込める、この炎こそが「炎牛」の原点。炭の香りが肉の美味しさをさらに引き立てます。",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <path d="M20 6c-2 4-6 6-6 12 0 5.52 2.69 10 6 10s6-4.48 6-10c0-6-4-8-6-12z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M16 24c0-2 1-3.5 2-5 1 1.5 2 3 2 5 0 2.21-.9 4-2 4s-2-1.79-2-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "秘伝のたれ",
    subtitle: "受け継がれる味",
    body: "三代にわたって守り続けてきた秘伝のタレ。醤油・味醂・果汁をベースに、長年継ぎ足しながら育てた独自の配合は企業秘密。どんな部位にも合う万能タレと、塩・レモンの2種類でお楽しみいただけます。",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <path d="M12 32V16l8-8 8 8v16H12z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M16 32v-8h8v8" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M20 8V6M14 14l-2-2M26 14l2-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Kodawari() {
  return (
    <section id="kodawari" className="py-24 md:py-32 bg-engyu-black relative overflow-hidden">
      {/* Background texture overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(176,26,26,0.08),transparent_50%),radial-gradient(circle_at_80%_20%,rgba(201,168,76,0.05),transparent_50%)]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <p className="text-engyu-gold text-xs tracking-[0.5em] mb-4">PHILOSOPHY</p>
          <h2 className="text-3xl md:text-4xl font-bold text-engyu-cream tracking-wider mb-4">
            炎牛のこだわり
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-12 bg-engyu-gold/40" />
            <div className="w-1 h-1 bg-engyu-gold/60 rotate-45" />
            <div className="h-[1px] w-12 bg-engyu-gold/40" />
          </div>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.number}
              className="group relative"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Card */}
              <div className="relative border border-white/5 bg-engyu-card/50 p-8 hover:border-engyu-gold/30 transition-all duration-500">
                {/* Large number background */}
                <span className="absolute top-4 right-6 text-7xl font-bold text-engyu-gold/5 leading-none select-none">
                  {pillar.number}
                </span>

                {/* Icon */}
                <div className="text-engyu-gold mb-6 group-hover:scale-110 transition-transform duration-500 origin-left">
                  {pillar.icon}
                </div>

                {/* Number small */}
                <span className="text-engyu-gold/60 text-xs tracking-widest mb-2 block">
                  {pillar.number}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-engyu-cream tracking-wider mb-1">
                  {pillar.title}
                </h3>
                <p className="text-engyu-gold text-xs tracking-[0.3em] mb-5">
                  {pillar.subtitle}
                </p>

                {/* Divider */}
                <div className="h-[1px] w-10 bg-engyu-gold/40 mb-5 group-hover:w-20 transition-all duration-500" />

                {/* Body */}
                <p className="text-engyu-muted text-sm leading-loose">
                  {pillar.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom quote */}
        <div className="text-center mt-20">
          <p className="text-engyu-cream/50 text-base md:text-lg tracking-[0.25em] leading-loose">
            「最高の素材を、最高の炎で。」
          </p>
          <p className="text-engyu-muted text-xs tracking-widest mt-2">
            ── 炎牛 創業者より
          </p>
        </div>
      </div>
    </section>
  );
}
