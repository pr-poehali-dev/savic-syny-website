import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const BREWERY_IMG = "https://cdn.poehali.dev/projects/3e50802e-b2fc-4a68-815e-d0c6f1dc034f/files/c972d470-f145-4201-b4ed-598bc32f0fa7.jpg";

export default function About() {
  return (
    <Layout>
      {/* PAGE HERO */}
      <section className="py-24 px-6 wood-texture border-b border-amber-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="ornament-line mb-6">
            <span style={{ fontFamily: "Oswald, sans-serif", fontSize: "0.75rem", color: "#b8732a", letterSpacing: "0.3em", textTransform: "uppercase" }}>
              О нас
            </span>
          </div>
          <h1 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: "#f5e6c8", lineHeight: 1.1 }}>
            Пивоварня,<br /><em style={{ color: "#d4a428" }}>рождённая из страсти</em>
          </h1>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="mb-6 leading-relaxed" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.2rem", color: "#c8b99a" }}>
              Пивоварня «Савицкий и сыновья» была основана в 1887 году Ильёй Савицким,
              который обучался пивоварному делу в Мюнхене у мастеров баварских пивоварен.
              Вернувшись на родину, он привёз не только рецепты, но и немецкий дух точности и уважения к традициям.
            </p>
            <p className="mb-6 leading-relaxed" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.2rem", color: "#c8b99a" }}>
              Сегодня четвёртое поколение семьи продолжает дело предка,
              соблюдая принципы немецкого закона о чистоте пива Reinheitsgebot:
              только солод, хмель, вода и дрожжи.
            </p>
            <p className="mb-10 leading-relaxed" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.2rem", color: "#c8b99a" }}>
              Мы не гонимся за объёмом — каждая варка контролируется вручную,
              каждый сорт проходит многонедельную выдержку в наших дубовых подвалах.
              Это не производство — это ремесло.
            </p>
            <Link to="/history" className="btn-brew-outline inline-block">
              Читать нашу историю
            </Link>
          </div>

          <div className="relative">
            <img
              src={BREWERY_IMG}
              alt="Пивоварня Савицкий"
              className="w-full object-cover"
              style={{ aspectRatio: "4/5", filter: "sepia(20%) contrast(1.1)" }}
            />
            <div className="absolute -bottom-4 -left-4 p-6 wood-texture border border-amber-800/50">
              <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2.5rem", color: "#d4a428", lineHeight: 1 }}>135+</div>
              <div style={{ fontFamily: "Oswald, sans-serif", fontSize: "0.7rem", color: "#b8732a", letterSpacing: "0.2em", textTransform: "uppercase", marginTop: "0.25rem" }}>лет традиций</div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 px-6 wood-texture">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "#f5e6c8" }}>
              Наши принципы
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "🌾", title: "Только натуральное", text: "Никаких добавок, консервантов или ускорителей. Только четыре ингредиента по заветам Reinheitsgebot." },
              { icon: "⏳", title: "Время нельзя обмануть", text: "Лагеризация от 30 до 90 дней. Мы никогда не торопим процесс — качество важнее скорости." },
              { icon: "🤝", title: "Семейное дело", text: "Четыре поколения Савицких. Каждый мастер обучался у отца, передавая секреты из рук в руки." },
            ].map((v, i) => (
              <div key={i} className="card-brew p-8 text-center">
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{v.icon}</div>
                <h3 className="mb-3" style={{ fontFamily: "Oswald, sans-serif", fontSize: "1rem", color: "#d4a428", letterSpacing: "0.1em", textTransform: "uppercase" }}>{v.title}</h3>
                <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1rem", color: "#c8b99a", lineHeight: 1.6 }}>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 px-6 border-y border-amber-900/30">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: "1887", label: "Год основания" },
            { num: "4", label: "Поколения мастеров" },
            { num: "12", label: "Сортов пива" },
            { num: "50 000", label: "Литров в год" },
          ].map((s, i) => (
            <div key={i}>
              <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem, 5vw, 3rem)", color: "#d4a428", lineHeight: 1 }}>{s.num}</div>
              <div className="mt-2" style={{ fontFamily: "Oswald, sans-serif", fontSize: "0.7rem", color: "#b8732a", textTransform: "uppercase", letterSpacing: "0.2em" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
