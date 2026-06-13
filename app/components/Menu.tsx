import Image from "next/image";

const menuItems = [
  {
    name: "和牛盛り合わせ",
    ruby: "わぎゅうもりあわせ",
    desc: "産地直送のA5黒毛和牛を厳選。各部位の旨味をひと皿でご堪能いただけます。",
    price: "5,980",
    label: "おすすめ",
    image: "/images/wagyu_assort.jpg",
  },
  {
    name: "厚切り牛タン",
    ruby: "あつぎりぎゅうたん",
    desc: "厚切りで旨味を閉じ込めた、炎牛自慢の牛タン。塩・レモンでシンプルに。",
    price: "1,980",
    label: "人気",
    image: "/images/gyutan.jpg",
  },
  {
    name: "カルビ",
    ruby: "かるび",
    desc: "黒毛和牛A5ランクの上カルビ。口の中でほどける極上の霜降り。",
    price: "3,280",
    label: null,
    image: "/images/karubi.jpg",
  },
  {
    name: "ホルモン",
    ruby: "ほるもん",
    desc: "新鮮なホルモンを厳選。鶴橋仕込みの秘伝のタレで召し上がれ。",
    price: "1,480",
    label: null,
    image: "/images/hormone.jpg",
  },
];

const labelColors: Record<string, string> = {
  人気: "bg-engyu-red text-engyu-cream",
  おすすめ: "bg-engyu-gold text-engyu-black",
  希少: "bg-engyu-red/80 text-engyu-cream",
  コース: "bg-engyu-dark border border-engyu-gold text-engyu-gold",
};

export default function Menu() {
  return (
    <section id="menu" className="py-24 md:py-32 bg-engyu-dark relative">
      {/* Top decorative border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-engyu-gold/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-engyu-gold text-xs tracking-[0.5em] mb-4">MENU</p>
          <h2 className="text-3xl md:text-4xl font-bold text-engyu-cream tracking-wider mb-4">
            おすすめメニュー
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-12 bg-engyu-gold/40" />
            <div className="w-1 h-1 bg-engyu-gold/60 rotate-45" />
            <div className="h-[1px] w-12 bg-engyu-gold/40" />
          </div>
          <p className="mt-6 text-engyu-muted text-sm tracking-widest leading-relaxed max-w-md mx-auto font-sans-jp">
            産地直送の黒毛和牛を、その日の状態に合わせた切り方で提供。
            <br />
            すべては「最高の一口」のために。
          </p>
        </div>

        {/* Menu grid: 1col → 2col (sm) → 4col (lg) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="group relative bg-engyu-card border border-white/5 hover:border-engyu-gold/40 transition-all duration-500 overflow-hidden hover:shadow-xl hover:shadow-black/60 hover:-translate-y-1"
            >
              {/* Top gold accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-engyu-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

              {/* Image area */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  quality={75}
                  className="transition-transform duration-700 group-hover:scale-110"
                />
                {/* Bottom gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-engyu-card via-transparent to-transparent" />

                {/* Label badge */}
                {item.label && (
                  <span
                    className={`absolute top-3 left-3 inline-block text-xs tracking-widest px-2 py-0.5 z-10 font-sans-jp ${labelColors[item.label] ?? "bg-engyu-gold/20 text-engyu-gold"}`}
                  >
                    {item.label}
                  </span>
                )}
              </div>

              {/* Card body */}
              <div className="relative p-5">
                {/* Item name */}
                <div className="mb-3">
                  <span className="block text-gray-300 text-xs tracking-widest mb-1 font-sans-jp">
                    {item.ruby}
                  </span>
                  <h3 className="text-lg font-bold text-engyu-cream tracking-wider">
                    {item.name}
                  </h3>
                </div>

                {/* Divider */}
                <div className="h-[1px] w-8 bg-engyu-gold/40 mb-3 group-hover:w-16 transition-all duration-500" />

                {/* Description */}
                <p className="text-engyu-muted text-sm leading-loose mb-4 font-sans-jp">
                  {item.desc}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-1">
                  <span className="text-engyu-gold text-xl font-bold font-sans-jp">
                    ¥{item.price}
                  </span>
                  <span className="text-engyu-muted text-xs font-sans-jp">（税込）</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-engyu-muted text-xs tracking-wider mt-10 font-sans-jp">
          ※ 価格はすべて税込表示です。仕入れ状況により一部メニューは変更になる場合があります。
        </p>
      </div>
    </section>
  );
}
