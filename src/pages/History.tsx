import Layout from "@/components/Layout";

const MILESTONES = [
  {
    year: "1887",
    title: "Основание",
    text: "Илья Савицкий открывает первую варочную в подвале старого дома после возвращения из Мюнхена. Первая варка — 200 литров тёмного лагера по баварскому рецепту. Соседи называют пиво «немецким чудом».",
  },
  {
    year: "1901",
    title: "Первый погреб",
    text: "Строительство каменного подвала глубиной 6 метров для лагеризации. Постоянная температура +4°C позволяет выдерживать пиво по 60 и более дней. Производство вырастает до 5 000 литров в год.",
  },
  {
    year: "1923",
    title: "Второе поколение",
    text: "Сын Николай принимает управление. Расширяет ассортимент: появляется пшеничный «Вайцен» и сезонный портер. Первые поставки в рестораны города.",
  },
  {
    year: "1941–1945",
    title: "Военные годы",
    text: "Пивоварня переключается на производство кваса и хлебных напитков. Рецепты и оборудование тщательно сохраняются. После победы производство восстановлено за три месяца.",
  },
  {
    year: "1961",
    title: "Третье поколение",
    text: "Внук Владимир модернизирует оборудование, не изменяя рецептурам. Первая бронзовая медаль на всесоюзном конкурсе пивоваров. «Савицкий Дункель» признан лучшим тёмным лагером.",
  },
  {
    year: "1991",
    title: "Сложные времена",
    text: "Распад СССР. Семья сохраняет пивоварню вопреки экономическому кризису, сократив производство до 3 000 литров в год. Качество остаётся неизменным.",
  },
  {
    year: "2003",
    title: "Возрождение",
    text: "Правнук Андрей возвращается в семейное дело. Реставрация исторических подвалов. Открытие дегустационного зала и запуск туристических экскурсий.",
  },
  {
    year: "Сегодня",
    title: "Новая глава",
    text: "12 сортов пива, 50 000 литров в год, международные награды. Но главное — те же рецепты, те же подвалы, те же руки. Традиция живёт.",
  },
];

export default function History() {
  return (
    <Layout>
      {/* HERO */}
      <section className="py-24 px-6 wood-texture border-b border-amber-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="ornament-line mb-6">
            <span style={{ fontFamily: "Oswald, sans-serif", fontSize: "0.75rem", color: "#b8732a", letterSpacing: "0.3em", textTransform: "uppercase" }}>
              Наша история
            </span>
          </div>
          <h1 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: "#f5e6c8", lineHeight: 1.1 }}>
            Четыре поколения,<br /><em style={{ color: "#d4a428" }}>один рецепт чести</em>
          </h1>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px"
              style={{ background: "linear-gradient(180deg, transparent, #b8732a 10%, #b8732a 90%, transparent)" }} />

            {MILESTONES.map((item, i) => (
              <div key={i} className={`relative flex gap-8 mb-14 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                {/* Dot */}
                <div className="absolute left-8 md:left-1/2 top-6 w-4 h-4 rounded-full border-2 -translate-x-1/2"
                  style={{ backgroundColor: "#d4a428", borderColor: "#1a0f00", zIndex: 1 }} />

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />

                {/* Card */}
                <div className="flex-1 ml-16 md:ml-0 md:max-w-[calc(50%-2rem)]">
                  <div className="card-brew p-7">
                    <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2.2rem", color: "#d4a428", lineHeight: 1 }}>
                      {item.year}
                    </div>
                    <div style={{ fontFamily: "Oswald, sans-serif", fontSize: "0.8rem", color: "#b8732a", letterSpacing: "0.2em", textTransform: "uppercase", margin: "0.4rem 0 0.9rem" }}>
                      {item.title}
                    </div>
                    <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.05rem", color: "#c8b99a", lineHeight: 1.7 }}>
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="py-20 px-6 wood-texture">
        <div className="max-w-3xl mx-auto text-center">
          <div className="section-divider mb-10" />
          <blockquote style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(1.3rem, 3vw, 2rem)", color: "#f5e6c8", fontStyle: "italic", lineHeight: 1.5 }}>
            «Пиво — это хлеб в жидком виде. И как хлеб, оно требует времени,
            уважения и честных рук.»
          </blockquote>
          <div className="mt-6" style={{ fontFamily: "Oswald, sans-serif", fontSize: "0.8rem", color: "#b8732a", letterSpacing: "0.2em", textTransform: "uppercase" }}>
            — Илья Савицкий, 1887
          </div>
          <div className="section-divider mt-10" />
        </div>
      </section>
    </Layout>
  );
}
