import { useState } from "react";
import Layout from "@/components/Layout";
import Icon from "@/components/ui/icon";

const POSTS = [
  {
    date: "12 февраля 2026",
    category: "История",
    title: "История немецкого пивоварения: от монастырей до наших дней",
    excerpt: "Монахи средневековой Баварии были первыми, кто систематизировал пивоварение. Именно в монастырях появились первые стабильные рецепты, первые подвалы для лагеризации и первые правила чистоты. Рассказываем, как традиция дошла до наших дней.",
    readTime: "8 мин",
  },
  {
    date: "28 января 2026",
    category: "Традиции",
    title: "Закон о чистоте пива Reinheitsgebot: почему это важно",
    excerpt: "Принятый в 1516 году в Баварии закон запрещал использовать в пиве что-либо, кроме солода, хмеля и воды. Мы объясняем, почему этот 500-летний документ остаётся нашим главным ориентиром и как он влияет на каждую нашу варку.",
    readTime: "6 мин",
  },
  {
    date: "05 января 2026",
    category: "Дегустация",
    title: "Искусство дегустации: как правильно пить тёмный лагер",
    excerpt: "Температура подачи, правильный бокал, последовательность сортов — всё это влияет на восприятие вкуса. Наш шеф-пивовар Андрей Савицкий делится профессиональными советами по дегустации тёмного лагера.",
    readTime: "5 мин",
  },
  {
    date: "18 декабря 2025",
    category: "Производство",
    title: "Дубовые подвалы: почему мы лагеризуем пиво именно там",
    excerpt: "В наших подвалах поддерживается постоянная температура 0°C круглый год без кондиционирования. Дерево «дышит», создавая уникальный микроклимат. Рассказываем о роли подвала в формировании характера пива.",
    readTime: "7 мин",
  },
  {
    date: "3 декабря 2025",
    category: "Традиции",
    title: "Майбок: почему этот сорт варится только раз в год",
    excerpt: "Традиция майского пива восходит к XIV веку. Монахи варили крепкое, насыщенное пиво в марте, чтобы оно созрело к маю. Мы сохраняем этот ритуал и рассказываем, что делает «Праздничный Бок» особенным.",
    readTime: "5 мин",
  },
  {
    date: "15 ноября 2025",
    category: "История",
    title: "Как немецкое пивоварение пережило две мировые войны",
    excerpt: "Пивоварни закрывались, зерно уходило на хлеб, мастера гибли на фронте. Но пивоварение выжило. История о стойкости традиций на примере крупнейших немецких и баварских пивоварен.",
    readTime: "10 мин",
  },
];

const CATEGORIES = ["Все", "История", "Традиции", "Производство", "Дегустация"];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("Все");

  const filtered = activeCategory === "Все"
    ? POSTS
    : POSTS.filter(p => p.category === activeCategory);

  return (
    <Layout>
      {/* HERO */}
      <section className="py-24 px-6 wood-texture border-b border-amber-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="ornament-line mb-6">
            <span style={{ fontFamily: "Oswald, sans-serif", fontSize: "0.75rem", color: "#b8732a", letterSpacing: "0.3em", textTransform: "uppercase" }}>
              Блог о пиве
            </span>
          </div>
          <h1 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: "#f5e6c8", lineHeight: 1.1 }}>
            Знания и традиции<br /><em style={{ color: "#d4a428" }}>настоящих пивоваров</em>
          </h1>
          <p className="mt-6" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.1rem", color: "#c8b99a", fontStyle: "italic" }}>
            История, производство, дегустация — рассказываем о мире пива без прикрас.
          </p>
        </div>
      </section>

      {/* FILTERS */}
      <section className="py-8 px-6 border-b border-amber-900/30">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-3 justify-center">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 transition-all ${activeCategory === cat ? "btn-brew text-sm" : "btn-brew-outline text-sm"}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* POSTS */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {filtered.map((post, i) => (
            <article key={i} className="card-brew p-7 cursor-pointer group">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-2 py-0.5"
                  style={{ fontFamily: "Oswald, sans-serif", fontSize: "0.65rem", color: "#1a0f00", backgroundColor: "#b8732a", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  {post.category}
                </span>
                <span style={{ fontFamily: "Oswald, sans-serif", fontSize: "0.7rem", color: "#5a4a30", letterSpacing: "0.1em" }}>
                  {post.date}
                </span>
              </div>

              <h2 className="mb-3" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.3rem", color: "#f5e6c8", lineHeight: 1.3 }}>
                {post.title}
              </h2>

              <p className="mb-5" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "0.95rem", color: "#8a7a60", fontStyle: "italic", lineHeight: 1.6 }}>
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-amber-900/20">
                <div className="flex items-center gap-2" style={{ color: "#d4a428" }}>
                  <span style={{ fontFamily: "Oswald, sans-serif", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                    Читать статью
                  </span>
                  <Icon name="ArrowRight" size={14} />
                </div>
                <div className="flex items-center gap-1" style={{ color: "#5a4a30" }}>
                  <Icon name="Clock" size={12} />
                  <span style={{ fontFamily: "Oswald, sans-serif", fontSize: "0.7rem" }}>{post.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
