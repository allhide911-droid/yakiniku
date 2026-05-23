const categories = [
  {
    name: "牛タン",
    ruby: "ぎゅうたん",
    desc: "厚切りで旨味を閉じ込めた、炎牛自慢の牛タン。塩・レモンでシンプルに。",
    price: "1,980",
    label: "人気",
  },
  {
    name: "特選カルビ",
    ruby: "とくせんかるび",
    desc: "黒毛和牛A5ランクの上カルビ。口の中でほどける極上の霜降り。",
    price: "3,280",
    label: "おすすめ",
  },
  {
    name: "ハラミ",
    ruby: "はらみ",
    desc: "赤身の旨味と適度な脂のバランスが絶妙。食べ応えある一品。",
    price: "1,680",
    label: null,
  },
  {
    name: "ミスジ",
    ruby: "みすじ",
    desc: "一頭からわずかしか取れない希少部位。とろける食感と深い旨味。",
    price: "2,480",
    label: "希少",
  },
  {
    name: "ホルモン盛り",
    ruby: "ほるもんもり",
    desc: "新鮮なホルモンを5種盛り。鶴橋仕込みの秘伝のタレで召し上がれ。",
    price: "1,480",
    label: null,
  },
  {
    name: "炎牛コース",
    ruby: "えんぎゅうこーす",
    desc: "前菜・ユッケ・厳選肉6種・スープ・ご飯・デザートの全10品。",
    price: "6,800",
    label: "コース",
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
            厳選メニュー
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-12 bg-engyu-gold/40" />
            <div className="w-1 h-1 bg-engyu-gold/60 rotate-45" />
            <div className="h-[1px] w-12 bg-engyu-gold/40" />
          </div>
          <p className="mt-6 text-engyu-muted text-sm tracking-widest leading-relaxed max-w-md mx-auto">
            産地直送の黒毛和牛を、その日の状態に合わせた切り方で提供。
            <br />
            すべては「最高の一口」のために。
          </p>
        </div>

        {/* Menu grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((item) => (
            <div
              key={item.name}
              className="group relative bg-engyu-card border border-white/5 hover:border-engyu-gold/40 transition-all duration-500 overflow-hidden"
            >
              {/* Top gold accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-engyu-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Subtle background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-engyu-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative p-6">
                {/* Label badge */}
                {item.label && (
                  <span
                    className={`inline-block text-xs tracking-widest px-2 py-0.5 mb-4 ${labelColors[item.label] ?? "bg-engyu-gold/20 text-engyu-gold"}`}
                  >
                    {item.label}
                  </span>
                )}

                {/* Item name */}
                <div className="mb-3">
                  <span className="block text-engyu-muted text-xs tracking-widest mb-1">
                    {item.ruby}
                  </span>
                  <h3 className="text-xl font-bold text-engyu-cream tracking-wider">
                    {item.name}
                  </h3>
                </div>

                {/* Divider */}
                <div className="h-[1px] w-8 bg-engyu-gold/40 mb-4" />

                {/* Description */}
                <p className="text-engyu-muted text-sm leading-loose mb-6">
                  {item.desc}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-1">
                  <span className="text-engyu-gold text-2xl font-bold">
                    ¥{item.price}
                  </span>
                  <span className="text-engyu-muted text-xs">（税込）</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-engyu-muted text-xs tracking-wider mt-10">
          ※ 価格はすべて税込表示です。仕入れ状況により一部メニューは変更になる場合があります。
        </p>
      </div>
    </section>
  );
}
