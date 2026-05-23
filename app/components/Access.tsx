const hours = [
  { day: "火〜金", time: "17:00 〜 23:30（L.O. 23:00）" },
  { day: "土・日・祝", time: "16:00 〜 23:30（L.O. 23:00）" },
  { day: "定休日", time: "月曜日" },
];

const access = [
  { icon: "🚃", label: "近鉄大阪線・近鉄奈良線", detail: "鶴橋駅より徒歩3分" },
  { icon: "🚃", label: "JR大阪環状線", detail: "鶴橋駅より徒歩4分" },
  { icon: "🅿️", label: "駐車場", detail: "近隣コインパーキングをご利用ください" },
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
          {/* Map placeholder */}
          <div className="relative bg-engyu-card border border-white/10 overflow-hidden min-h-72">
            {/* Stylized map background */}
            <div className="absolute inset-0 bg-gradient-to-br from-engyu-card to-engyu-black" />
            {/* Grid lines simulating a map */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            {/* Center marker */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <div className="relative">
                <div className="w-4 h-4 bg-engyu-red rounded-full" />
                <div className="absolute -inset-2 border border-engyu-red/40 rounded-full animate-ping" />
              </div>
              <div className="bg-engyu-black/80 border border-engyu-gold/30 px-4 py-2 text-center">
                <p className="text-engyu-gold text-sm font-bold tracking-wider">炎牛</p>
                <p className="text-engyu-muted text-xs mt-0.5">大阪市生野区鶴橋</p>
              </div>
              <p className="text-engyu-muted text-xs tracking-wider">
                ─ 鶴橋駅 徒歩3分 ─
              </p>
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col gap-8">
            {/* Address & Phone */}
            <div>
              <h3 className="text-engyu-gold text-xs tracking-[0.4em] mb-4">
                店舗情報
              </h3>
              <dl className="space-y-3">
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
                    大阪府大阪市生野区鶴橋2丁目5−8
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
              <div className="space-y-2">
                {hours.map((h) => (
                  <div
                    key={h.day}
                    className={`flex gap-4 text-sm ${h.day === "定休日" ? "text-engyu-red/80" : "text-engyu-cream"}`}
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
                    <span className="text-base mt-0.5">{a.icon}</span>
                    <div>
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
                <p className="text-engyu-cream text-sm leading-loose mb-4">
                  ご予約はお電話にて承っております。
                  <br />
                  コース・お席のご要望はお気軽にご相談ください。
                </p>
                <a
                  href="tel:06-0000-0000"
                  className="inline-block bg-engyu-red text-engyu-cream text-sm tracking-[0.3em] px-8 py-3 hover:bg-engyu-red-bright transition-colors"
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
