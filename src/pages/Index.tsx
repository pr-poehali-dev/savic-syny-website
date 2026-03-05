import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/3e50802e-b2fc-4a68-815e-d0c6f1dc034f/files/e5a2eb6f-fd83-418c-aad9-009f34718da1.jpg";
const PRODUCTS_IMG = "https://cdn.poehali.dev/projects/3e50802e-b2fc-4a68-815e-d0c6f1dc034f/files/28e1dedb-7005-4971-baff-dbb91134fa45.jpg";
const BREWERY_IMG = "https://cdn.poehali.dev/projects/3e50802e-b2fc-4a68-815e-d0c6f1dc034f/files/c972d470-f145-4201-b4ed-598bc32f0fa7.jpg";

const PRODUCTS_PREVIEW = [
  { name: "Савицкий Дункель", type: "Тёмный лагер", abv: "5.2%", icon: "🍺" },
  { name: "Золото Савицких", type: "Светлый лагер", abv: "4.8%", icon: "🍻" },
  { name: "Вайцен Старого Мастера", type: "Пшеничное пиво", abv: "5.5%", icon: "🌾" },
  { name: "Сыновний Портер", type: "Балтийский портер", abv: "7.0%", icon: "🪨" },
];

export default function Index() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ marginTop: "-73px" }}>
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Пивоварня Савицкий" className="w-full h-full object-cover" />
          <div className="hero-overlay absolute inset-0" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="ornament-line mb-6">
            <span style={{ fontFamily: "Oswald, sans-serif", fontSize: "0.75rem", color: "#b8732a", letterSpacing: "0.4em", textTransform: "uppercase" }}>
              Основана в 1887 году
            </span>
          </div>

          <h1 className="mb-4 leading-none"
            style={{ fontFamily: "UnifrakturMaguntia, cursive", fontSize: "clamp(3rem, 10vw, 7rem)", color: "#d4a428", textShadow: "0 0 60px rgba(212,164,40,0.5), 0 4px 8px rgba(0,0,0,0.9)" }}>
            Савицкий
          </h1>

          <h2 className="mb-8"
            style={{ fontFamily: "Oswald, sans-serif", fontSize: "clamp(1rem, 3vw, 1.8rem)", color: "#f5e6c8", letterSpacing: "0.5em", fontWeight: 300, textTransform: "uppercase" }}>
            и сыновья
          </h2>

          <div className="section-divider mb-8" />

          <p className="mb-12 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(1rem, 2.5vw, 1.3rem)", color: "#e8d5b0", fontStyle: "italic" }}>
            Четыре поколения мастеров. Немецкие традиции. Неизменное качество.
            Пиво, сваренное с честью и терпением.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products" className="btn-brew">Наша продукция</Link>
            <Link to="/tour" className="btn-brew-outline">Заказать экскурсию</Link>
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
          ].map((s, i) => (
            <div key={i}>
              <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#d4a428", lineHeight: 1 }}>{s.num}</div>
              <div className="mt-2" style={{ fontFamily: "Oswald, sans-serif", fontSize: "0.7rem", color: "#b8732a", textTransform: "uppercase", letterSpacing: "0.2em" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="ornament-line mb-6 justify-start">
              <span style={{ fontFamily: "Oswald, sans-serif", fontSize: "0.75rem", color: "#b8732a", letterSpacing: "0.3em", textTransform: "uppercase" }}>О нас</span>
            </div>
            <h2 className="mb-6" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#f5e6c8", lineHeight: 1.1 }}>
              Пивоварня,<br /><em style={{ color: "#d4a428" }}>рождённая из страсти</em>
            </h2>
            <div className="section-divider mb-8" style={{ width: "100px" }} />
            <p className="mb-6 leading-relaxed" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.15rem", color: "#c8b99a" }}>
              Основана в 1887 году Ильёй Савицким, вернувшимся из Мюнхена с немецкими рецептами
              и немецким духом точности. Сегодня четвёртое поколение семьи продолжает его дело.
            </p>
            <p className="mb-8 leading-relaxed" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.15rem", color: "#c8b99a" }}>
              Только солод, хмель, вода и дрожжи — принципы Reinheitsgebot неизменны вот уже 135 лет.
            </p>
            <Link to="/about" className="btn-brew-outline inline-block">Узнать больше о нас</Link>
          </div>

          <div className="relative">
            <img src={BREWERY_IMG} alt="Пивоварня" className="w-full object-cover"
              style={{ aspectRatio: "4/5", filter: "sepia(20%) contrast(1.1)" }} />
            <div className="absolute -bottom-4 -left-4 p-6 wood-texture border border-amber-800/50">
              <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2.5rem", color: "#d4a428", lineHeight: 1 }}>135+</div>
              <div style={{ fontFamily: "Oswald, sans-serif", fontSize: "0.7rem", color: "#b8732a", letterSpacing: "0.2em", textTransform: "uppercase", marginTop: "0.25rem" }}>лет традиций</div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR GOALS */}
      <section className="py-24 px-6 wood-texture border-y border-amber-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="ornament-line mb-6">
              <span style={{ fontFamily: "Oswald, sans-serif", fontSize: "0.75rem", color: "#b8732a", letterSpacing: "0.3em", textTransform: "uppercase" }}>Миссия</span>
            </div>
            <h2 className="mb-4" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#f5e6c8" }}>
              Наши <em style={{ color: "#d4a428" }}>цели</em>
            </h2>
            <p className="max-w-2xl mx-auto" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.15rem", color: "#c8b99a", fontStyle: "italic" }}>
              Мы варим не просто пиво — мы создаём культуру и храним традиции
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Shield",
                title: "Сохранять традиции",
                text: "Передавать из поколения в поколение немецкие рецепты и принципы Reinheitsgebot — закона о чистоте пива 1516 года.",
              },
              {
                icon: "Leaf",
                title: "Натуральные ингредиенты",
                text: "Использовать только солод, хмель, воду и дрожжи. Никаких консервантов, красителей и искусственных добавок.",
              },
              {
                icon: "TrendingUp",
                title: "Расти, сохраняя душу",
                text: "Увеличивать объёмы производства, не жертвуя качеством. Каждая партия — под личным контролем пивовара.",
              },
              {
                icon: "Users",
                title: "Развивать пивную культуру",
                text: "Проводить экскурсии, дегустации и мастер-классы, чтобы люди понимали и ценили настоящее крафтовое пиво.",
              },
              {
                icon: "MapPin",
                title: "Поддерживать регион",
                text: "Работать с местными фермерами и поставщиками, вкладываться в развитие местного сообщества.",
              },
              {
                icon: "Award",
                title: "Задавать стандарт качества",
                text: "Участвовать в международных конкурсах и подтверждать, что российское крафтовое пиво — мирового уровня.",
              },
            ].map((goal, i) => (
              <div key={i} className="card-brew p-8 flex flex-col items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-sm" style={{ backgroundColor: "rgba(212, 164, 40, 0.15)", border: "1px solid rgba(184, 115, 42, 0.3)" }}>
                  <Icon name={goal.icon} size={22} style={{ color: "#d4a428" }} />
                </div>
                <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.3rem", color: "#f5e6c8" }}>{goal.title}</h3>
                <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1rem", color: "#c8b99a", lineHeight: 1.7 }}>{goal.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS PREVIEW */}
      <section className="py-24 px-6 wood-texture">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="ornament-line mb-6">
              <span style={{ fontFamily: "Oswald, sans-serif", fontSize: "0.75rem", color: "#b8732a", letterSpacing: "0.3em", textTransform: "uppercase" }}>Продукция</span>
            </div>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#f5e6c8" }}>
              Наши сорта пива
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {PRODUCTS_PREVIEW.map((p, i) => (
              <div key={i} className="card-brew p-6 text-center">
                <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>{p.icon}</div>
                <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.15rem", color: "#f5e6c8", marginBottom: "0.25rem" }}>{p.name}</h3>
                <div style={{ fontFamily: "Oswald, sans-serif", fontSize: "0.65rem", color: "#b8732a", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.5rem" }}>{p.type}</div>
                <span className="px-2 py-0.5" style={{ fontFamily: "Oswald, sans-serif", fontSize: "0.75rem", color: "#1a0f00", backgroundColor: "#d4a428" }}>{p.abv}</span>
              </div>
            ))}
          </div>

          <div className="text-center mb-10">
            <img src={PRODUCTS_IMG} alt="Продукция" className="w-full max-w-3xl mx-auto object-cover"
              style={{ aspectRatio: "16/6", filter: "sepia(10%) contrast(1.05)" }} />
          </div>

          <div className="text-center">
            <Link to="/products" className="btn-brew inline-block">Все сорта пива</Link>
          </div>
        </div>
      </section>

      {/* TOUR CTA */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="ornament-line mb-6">
            <span style={{ fontFamily: "Oswald, sans-serif", fontSize: "0.75rem", color: "#b8732a", letterSpacing: "0.3em", textTransform: "uppercase" }}>Экскурсии</span>
          </div>
          <h2 className="mb-4" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#f5e6c8" }}>
            Посетите нашу<br /><em style={{ color: "#d4a428" }}>пивоварню лично</em>
          </h2>
          <p className="mb-10" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.15rem", color: "#c8b99a", fontStyle: "italic" }}>
            Осмотр варочного цеха, дубовые подвалы, дегустация 4 сортов.
            Группы до 8 человек. Длительность 2–4 часа.
          </p>
          <Link to="/tour" className="btn-brew inline-block text-base">
            Забронировать экскурсию
          </Link>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="py-20 px-6 wood-texture border-t border-amber-900/30">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2rem", color: "#f5e6c8" }}>
              Из нашего блога
            </h2>
            <Link to="/blog" className="btn-brew-outline text-sm">Все статьи</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { date: "12 февраля 2026", title: "История немецкого пивоварения: от монастырей до наших дней", cat: "История" },
              { date: "28 января 2026", title: "Закон о чистоте пива Reinheitsgebot: почему это важно", cat: "Традиции" },
              { date: "05 января 2026", title: "Искусство дегустации: как правильно пить тёмный лагер", cat: "Дегустация" },
            ].map((post, i) => (
              <Link key={i} to="/blog" className="card-brew p-6 block">
                <div style={{ fontFamily: "Oswald, sans-serif", fontSize: "0.65rem", color: "#b8732a", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                  {post.cat} · {post.date}
                </div>
                <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.1rem", color: "#f5e6c8", lineHeight: 1.35 }}>
                  {post.title}
                </h3>
                <div className="flex items-center gap-2 mt-4" style={{ color: "#d4a428" }}>
                  <span style={{ fontFamily: "Oswald, sans-serif", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>Читать</span>
                  <Icon name="ArrowRight" size={12} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}