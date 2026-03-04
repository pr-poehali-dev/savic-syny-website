import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/3e50802e-b2fc-4a68-815e-d0c6f1dc034f/files/e5a2eb6f-fd83-418c-aad9-009f34718da1.jpg";
const PRODUCTS_IMG = "https://cdn.poehali.dev/projects/3e50802e-b2fc-4a68-815e-d0c6f1dc034f/files/28e1dedb-7005-4971-baff-dbb91134fa45.jpg";
const BREWERY_IMG = "https://cdn.poehali.dev/projects/3e50802e-b2fc-4a68-815e-d0c6f1dc034f/files/c972d470-f145-4201-b4ed-598bc32f0fa7.jpg";

const NAV_LINKS = [
  { label: "О нас", href: "#about" },
  { label: "История", href: "#history" },
  { label: "Продукция", href: "#products" },
  { label: "Производство", href: "#process" },
  { label: "Блог", href: "#blog" },
  { label: "Контакты", href: "#contacts" },
];

const PRODUCTS = [
  {
    name: "Савицкий Дункель",
    type: "Тёмный лагер",
    abv: "5.2%",
    desc: "Насыщенный, с нотами жжёного солода, карамели и горького шоколада. Выдержан в дубовых бочках 60 дней.",
    icon: "🍺",
  },
  {
    name: "Золото Савицких",
    type: "Светлый лагер",
    abv: "4.8%",
    desc: "Кристально чистый, с лёгкой хмелевой горчинкой и тонким цветочным ароматом. Классика немецкого стиля.",
    icon: "🍻",
  },
  {
    name: "Вайцен Старого Мастера",
    type: "Пшеничное пиво",
    abv: "5.5%",
    desc: "Нефильтрованное, с характерной мутностью и ароматами банана и гвоздики. По рецепту 1887 года.",
    icon: "🌾",
  },
  {
    name: "Сыновний Портер",
    type: "Балтийский портер",
    abv: "7.0%",
    desc: "Крепкий, бархатистый, с богатым букетом кофе, тёмного шоколада и пряностей. Ограниченная серия.",
    icon: "🪨",
  },
];

const PROCESS_STEPS = [
  { num: "01", title: "Отбор солода", desc: "Используем только отборный баварский солод с проверенных мельниц, отобранный вручную нашими мастерами." },
  { num: "02", title: "Затирание", desc: "Строгий контроль температуры на каждом этапе затирания. Традиционное многоступенчатое инфузионное затирание." },
  { num: "03", title: "Варка и хмелевание", desc: "90-минутная варка с добавлением хмеля в три этапа: для горечи, аромата и завершающего букета." },
  { num: "04", title: "Брожение", desc: "Низовое брожение в закрытых чанах при +4°C на протяжении 21 дня. Терпение — основа качества." },
  { num: "05", title: "Лагеризация", desc: "Выдержка в дубовых подвалах от 30 до 90 дней. Пиво обретает характер, глубину и зрелость." },
  { num: "06", title: "Розлив", desc: "Ручной контроль каждой партии. Минимальная фильтрация для сохранения живого вкуса." },
];

const BLOG_POSTS = [
  {
    date: "12 февраля 2026",
    title: "История немецкого пивоварения: от монастырей до наших дней",
    excerpt: "Как монахи средневековья заложили традиции, которым мы следуем по сей день...",
  },
  {
    date: "28 января 2026",
    title: "Закон о чистоте пива Reinheitsgebot: почему это важно",
    excerpt: "Принятый в 1516 году баварский закон о чистоте пива остаётся нашим главным ориентиром...",
  },
  {
    date: "05 января 2026",
    title: "Искусство дегустации: как правильно пить тёмный лагер",
    excerpt: "Температура подачи, правильный бокал и порядок сортов — разбираем детали...",
  },
];

const TOUR_DATES = [
  { date: "15 марта", time: "12:00", spots: 8, available: 4 },
  { date: "22 марта", time: "14:00", spots: 8, available: 8 },
  { date: "29 марта", time: "12:00", spots: 8, available: 2 },
  { date: "5 апреля", time: "11:00", spots: 8, available: 8 },
  { date: "12 апреля", time: "14:00", spots: 8, available: 6 },
  { date: "19 апреля", time: "12:00", spots: 8, available: 0 },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState<number | null>(null);
  const [bookingName, setBookingName] = useState("");
  const [bookingPhone, setBookingPhone] = useState("");
  const [bookingDone, setBookingDone] = useState(false);

  function scrollTo(href: string) {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  function handleBooking(e: React.FormEvent) {
    e.preventDefault();
    setBookingDone(true);
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#1a0f00", color: "#f5e6c8" }}>

      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-50 wood-texture border-b border-amber-900/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-gothic text-2xl" style={{ color: "#d4a428", fontFamily: "UnifrakturMaguntia, cursive" }}>
              Савицкий
            </span>
            <span className="text-xs tracking-widest uppercase" style={{ color: "#b8732a", fontFamily: "Oswald, sans-serif" }}>
              и сыновья
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <button key={link.href} onClick={() => scrollTo(link.href)} className="nav-link">
                {link.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollTo("#tour")}
            className="hidden md:block btn-brew text-sm"
          >
            Заказать экскурсию
          </button>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden wood-texture border-t border-amber-900/30 px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map(link => (
              <button key={link.href} onClick={() => scrollTo(link.href)} className="nav-link text-left">
                {link.label}
              </button>
            ))}
            <button onClick={() => scrollTo("#tour")} className="btn-brew mt-2">
              Заказать экскурсию
            </button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Пивоварня Савицкий" className="w-full h-full object-cover" />
          <div className="hero-overlay absolute inset-0" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="ornament-line mb-6">
            <span className="text-xs tracking-[0.4em] uppercase" style={{ color: "#b8732a", fontFamily: "Oswald, sans-serif" }}>
              Основана в 1887 году
            </span>
          </div>

          <h1
            className="mb-4 leading-none"
            style={{
              fontFamily: "UnifrakturMaguntia, cursive",
              fontSize: "clamp(3rem, 10vw, 7rem)",
              color: "#d4a428",
              textShadow: "0 0 60px rgba(212,164,40,0.5), 0 4px 8px rgba(0,0,0,0.9)",
            }}
          >
            Савицкий
          </h1>

          <h2
            className="mb-8 tracking-[0.3em] uppercase"
            style={{
              fontFamily: "Oswald, sans-serif",
              fontSize: "clamp(1rem, 3vw, 1.8rem)",
              color: "#f5e6c8",
              letterSpacing: "0.5em",
              fontWeight: 300,
            }}
          >
            и сыновья
          </h2>

          <div className="section-divider mb-8" />

          <p
            className="mb-12 max-w-2xl mx-auto leading-relaxed"
            style={{
              fontFamily: "Cormorant Garamond, Georgia, serif",
              fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
              color: "#e8d5b0",
              fontStyle: "italic",
            }}
          >
            Четыре поколения мастеров. Немецкие традиции. Неизменное качество.
            Пиво, сваренное с честью и терпением.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => scrollTo("#products")} className="btn-brew">
              Наша продукция
            </button>
            <button onClick={() => scrollTo("#tour")} className="btn-brew-outline">
              Заказать экскурсию
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={24} style={{ color: "#b8732a" }} />
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 wood-texture border-y border-amber-900/30">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: "1887", label: "Год основания" },
            { num: "4", label: "Поколения мастеров" },
            { num: "12", label: "Сортов пива" },
            { num: "50 000", label: "Литров в год" },
          ].map((stat, i) => (
            <div key={i}>
              <div
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  color: "#d4a428",
                  lineHeight: 1,
                  textShadow: "0 0 20px rgba(212,164,40,0.3)",
                }}
              >
                {stat.num}
              </div>
              <div
                className="mt-2"
                style={{ fontFamily: "Oswald, sans-serif", fontSize: "0.7rem", color: "#b8732a", textTransform: "uppercase", letterSpacing: "0.2em" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="ornament-line mb-6 justify-start">
              <span style={{ fontFamily: "Oswald, sans-serif", fontSize: "0.75rem", color: "#b8732a", letterSpacing: "0.3em", textTransform: "uppercase" }}>
                О нас
              </span>
            </div>
            <h2
              className="mb-6"
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                color: "#f5e6c8",
                lineHeight: 1.1,
              }}
            >
              Пивоварня,<br />
              <em style={{ color: "#d4a428" }}>рождённая из страсти</em>
            </h2>
            <div className="section-divider mb-8" style={{ width: "100px" }} />
            <p
              className="mb-6 leading-relaxed"
              style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.15rem", color: "#c8b99a" }}
            >
              Пивоварня «Савицкий и сыновья» была основана в 1887 году Ильёй Савицким,
              который обучался пивоварному делу в Мюнхене у мастеров баварских пивоварен.
              Вернувшись на родину, он привёз не только рецепты, но и немецкий дух точности и уважения к традициям.
            </p>
            <p
              className="mb-8 leading-relaxed"
              style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.15rem", color: "#c8b99a" }}
            >
              Сегодня четвёртое поколение семьи продолжает дело предка,
              соблюдая принципы немецкого закона о чистоте пива Reinheitsgebot:
              только солод, хмель, вода и дрожжи.
            </p>
            <button onClick={() => scrollTo("#history")} className="btn-brew-outline">
              Читать историю
            </button>
          </div>

          <div className="relative">
            <img
              src={BREWERY_IMG}
              alt="История пивоварни"
              className="w-full object-cover"
              style={{ aspectRatio: "4/5", filter: "sepia(20%) contrast(1.1)" }}
            />
            <div
              className="absolute -bottom-4 -left-4 p-6 wood-texture border border-amber-800/50"
              style={{ maxWidth: "220px" }}
            >
              <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2.5rem", color: "#d4a428", lineHeight: 1 }}>
                135+
              </div>
              <div style={{ fontFamily: "Oswald, sans-serif", fontSize: "0.7rem", color: "#b8732a", letterSpacing: "0.2em", textTransform: "uppercase", marginTop: "0.25rem" }}>
                лет традиций
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HISTORY */}
      <section id="history" className="py-24 px-6 wood-texture">
        <div className="max-w-4xl mx-auto text-center">
          <div className="ornament-line mb-6">
            <span style={{ fontFamily: "Oswald, sans-serif", fontSize: "0.75rem", color: "#b8732a", letterSpacing: "0.3em", textTransform: "uppercase" }}>
              Наша история
            </span>
          </div>
          <h2
            className="mb-16"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: "#f5e6c8",
            }}
          >
            Четыре поколения,<br />
            <em style={{ color: "#d4a428" }}>один рецепт чести</em>
          </h2>

          <div className="relative">
            <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-amber-700 to-transparent" />

            {[
              { year: "1887", title: "Основание", text: "Илья Савицкий открывает первую варочную в подвале старого дома. Первая варка — 200 литров тёмного лагера." },
              { year: "1923", title: "Второе поколение", text: "Сын Николай расширяет производство, строит каменный погреб для лагеризации. Вводит пшеничный сорт «Вайцен»." },
              { year: "1961", title: "Третье поколение", text: "Внук Владимир модернизирует оборудование, сохраняя ручной контроль каждой варки. Первая медаль на конкурсе пивоваров." },
              { year: "2003", title: "Сегодня", text: "Правнук Андрей возвращает семейную пивоварню к жизни. Открытие туристических экскурсий и дегустационного зала." },
            ].map((item, i) => (
              <div
                key={i}
                className={`flex items-start gap-8 mb-12 ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? "text-right" : "text-left"}`}>
                  <div className="card-brew p-6 inline-block text-left" style={{ maxWidth: "340px" }}>
                    <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2rem", color: "#d4a428", lineHeight: 1 }}>
                      {item.year}
                    </div>
                    <div style={{ fontFamily: "Oswald, sans-serif", fontSize: "0.85rem", color: "#b8732a", letterSpacing: "0.2em", textTransform: "uppercase", margin: "0.25rem 0 0.75rem" }}>
                      {item.title}
                    </div>
                    <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1rem", color: "#c8b99a", lineHeight: 1.6 }}>
                      {item.text}
                    </p>
                  </div>
                </div>
                <div
                  className="relative flex-shrink-0 w-4 h-4 rounded-full mt-6 border-2"
                  style={{ backgroundColor: "#d4a428", borderColor: "#1a0f00", zIndex: 1 }}
                />
                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="ornament-line mb-6">
              <span style={{ fontFamily: "Oswald, sans-serif", fontSize: "0.75rem", color: "#b8732a", letterSpacing: "0.3em", textTransform: "uppercase" }}>
                Наша продукция
              </span>
            </div>
            <h2
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                color: "#f5e6c8",
              }}
            >
              Сорта пива<br />
              <em style={{ color: "#d4a428" }}>по немецким рецептам</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {PRODUCTS.map((product, i) => (
              <div key={i} className="card-brew p-8 flex gap-6 items-start">
                <span style={{ fontSize: "2.5rem" }}>{product.icon}</span>
                <div>
                  <div className="flex items-baseline gap-3 mb-1">
                    <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.5rem", color: "#f5e6c8" }}>
                      {product.name}
                    </h3>
                    <span
                      className="px-2 py-0.5 text-xs"
                      style={{ fontFamily: "Oswald, sans-serif", color: "#1a0f00", backgroundColor: "#d4a428", letterSpacing: "0.1em" }}
                    >
                      {product.abv}
                    </span>
                  </div>
                  <div style={{ fontFamily: "Oswald, sans-serif", fontSize: "0.7rem", color: "#b8732a", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                    {product.type}
                  </div>
                  <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1rem", color: "#c8b99a", lineHeight: 1.6 }}>
                    {product.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <img
              src={PRODUCTS_IMG}
              alt="Продукция пивоварни Савицкий"
              className="w-full max-w-3xl mx-auto object-cover"
              style={{ aspectRatio: "16/7", filter: "sepia(10%) contrast(1.05)" }}
            />
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-24 px-6 wood-texture">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="ornament-line mb-6">
              <span style={{ fontFamily: "Oswald, sans-serif", fontSize: "0.75rem", color: "#b8732a", letterSpacing: "0.3em", textTransform: "uppercase" }}>
                Процесс производства
              </span>
            </div>
            <h2
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                color: "#f5e6c8",
              }}
            >
              Искусство варки,<br />
              <em style={{ color: "#d4a428" }}>проверенное веками</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROCESS_STEPS.map((step, i) => (
              <div key={i} className="card-brew p-8">
                <div
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    fontSize: "3.5rem",
                    color: "rgba(212,164,40,0.2)",
                    lineHeight: 1,
                    marginBottom: "0.5rem",
                  }}
                >
                  {step.num}
                </div>
                <h3
                  className="mb-3"
                  style={{ fontFamily: "Oswald, sans-serif", fontSize: "1rem", color: "#d4a428", letterSpacing: "0.1em", textTransform: "uppercase" }}
                >
                  {step.title}
                </h3>
                <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1rem", color: "#c8b99a", lineHeight: 1.6 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOUR BOOKING */}
      <section id="tour" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="ornament-line mb-6">
              <span style={{ fontFamily: "Oswald, sans-serif", fontSize: "0.75rem", color: "#b8732a", letterSpacing: "0.3em", textTransform: "uppercase" }}>
                Экскурсии и дегустации
              </span>
            </div>
            <h2
              className="mb-4"
              style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#f5e6c8" }}
            >
              Посетите нашу<br />
              <em style={{ color: "#d4a428" }}>пивоварню лично</em>
            </h2>
            <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.15rem", color: "#c8b99a" }}>
              Экскурсия включает: осмотр варочного цеха, дубовых погребов и дегустацию 4 сортов пива.
              Длительность — 2 часа. Группы до 8 человек.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3
                className="mb-6"
                style={{ fontFamily: "Oswald, sans-serif", fontSize: "0.85rem", color: "#b8732a", letterSpacing: "0.2em", textTransform: "uppercase" }}
              >
                Доступные даты
              </h3>
              <div className="grid gap-3">
                {TOUR_DATES.map((tour, i) => (
                  <button
                    key={i}
                    disabled={tour.available === 0}
                    onClick={() => setSelectedTour(i)}
                    className={`flex items-center justify-between p-4 border text-left transition-all ${
                      selectedTour === i
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
                          {tour.available > 0 ? `Осталось мест: ${tour.available}` : "Мест нет"}
                        </div>
                      </div>
                    </div>
                    {tour.available > 0 && tour.available <= 3 && (
                      <span
                        className="px-2 py-0.5 text-xs"
                        style={{ backgroundColor: "rgba(180,60,30,0.3)", color: "#ff9a7a", fontFamily: "Oswald, sans-serif", letterSpacing: "0.05em" }}
                      >
                        Почти полно
                      </span>
                    )}
                    {selectedTour === i && (
                      <Icon name="Check" size={16} style={{ color: "#d4a428" }} />
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="card-brew p-8">
              {bookingDone ? (
                <div className="text-center py-8">
                  <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🍺</div>
                  <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.8rem", color: "#d4a428", marginBottom: "1rem" }}>
                    Заявка принята!
                  </h3>
                  <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.1rem", color: "#c8b99a", lineHeight: 1.6 }}>
                    Мы свяжемся с вами в течение 2 часов для подтверждения экскурсии.
                  </p>
                  <button
                    onClick={() => { setBookingDone(false); setSelectedTour(null); setBookingName(""); setBookingPhone(""); }}
                    className="btn-brew-outline mt-8"
                  >
                    Забронировать ещё
                  </button>
                </div>
              ) : (
                <>
                  <h3
                    className="mb-6"
                    style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.5rem", color: "#f5e6c8" }}
                  >
                    Оставить заявку
                  </h3>
                  {selectedTour !== null ? (
                    <div
                      className="flex items-center gap-3 mb-6 p-3 border border-amber-700/40"
                      style={{ backgroundColor: "rgba(212,164,40,0.08)" }}
                    >
                      <Icon name="Calendar" size={16} style={{ color: "#d4a428" }} />
                      <span style={{ fontFamily: "Oswald, sans-serif", fontSize: "0.9rem", color: "#f5e6c8" }}>
                        {TOUR_DATES[selectedTour].date} в {TOUR_DATES[selectedTour].time}
                      </span>
                    </div>
                  ) : (
                    <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1rem", color: "#8a7a60", marginBottom: "1.5rem", fontStyle: "italic" }}>
                      Выберите дату слева
                    </p>
                  )}

                  <form onSubmit={handleBooking} className="flex flex-col gap-4">
                    <div>
                      <label style={{ fontFamily: "Oswald, sans-serif", fontSize: "0.7rem", color: "#b8732a", letterSpacing: "0.2em", textTransform: "uppercase", display: "block", marginBottom: "0.4rem" }}>
                        Ваше имя
                      </label>
                      <input
                        required
                        value={bookingName}
                        onChange={e => setBookingName(e.target.value)}
                        placeholder="Иван Иванов"
                        className="w-full px-4 py-3 bg-transparent border border-amber-900/40 focus:outline-none focus:border-amber-500 transition-colors"
                        style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1rem", color: "#f5e6c8" }}
                      />
                    </div>
                    <div>
                      <label style={{ fontFamily: "Oswald, sans-serif", fontSize: "0.7rem", color: "#b8732a", letterSpacing: "0.2em", textTransform: "uppercase", display: "block", marginBottom: "0.4rem" }}>
                        Телефон
                      </label>
                      <input
                        required
                        value={bookingPhone}
                        onChange={e => setBookingPhone(e.target.value)}
                        placeholder="+7 (000) 000-00-00"
                        className="w-full px-4 py-3 bg-transparent border border-amber-900/40 focus:outline-none focus:border-amber-500 transition-colors"
                        style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1rem", color: "#f5e6c8" }}
                      />
                    </div>
                    <div>
                      <label style={{ fontFamily: "Oswald, sans-serif", fontSize: "0.7rem", color: "#b8732a", letterSpacing: "0.2em", textTransform: "uppercase", display: "block", marginBottom: "0.4rem" }}>
                        Количество гостей
                      </label>
                      <select
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
                      disabled={selectedTour === null}
                      className="btn-brew mt-2 disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      Забронировать экскурсию
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" className="py-24 px-6 wood-texture">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="ornament-line mb-6">
              <span style={{ fontFamily: "Oswald, sans-serif", fontSize: "0.75rem", color: "#b8732a", letterSpacing: "0.3em", textTransform: "uppercase" }}>
                Блог о пиве
              </span>
            </div>
            <h2
              style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#f5e6c8" }}
            >
              Знания и традиции<br />
              <em style={{ color: "#d4a428" }}>настоящих пивоваров</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post, i) => (
              <div key={i} className="card-brew p-6 cursor-pointer">
                <div style={{ fontFamily: "Oswald, sans-serif", fontSize: "0.7rem", color: "#b8732a", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                  {post.date}
                </div>
                <h3
                  className="mb-3"
                  style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.15rem", color: "#f5e6c8", lineHeight: 1.3 }}
                >
                  {post.title}
                </h3>
                <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "0.95rem", color: "#8a7a60", fontStyle: "italic", lineHeight: 1.5 }}>
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 mt-4" style={{ color: "#d4a428" }}>
                  <span style={{ fontFamily: "Oswald, sans-serif", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>Читать</span>
                  <Icon name="ArrowRight" size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="ornament-line mb-6">
              <span style={{ fontFamily: "Oswald, sans-serif", fontSize: "0.75rem", color: "#b8732a", letterSpacing: "0.3em", textTransform: "uppercase" }}>
                Контакты
              </span>
            </div>
            <h2
              style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#f5e6c8" }}
            >
              Найдите нас
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              {
                icon: "MapPin",
                title: "Адрес",
                lines: ["г. Псков, ул. Пивоварская 12", "Исторический центр города"],
              },
              {
                icon: "Phone",
                title: "Телефон",
                lines: ["+7 (8112) 25-00-00", "Пн–Пт: 9:00–18:00"],
              },
              {
                icon: "Mail",
                title: "Email",
                lines: ["info@savitsky-brew.ru", "Ответим в течение часа"],
              },
            ].map((item, i) => (
              <div key={i} className="card-brew p-8">
                <div className="flex justify-center mb-4">
                  <Icon name={item.icon as "MapPin" | "Phone" | "Mail"} size={24} style={{ color: "#d4a428" }} />
                </div>
                <div style={{ fontFamily: "Oswald, sans-serif", fontSize: "0.75rem", color: "#b8732a", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                  {item.title}
                </div>
                {item.lines.map((line, j) => (
                  <div
                    key={j}
                    style={{
                      fontFamily: "Cormorant Garamond, serif",
                      fontSize: j === 0 ? "1.1rem" : "0.9rem",
                      color: j === 0 ? "#f5e6c8" : "#8a7a60",
                      fontStyle: j === 1 ? "italic" : "normal",
                    }}
                  >
                    {line}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="wood-texture border-t border-amber-900/40 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div
              style={{
                fontFamily: "UnifrakturMaguntia, cursive",
                fontSize: "2.5rem",
                color: "#d4a428",
                textShadow: "0 0 20px rgba(212,164,40,0.3)",
              }}
            >
              Савицкий и сыновья
            </div>
            <div style={{ fontFamily: "Oswald, sans-serif", fontSize: "0.7rem", color: "#b8732a", letterSpacing: "0.3em", textTransform: "uppercase", marginTop: "0.5rem" }}>
              Пивоварня · с 1887 года
            </div>
          </div>

          <div className="section-divider mb-8" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-6">
              {NAV_LINKS.map(link => (
                <button key={link.href} onClick={() => scrollTo(link.href)} className="nav-link" style={{ fontSize: "0.75rem" }}>
                  {link.label}
                </button>
              ))}
            </div>
            <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "0.85rem", color: "#5a4a30", fontStyle: "italic" }}>
              © 2026 Савицкий и сыновья. Все права защищены.
            </p>
          </div>

          <div className="text-center mt-8">
            <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "0.8rem", color: "#4a3a20", fontStyle: "italic" }}>
              Алкоголь противопоказан лицам до 18 лет. Пейте ответственно.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
