import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const HERO_IMG = "https://cdn.poehali.dev/projects/3e50802e-b2fc-4a68-815e-d0c6f1dc034f/files/e5a2eb6f-fd83-418c-aad9-009f34718da1.jpg";

const STEPS = [
  {
    num: "01",
    title: "Отбор солода",
    desc: "Используем только отборный баварский солод двух- и шестирядного ячменя с проверенных мельниц Германии. Каждая партия проходит визуальный и лабораторный контроль нашими мастерами.",
    detail: "Влажность зерна: 4–5% · Экстрактивность: не менее 80%",
    icon: "🌾",
  },
  {
    num: "02",
    title: "Дробление",
    desc: "Ручная настройка вальцовой мельницы под каждый рецепт. Помол должен вскрыть оболочку, не разрушив её — она станет фильтром при лаутерировании.",
    detail: "Размер помола: 0.3–1.2 мм",
    icon: "⚙️",
  },
  {
    num: "03",
    title: "Затирание",
    desc: "Строгий контроль температуры на каждом этапе. Традиционное многоступенчатое инфузионное затирание в медном котле с двойным дном. Паузы от 50°C до 78°C.",
    detail: "Продолжительность: 90–120 минут",
    icon: "🌡️",
  },
  {
    num: "04",
    title: "Лаутерирование",
    desc: "Медленное отделение сусла от дробины через пластовый фильтр. Никакой спешки — чистое сусло получается только терпением и аккуратностью.",
    detail: "Скорость: 1–1.5 л/мин на литр затора",
    icon: "🔽",
  },
  {
    num: "05",
    title: "Варка и хмелевание",
    desc: "90-минутная кипящая варка с добавлением хмеля в три этапа: горевой за 60 мин до конца, ароматный за 15 мин, финальный в вирпуле. Используем немецкий хмель Hallertau и Tettnang.",
    detail: "Температура кипения: 100°C · Выпаривание: 8–10%",
    icon: "🍃",
  },
  {
    num: "06",
    title: "Охлаждение",
    desc: "Быстрое охлаждение до температуры внесения дрожжей через пластинчатый теплообменник. Скорость критична — это защита от заражения и потери аромата.",
    detail: "От 100°C до 8°C за 25 минут",
    icon: "❄️",
  },
  {
    num: "07",
    title: "Брожение",
    desc: "Низовое брожение в закрытых конических чанах объёмом 1 500 литров при строгих +4°C. 21 день — и только потом переходим к следующему этапу.",
    detail: "Температура: +4°C · Срок: 21 день",
    icon: "🧫",
  },
  {
    num: "08",
    title: "Лагеризация",
    desc: "Дозревание в дубовых подвалах от 30 до 90 дней в зависимости от сорта. Пиво обретает характер, глубину и зрелость. Именно здесь рождается вкус.",
    detail: "Температура: 0°C · Срок: 30–90 дней",
    icon: "🪵",
  },
  {
    num: "09",
    title: "Контроль и розлив",
    desc: "Ручной контроль каждой партии: органолептика, микробиология, лабораторный анализ. Только прошедшее все проверки пиво допускается к розливу. Минимальная фильтрация для сохранения живого вкуса.",
    detail: "Давление розлива: 1.8–2.2 бар",
    icon: "✅",
  },
];

export default function Process() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative py-40 px-6 overflow-hidden">
        <img src={HERO_IMG} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="ornament-line mb-6">
            <span style={{ fontFamily: "Oswald, sans-serif", fontSize: "0.75rem", color: "#b8732a", letterSpacing: "0.3em", textTransform: "uppercase" }}>
              Процесс производства
            </span>
          </div>
          <h1 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: "#f5e6c8", lineHeight: 1.1 }}>
            Искусство варки,<br /><em style={{ color: "#d4a428" }}>проверенное веками</em>
          </h1>
          <p className="mt-6 max-w-xl mx-auto" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.15rem", color: "#e8d5b0", fontStyle: "italic" }}>
            Девять шагов. Несколько месяцев. Одна цель — идеальное пиво.
          </p>
        </div>
      </section>

      {/* STEPS */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          {STEPS.map((step, i) => (
            <div key={i} className={`flex gap-8 mb-12 ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} flex-col`}>
              {/* Number */}
              <div className="flex-shrink-0 flex items-start">
                <div className="w-20 h-20 flex items-center justify-center border border-amber-800/40"
                  style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2rem", color: "rgba(212,164,40,0.6)" }}>
                  {step.num}
                </div>
              </div>
              {/* Content */}
              <div className="card-brew p-7 flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span style={{ fontSize: "1.5rem" }}>{step.icon}</span>
                  <h3 style={{ fontFamily: "Oswald, sans-serif", fontSize: "1.1rem", color: "#d4a428", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    {step.title}
                  </h3>
                </div>
                <p className="mb-4" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.05rem", color: "#c8b99a", lineHeight: 1.7 }}>
                  {step.desc}
                </p>
                <div className="border-t border-amber-900/30 pt-3">
                  <span style={{ fontFamily: "Oswald, sans-serif", fontSize: "0.7rem", color: "#b8732a", letterSpacing: "0.15em" }}>
                    {step.detail}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* REINHEITSGEBOT */}
      <section className="py-20 px-6 wood-texture">
        <div className="max-w-3xl mx-auto text-center">
          <div
            style={{ fontFamily: "UnifrakturMaguntia, cursive", fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "#d4a428", marginBottom: "1rem" }}>
            Reinheitsgebot
          </div>
          <div style={{ fontFamily: "Oswald, sans-serif", fontSize: "0.75rem", color: "#b8732a", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
            Баварский закон о чистоте пива · 1516 год
          </div>
          <div className="section-divider mb-8" />
          <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.2rem", color: "#c8b99a", fontStyle: "italic", lineHeight: 1.8 }}>
            «Пиво должно состоять исключительно из ячменного солода, хмеля и воды.
            Никаких иных ингредиентов использоваться не должно.»
          </p>
          <div className="section-divider mt-8 mb-10" />
          <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1rem", color: "#8a7a60" }}>
            Мы следуем этому закону вот уже 135 лет. Это не ограничение — это свобода.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="mb-4" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2.5rem", color: "#f5e6c8" }}>
            Увидеть своими глазами
          </h2>
          <p className="mb-8" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.15rem", color: "#c8b99a", fontStyle: "italic" }}>
            Запишитесь на экскурсию и пройдите весь путь от зерна до бокала.
          </p>
          <Link to="/tour" className="btn-brew inline-block">
            Забронировать экскурсию
          </Link>
        </div>
      </section>
    </Layout>
  );
}
