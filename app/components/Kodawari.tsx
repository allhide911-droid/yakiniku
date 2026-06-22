import Image from "next/image";

const pillars = [
  {
    title: "産地直送の黒毛和牛",
    subtitle: "素材への誇り",
    body: "全国から厳選した黒毛和牛を産地直送で仕入れ。A4・A5ランクのみを扱い、その日の状態を見極めた上で最適な部位をご提供します。鮮度と品質に一切の妥協はありません。",
    image: "/images/産地直送の黒毛和牛.png",
  },
  {
    title: "備長炭の火入れ",
    subtitle: "炎のこだわり",
    body: "紀州産の備長炭を使い、遠赤外線で肉の芯まで均一に火を通します。余分な脂を落としながら旨味を閉じ込める、この炎こそが「炎牛」の原点。炭の香りが肉の美味しさをさらに引き立てます。",
    image: "/images/備長炭焼肉画像.jpg",
  },
  {
    title: "秘伝のたれ",
    subtitle: "受け継がれる味",
    body: "三代にわたって守り続けてきた秘伝のタレ。醤油・味醂・果汁をベースに、長年継ぎ足しながら育てた独自の配合は企業秘密。どんな部位にも合う万能タレと、塩・レモンの2種類でお楽しみいただけます。",
    image: "/images/秘伝のたれ.png",
  },
];

export default function Kodawari() {
  return (
    <section id="kodawari" className="py-24 md:py-32 bg-engyu-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(176,26,26,0.08),transparent_50%),radial-gradient(circle_at_80%_20%,rgba(201,168,76,0.05),transparent_50%)]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className="group relative"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="relative border border-white/10 bg-engyu-card p-8 hover:border-engyu-gold/50 transition-all duration-500 bg-gradient-to-b from-white/[0.04] to-transparent flex flex-col">
                <h3 className="text-xl font-bold text-engyu-cream tracking-wider mb-1">
                  {pillar.title}
                </h3>
                <p className="text-engyu-gold text-xs tracking-[0.3em] mb-5">
                  {pillar.subtitle}
                </p>

                <div className="h-[1px] w-10 bg-engyu-gold/40 mb-5 group-hover:w-20 transition-all duration-500" />

                <p className="text-engyu-muted text-sm leading-loose font-sans-jp">
                  {pillar.body}
                </p>

                <div className="mt-auto relative h-48 overflow-hidden">
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                    className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

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
