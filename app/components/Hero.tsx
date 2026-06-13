import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] min-h-[480px] overflow-hidden">
      <Image
        src="/images/wagyu_assort.jpg"
        alt="厳選和牛盛り合わせ"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg leading-tight">
          厳選和牛を、最高の一枚で。
        </h1>
        <p className="mt-4 text-base md:text-xl text-white/90 drop-shadow font-sans-jp">
          家族との食事も、特別な一日も。
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href="#menu"
            className="px-8 py-3 rounded-full bg-engyu-gold text-engyu-black font-semibold hover:bg-engyu-gold-light transition-colors font-sans-jp"
          >
            メニューを見る
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full border border-white text-white font-semibold hover:bg-white hover:text-engyu-black transition-colors font-sans-jp"
          >
            お問い合わせ
          </a>
        </div>
      </div>
    </section>
  );
}
