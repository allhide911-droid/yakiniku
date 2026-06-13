const hours = [
  { day: "火〜金", time: "17:00 〜 23:30（L.O. 23:00）" },
  { day: "土・日・祝", time: "16:00 〜 23:30（L.O. 23:00）" },
  { day: "定休日", time: "月曜日" },
];

const TrainIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
    <rect x="3" y="4" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M3 11h18" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8 17l-2 3M16 17l2 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="8.5" cy="14.5" r="1" fill="currentColor" />
    <circle cx="15.5" cy="14.5" r="1" fill="currentColor" />
  </svg>
);

const ParkingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M10 17V7h4a3 3 0 0 1 0 6h-4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const access = [
  { icon: <TrainIcon />, label: "近鉄大阪線・近鉄奈良線", detail: "鶴橋駅より徒歩3分" },
  { icon: <TrainIcon />, label: "JR大阪環状線", detail: "鶴橋駅より徒歩4分" },
  { icon: <ParkingIcon />, label: "駐車場", detail: "近隣コインパーキングをご利用ください" },
];

export default function Access() {
  return (
    <section id="access" className="py-24 md:py-32 bg-engyu-dark relative">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-engyu-gold/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-engyu-gold text-xs tracking-[0.5em] mb-4">ACCESS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-engyu-cream tracking-wider mb-4">
            アクセス
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-12 bg-engyu-gold/40" />
            <div className="w-1 h-1 bg-engyu-gold/60 rotate-45" />
            <div className="h-[1px] w-12 bg-engyu-gold/40" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Google Maps embed */}
          <div className="relative border border-white/10 overflow-hidden min-h-72">
            <iframe
              src="https://maps.google.com/maps?q=大阪府大阪市生野区鶴橋2丁目+炎牛&output=embed&hl=ja&z=16"
              title="炎牛 アクセスマップ"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "288px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col gap-8">
            {/* Address & Phone */}
            <div>
              <h3 className="text-engyu-gold text-xs tracking-[0.4em] mb-4">
                店舗情報
              </h3>
              <dl className="space-y-3 font-sans-jp">
                <div className="flex gap-4">
                  <dt className="text-engyu-muted text-sm w-16 shrink-0">店名</dt>
                  <dd className="text-engyu-cream text-sm tracking-wider">
                    炎牛（えんぎゅう）
                  </dd>
                </div>
                <div className="flex gap-4">
                  <dt className="text-engyu-muted text-sm w-16 shrink-0">住所</dt>
                  <dd className="text-engyu-cream text-sm leading-relaxed">
                    〒544-0034
                    <br />
                    大阪府大阪市生野区鶴橋2丁目
                  </dd>
                </div>
                <div className="flex gap-4">
                  <dt className="text-engyu-muted text-sm w-16 shrink-0">電話</dt>
                  <dd>
                    <a
                      href="tel:06-0000-0000"
                      className="text-engyu-gold text-sm hover:text-engyu-gold-light transition-colors tracking-wider"
                    >
                      06-0000-0000
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            {/* Hours */}
            <div>
              <h3 className="text-engyu-gold text-xs tracking-[0.4em] mb-4">
                営業時間
              </h3>
              <div className="space-y-2 font-sans-jp">
                {hours.map((h) => (
                  <div
                    key={h.day}
                    className={`flex gap-4 text-sm ${h.day === "定休日" ? "text-engyu-gold/80" : "text-engyu-cream"}`}
                  >
                    <span className="w-24 shrink-0 text-engyu-muted">{h.day}</span>
                    <span className="leading-relaxed">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Access */}
            <div>
              <h3 className="text-engyu-gold text-xs tracking-[0.4em] mb-4">
                交通アクセス
              </h3>
              <div className="space-y-3">
                {access.map((a) => (
                  <div key={a.label} className="flex items-start gap-3">
                    <span className="text-engyu-gold shrink-0 mt-0.5">{a.icon}</span>
                    <div className="font-sans-jp">
                      <p className="text-engyu-muted text-xs">{a.label}</p>
                      <p className="text-engyu-cream text-sm">{a.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reservation CTA */}
            <div className="mt-2">
              <div className="border border-engyu-gold/40 p-5 bg-engyu-card">
                <p className="text-engyu-gold text-xs tracking-[0.4em] mb-2">
                  RESERVATION
                </p>
                <p className="text-engyu-cream text-sm leading-loose mb-4 font-sans-jp">
                  ご予約はお電話にて承っております。
                  <br />
                  コース・お席のご要望はお気軽にご相談ください。
                </p>
                <a
                  href="tel:06-0000-0000"
                  className="inline-block bg-engyu-red text-engyu-cream text-sm tracking-[0.3em] px-8 py-3 hover:bg-engyu-red-bright transition-colors font-sans-jp"
                >
                  電話で予約する
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
