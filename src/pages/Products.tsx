import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const PRODUCTS_IMG = "https://cdn.poehali.dev/projects/3e50802e-b2fc-4a68-815e-d0c6f1dc034f/files/28e1dedb-7005-4971-baff-dbb91134fa45.jpg";

const PRODUCTS = [
  {
    name: "Савицкий Дункель",
    type: "Тёмный лагер",
    abv: "5.2%",
    ibu: "22",
    color: "Тёмно-каштановый",
    temp: "7–9°C",
    desc: "Насыщенный, с нотами жжёного солода, карамели и горького шоколада. Выдержан в дубовых бочках 60 дней. Мягкое послевкусие с лёгкой хмелевой горчинкой.",
    food: "Жаркое из свинины, запечёная утка, твёрдые сыры",
    icon: "🍺",
  },
  {
    name: "Золото Савицких",
    type: "Светлый лагер",
    abv: "4.8%",
    ibu: "18",
    color: "Золотистый",
    temp: "5–7°C",
    desc: "Кристально чистый, с лёгкой хмелевой горчинкой и тонким цветочным ароматом. Классика немецкого стиля. Освежающий и сбалансированный.",
    food: "Мюнхенские колбаски, брецели, белая рыба",
    icon: "🍻",
  },
  {
    name: "Вайцен Старого Мастера",
    type: "Пшеничное пиво",
    abv: "5.5%",
    ibu: "14",
    color: "Мутно-янтарный",
    temp: "8–10°C",
    desc: "Нефильтрованное, с характерной мутностью и ароматами банана и гвоздики. По оригинальному рецепту 1887 года. Плотная пенная шапка.",
    food: "Телятина, баварский картофельный салат, мягкие сыры",
    icon: "🌾",
  },
  {
    name: "Сыновний Портер",
    type: "Балтийский портер",
    abv: "7.0%",
    ibu: "32",
    color: "Чёрный с рубиновым отблеском",
    temp: "10–12°C",
    desc: "Крепкий, бархатистый, с богатым букетом кофе, тёмного шоколада и пряностей. Ограниченная серия. Выдержка 90 дней.",
    food: "Дичь, шоколадные десерты, зрелые выдержанные сыры",
    icon: "🪨",
  },
  {
    name: "Ржаной Савицкий",
    type: "Ржаное пиво",
    abv: "4.5%",
    ibu: "16",
    color: "Тёмно-янтарный",
    temp: "6–8°C",
    desc: "Пряное, с характерным ржаным хлебным ароматом. Тёмный хлеб в стакане — именно так его описывают наши гости.",
    food: "Ржаной хлеб, копчёная рыба, маринованные огурцы",
    icon: "🌾",
  },
  {
    name: "Праздничный Бок",
    type: "Майбок / Сезонное",
    abv: "6.5%",
    ibu: "26",
    color: "Янтарно-медный",
    temp: "8–10°C",
    desc: "Сезонный сорт. Варится раз в год к майским праздникам. Солодовый, насыщенный, с лёгкой карамельной сладостью и чистым финишем.",
    food: "Запечёный поросёнок, квашеная капуста, пряная колбаса",
    icon: "🎉",
  },
];

export default function Products() {
  return (
    <Layout>
      {/* HERO */}
      <section className="py-24 px-6 wood-texture border-b border-amber-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="ornament-line mb-6">
            <span style={{ fontFamily: "Oswald, sans-serif", fontSize: "0.75rem", color: "#b8732a", letterSpacing: "0.3em", textTransform: "uppercase" }}>
              Наша продукция
            </span>
          </div>
          <h1 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: "#f5e6c8", lineHeight: 1.1 }}>
            Сорта пива<br /><em style={{ color: "#d4a428" }}>по немецким рецептам</em>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.15rem", color: "#c8b99a", fontStyle: "italic" }}>
            Каждый сорт — результат многодневного труда и многолетних традиций.
            Только четыре ингредиента. Никаких компромиссов.
          </p>
        </div>
      </section>

      {/* HERO IMAGE */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <img src={PRODUCTS_IMG} alt="Продукция пивоварни" className="w-full object-cover"
          style={{ aspectRatio: "21/7", filter: "sepia(10%) contrast(1.05)" }} />
      </div>

      {/* PRODUCTS GRID */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {PRODUCTS.map((product, i) => (
            <div key={i} className="card-brew p-8">
              <div className="flex items-start gap-5 mb-5">
                <span style={{ fontSize: "2.5rem" }}>{product.icon}</span>
                <div>
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.6rem", color: "#f5e6c8" }}>
                      {product.name}
                    </h2>
                    <span className="px-2 py-0.5" style={{ fontFamily: "Oswald, sans-serif", fontSize: "0.75rem", color: "#1a0f00", backgroundColor: "#d4a428", letterSpacing: "0.1em" }}>
                      {product.abv}
                    </span>
                  </div>
                  <div style={{ fontFamily: "Oswald, sans-serif", fontSize: "0.7rem", color: "#b8732a", letterSpacing: "0.2em", textTransform: "uppercase", marginTop: "0.25rem" }}>
                    {product.type}
                  </div>
                </div>
              </div>

              <p className="mb-5" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.05rem", color: "#c8b99a", lineHeight: 1.7 }}>
                {product.desc}
              </p>

              <div className="grid grid-cols-3 gap-3 mb-5">
                {[
                  { label: "IBU", val: product.ibu },
                  { label: "Цвет", val: product.color },
                  { label: "Температура", val: product.temp },
                ].map((d, j) => (
                  <div key={j} className="border border-amber-900/30 p-3 text-center">
                    <div style={{ fontFamily: "Oswald, sans-serif", fontSize: "0.6rem", color: "#b8732a", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.25rem" }}>{d.label}</div>
                    <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "0.9rem", color: "#f5e6c8" }}>{d.val}</div>
                  </div>
                ))}
              </div>

              <div style={{ borderTop: "1px solid rgba(184,115,42,0.2)", paddingTop: "1rem" }}>
                <span style={{ fontFamily: "Oswald, sans-serif", fontSize: "0.65rem", color: "#b8732a", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                  Сочетается с:{" "}
                </span>
                <span style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "0.95rem", color: "#8a7a60", fontStyle: "italic" }}>
                  {product.food}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 wood-texture">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="mb-4" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2.5rem", color: "#f5e6c8" }}>
            Хотите попробовать?
          </h2>
          <p className="mb-8" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.15rem", color: "#c8b99a", fontStyle: "italic" }}>
            Запишитесь на дегустацию и попробуйте все сорта прямо на производстве.
          </p>
          <Link to="/tour" className="btn-brew inline-block">
            Забронировать дегустацию
          </Link>
        </div>
      </section>
    </Layout>
  );
}
