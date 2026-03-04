import { useState } from "react";
import Layout from "@/components/Layout";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/3e50802e-b2fc-4a68-815e-d0c6f1dc034f/files/e5a2eb6f-fd83-418c-aad9-009f34718da1.jpg";

const TOUR_TYPES = [
  {
    title: "Классическая экскурсия",
    duration: "2 часа",
    price: "1 500 ₽",
    includes: ["Осмотр варочного цеха", "Посещение дубовых подвалов", "Дегустация 4 сортов пива", "Рассказ мастера-пивовара"],
    icon: "🏭",
  },
  {
    title: "Расширенная дегустация",
    duration: "3 часа",
    price: "2 800 ₽",
    includes: ["Всё из классической экскурсии", "Дегустация 8 сортов пива", "Закуски от шеф-повара", "Сувенирная кружка в подарок"],
    icon: "🍺",
    featured: true,
  },
  {
    title: "VIP для компании",
    duration: "4 часа",
    price: "от 15 000 ₽",
    includes: ["Частная экскурсия с мастером", "Полный ассортимент дегустации", "Банкет в историческом зале", "Именные этикетки в подарок"],
    icon: "👑",
  },
];

const TOUR_DATES = [
  { date: "15 марта", time: "12:00", spots: 8, available: 4 },
  { date: "22 марта", time: "14:00", spots: 8, available: 8 },
  { date: "29 марта", time: "12:00", spots: 8, available: 2 },
  { date: "5 апреля", time: "11:00", spots: 8, available: 8 },
  { date: "12 апреля", time: "14:00", spots: 8, available: 6 },
  { date: "19 апреля", time: "12:00", spots: 8, available: 0 },
  { date: "26 апреля", time: "14:00", spots: 8, available: 8 },
  { date: "3 мая", time: "12:00", spots: 8, available: 5 },
];

export default function Tour() {
  const [selectedType, setSelectedType] = useState(0);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [guests, setGuests] = useState("2");
  const [done, setDone] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setDone(true);
  }

  return (
    <Layout>
      {/* HERO */}
      <section className="relative py-40 px-6 overflow-hidden">
        <img src={HERO_IMG} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="ornament-line mb-6">
            <span style={{ fontFamily: "Oswald, sans-serif", fontSize: "0.75rem", color: "#b8732a", letterSpacing: "0.3em", textTransform: "uppercase" }}>
              Экскурсии и дегустации
            </span>
          </div>
          <h1 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: "#f5e6c8", lineHeight: 1.1 }}>
            Посетите нашу<br /><em style={{ color: "#d4a428" }}>пивоварню лично</em>
          </h1>
          <p className="mt-6 max-w-xl mx-auto" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.15rem", color: "#e8d5b0", fontStyle: "italic" }}>
            Пройдите путь от зерна до бокала. Увидьте наши подвалы. Попробуйте живое пиво прямо у источника.
          </p>
        </div>
      </section>

      {/* TOUR TYPES */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2.5rem", color: "#f5e6c8" }}>
              Выберите формат
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {TOUR_TYPES.map((type, i) => (
              <button
                key={i}
                onClick={() => setSelectedType(i)}
                className={`card-brew p-7 text-left transition-all ${selectedType === i ? "border-amber-500" : ""}`}
                style={selectedType === i ? { borderColor: "#d4a428", borderWidth: "1px" } : {}}
              >
                {type.featured && (
                  <div className="mb-4 px-2 py-0.5 inline-block"
                    style={{ backgroundColor: "#d4a428", fontFamily: "Oswald, sans-serif", fontSize: "0.65rem", color: "#1a0f00", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                    Популярный выбор
                  </div>
                )}
                <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{type.icon}</div>
                <h3 className="mb-1" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.3rem", color: "#f5e6c8" }}>
                  {type.title}
                </h3>
                <div className="flex gap-4 mb-4">
                  <span style={{ fontFamily: "Oswald, sans-serif", fontSize: "0.7rem", color: "#b8732a", letterSpacing: "0.1em" }}>{type.duration}</span>
                  <span style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.1rem", color: "#d4a428" }}>{type.price}</span>
                </div>
                <ul className="space-y-2">
                  {type.includes.map((item, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <Icon name="Check" size={12} style={{ color: "#d4a428", flexShrink: 0 }} />
                      <span style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "0.95rem", color: "#c8b99a" }}>{item}</span>
                    </li>
                  ))}
                </ul>
                {selectedType === i && (
                  <div className="mt-4 pt-4 border-t border-amber-700/30 flex items-center gap-2" style={{ color: "#d4a428" }}>
                    <Icon name="Check" size={14} />
                    <span style={{ fontFamily: "Oswald, sans-serif", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>Выбрано</span>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section className="py-4 px-6 pb-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Dates */}
          <div>
            <h3 className="mb-6" style={{ fontFamily: "Oswald, sans-serif", fontSize: "0.85rem", color: "#b8732a", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              Доступные даты
            </h3>
            <div className="grid gap-3">
              {TOUR_DATES.map((tour, i) => (
                <button
                  key={i}
                  disabled={tour.available === 0}
                  onClick={() => setSelectedDate(i)}
                  className={`flex items-center justify-between p-4 border text-left transition-all ${
                    selectedDate === i
                      ? "border-amber-500 bg-amber-900/20"
                      : tour.available === 0
                      ? "border-gray-800 opacity-40 cursor-not-allowed"
                      : "border-amber-900/40 hover:border-amber-700 hover:bg-amber-900/10"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <Icon name="Calendar" size={16} style={{ color: "#d4a428" }} />
                    <div>
                      <div style={{ fontFamily: "Oswald, sans-serif", fontSize: "0.95rem", color: "#f5e6c8" }}>
                        {tour.date}, {tour.time}
                      </div>
                      <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "0.85rem", color: "#b8732a" }}>
                        {tour.available > 0 ? `Осталось мест: ${tour.available} из ${tour.spots}` : "Мест нет"}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {tour.available > 0 && tour.available <= 3 && (
                      <span className="px-2 py-0.5 text-xs"
                        style={{ backgroundColor: "rgba(180,60,30,0.3)", color: "#ff9a7a", fontFamily: "Oswald, sans-serif" }}>
                        Почти полно
                      </span>
                    )}
                    {selectedDate === i && <Icon name="Check" size={14} style={{ color: "#d4a428" }} />}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="card-brew p-8">
            {done ? (
              <div className="text-center py-12">
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🍺</div>
                <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.8rem", color: "#d4a428", marginBottom: "1rem" }}>
                  Заявка принята!
                </h3>
                <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.05rem", color: "#c8b99a", lineHeight: 1.6, marginBottom: "0.5rem" }}>
                  Мы свяжемся с вами в течение 2 часов для подтверждения.
                </p>
                <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1rem", color: "#8a7a60", fontStyle: "italic" }}>
                  Тип: {TOUR_TYPES[selectedType].title}
                  {selectedDate !== null && ` · ${TOUR_DATES[selectedDate].date} в ${TOUR_DATES[selectedDate].time}`}
                </p>
                <button
                  onClick={() => { setDone(false); setSelectedDate(null); setName(""); setPhone(""); }}
                  className="btn-brew-outline mt-8"
                >
                  Забронировать ещё
                </button>
              </div>
            ) : (
              <>
                <h3 className="mb-2" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.5rem", color: "#f5e6c8" }}>
                  Оставить заявку
                </h3>
                <p className="mb-6" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "0.95rem", color: "#8a7a60", fontStyle: "italic" }}>
                  {TOUR_TYPES[selectedType].title} · {TOUR_TYPES[selectedType].price}
                </p>

                {selectedDate !== null && (
                  <div className="flex items-center gap-3 mb-5 p-3 border border-amber-700/40"
                    style={{ backgroundColor: "rgba(212,164,40,0.08)" }}>
                    <Icon name="Calendar" size={16} style={{ color: "#d4a428" }} />
                    <span style={{ fontFamily: "Oswald, sans-serif", fontSize: "0.9rem", color: "#f5e6c8" }}>
                      {TOUR_DATES[selectedDate].date} в {TOUR_DATES[selectedDate].time}
                    </span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {[
                    { label: "Ваше имя", value: name, setter: setName, placeholder: "Иван Иванов" },
                    { label: "Телефон", value: phone, setter: setPhone, placeholder: "+7 (000) 000-00-00" },
                  ].map((f, i) => (
                    <div key={i}>
                      <label style={{ fontFamily: "Oswald, sans-serif", fontSize: "0.7rem", color: "#b8732a", letterSpacing: "0.2em", textTransform: "uppercase", display: "block", marginBottom: "0.4rem" }}>
                        {f.label}
                      </label>
                      <input
                        required
                        value={f.value}
                        onChange={e => f.setter(e.target.value)}
                        placeholder={f.placeholder}
                        className="w-full px-4 py-3 bg-transparent border border-amber-900/40 focus:outline-none focus:border-amber-500 transition-colors"
                        style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1rem", color: "#f5e6c8" }}
                      />
                    </div>
                  ))}
                  <div>
                    <label style={{ fontFamily: "Oswald, sans-serif", fontSize: "0.7rem", color: "#b8732a", letterSpacing: "0.2em", textTransform: "uppercase", display: "block", marginBottom: "0.4rem" }}>
                      Количество гостей
                    </label>
                    <select
                      value={guests}
                      onChange={e => setGuests(e.target.value)}
                      className="w-full px-4 py-3 border border-amber-900/40 focus:outline-none focus:border-amber-500 transition-colors"
                      style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1rem", color: "#f5e6c8", backgroundColor: "#2c1a0a" }}
                    >
                      {[1,2,3,4,5,6,7,8].map(n => (
                        <option key={n} value={n}>{n} {n === 1 ? "гость" : n < 5 ? "гостя" : "гостей"}</option>
                      ))}
                    </select>
                  </div>
                  <button
                    type="submit"
                    disabled={selectedDate === null}
                    className="btn-brew mt-2 disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    {selectedDate === null ? "Выберите дату" : "Забронировать"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 wood-texture">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2.5rem", color: "#f5e6c8" }}>
              Частые вопросы
            </h2>
          </div>
          <div className="flex flex-col gap-5">
            {[
              { q: "Нужно ли бронировать заранее?", a: "Да, обязательно. Группы ограничены 8 людьми, места заканчиваются быстро. Рекомендуем бронировать за 2–3 недели." },
              { q: "Можно ли с детьми?", a: "Дети до 18 лет на дегустацию не допускаются. Экскурсия без дегустации возможна для семей с детьми старше 10 лет." },
              { q: "Как добраться?", a: "Мы находимся в историческом центре Пскова, ул. Пивоварская 12. Ближайшая остановка — «Старый Рынок». Есть парковка." },
              { q: "Что взять с собой?", a: "Только хороший аппетит и интерес к пиву. Удобную обувь — пол в подвалах каменный. Всё остальное мы предоставим." },
            ].map((faq, i) => (
              <div key={i} className="card-brew p-6">
                <div className="mb-2 flex items-center gap-3">
                  <Icon name="HelpCircle" size={16} style={{ color: "#d4a428", flexShrink: 0 }} />
                  <h3 style={{ fontFamily: "Oswald, sans-serif", fontSize: "0.9rem", color: "#f5e6c8", letterSpacing: "0.05em" }}>{faq.q}</h3>
                </div>
                <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1rem", color: "#c8b99a", lineHeight: 1.6, paddingLeft: "1.6rem" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
