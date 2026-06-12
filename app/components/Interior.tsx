import Image from "next/image";

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
        <path
          d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M23 21v-2a4 4 0 0 0-3-3.87"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 3.13a4 4 0 0 1 0 7.75"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    text: "ご家族でのお食事",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
        <path
          d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    text: "ご友人との会食",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
        <path
          d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    text: "各種ご宴会",
  },
];

export default function Interior() {
  return (
    <section id="interior" className="py-24 md:py-32 bg-engyu-dark relative overflow-hidden">
      {/* Top decorative border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-engyu-gold/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image column */}
          <div className="relative">
            {/* Gold frame decoration */}
            <div className="absolute -top-3 -left-3 w-24 h-24 border-t-2 border-l-2 border-engyu-gold/50 pointer-events-none" />
            <div className="absolute -bottom-3 -right-3 w-24 h-24 border-b-2 border-r-2 border-engyu-gold/50 pointer-events-none" />

            <div className="relative overflow-hidden aspect-[4/3]">
              <Image
                src="/images/interior.jpg"
                alt="炎牛の店内"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={75}
                className="transition-transform duration-700 hover:scale-105"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-engyu-black/30 to-transparent" />
            </div>
          </div>

          {/* Text column */}
          <div>
            <p className="text-engyu-gold text-xs tracking-[0.5em] mb-6">INTERIOR</p>
            <h2 className="text-2xl md:text-3xl font-bold text-engyu-cream tracking-wider mb-6 leading-relaxed">
              落ち着いた空間で
              <br />
              ゆったりと
            </h2>

            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-engyu-gold/40" />
              <div className="w-1 h-1 bg-engyu-gold/60 rotate-45" />
              <div className="h-[1px] w-12 bg-engyu-gold/40" />
            </div>

            <p className="text-engyu-muted text-sm leading-loose mb-10">
              こだわりの内装と落ち着いた照明が、特別なひとときを演出します。
              大切な方との食事を、居心地のよい空間でお楽しみください。
            </p>

            {/* Feature list */}
            <ul className="space-y-4">
              {features.map((f) => (
                <li key={f.text} className="flex items-center gap-4 group">
                  <span className="text-engyu-gold shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {f.icon}
                  </span>
                  <span className="text-engyu-cream text-sm tracking-wider">{f.text}</span>
                  <div className="flex-1 h-[1px] bg-engyu-gold/15" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
