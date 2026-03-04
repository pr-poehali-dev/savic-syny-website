import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Icon from "@/components/ui/icon";

export default function Contacts() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <Layout>
      {/* HERO */}
      <section className="py-24 px-6 wood-texture border-b border-amber-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="ornament-line mb-6">
            <span style={{ fontFamily: "Oswald, sans-serif", fontSize: "0.75rem", color: "#b8732a", letterSpacing: "0.3em", textTransform: "uppercase" }}>
              Контакты
            </span>
          </div>
          <h1 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: "#f5e6c8", lineHeight: 1.1 }}>
            Найдите нас
          </h1>
          <p className="mt-6" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.1rem", color: "#c8b99a", fontStyle: "italic" }}>
            Мы рады ответить на любые вопросы о пиве, экскурсиях и сотрудничестве.
          </p>
        </div>
      </section>

      {/* CONTACTS + FORM */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <h2 className="mb-8" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2rem", color: "#f5e6c8" }}>
              Как с нами связаться
            </h2>

            <div className="flex flex-col gap-6">
              {[
                { icon: "MapPin", title: "Адрес", lines: ["г. Псков, ул. Пивоварская 12", "Исторический центр города", "Остановка «Старый Рынок»"] },
                { icon: "Phone", title: "Телефон", lines: ["+7 (8112) 25-00-00", "Пн–Пт: 9:00–18:00", "Сб: 10:00–16:00"] },
                { icon: "Mail", title: "Email", lines: ["info@savitsky-brew.ru", "Ответим в течение рабочего часа"] },
                { icon: "Clock", title: "Часы работы", lines: ["Пн–Пт: 9:00–18:00", "Сб: 10:00–16:00", "Вс: выходной"] },
              ].map((item, i) => (
                <div key={i} className="flex gap-5 items-start">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center border border-amber-800/40">
                    <Icon name={item.icon as "MapPin" | "Phone" | "Mail" | "Clock"} size={18} style={{ color: "#d4a428" }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: "Oswald, sans-serif", fontSize: "0.7rem", color: "#b8732a", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.4rem" }}>
                      {item.title}
                    </div>
                    {item.lines.map((line, j) => (
                      <div key={j} style={{ fontFamily: "Cormorant Garamond, serif", fontSize: j === 0 ? "1.05rem" : "0.9rem", color: j === 0 ? "#f5e6c8" : "#8a7a60", fontStyle: j > 0 ? "italic" : "normal" }}>
                        {line}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 card-brew">
              <div style={{ fontFamily: "Oswald, sans-serif", fontSize: "0.7rem", color: "#b8732a", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                Экскурсии и дегустации
              </div>
              <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1rem", color: "#c8b99a", lineHeight: 1.6, marginBottom: "1rem" }}>
                Для записи на экскурсию воспользуйтесь специальной формой бронирования.
              </p>
              <Link to="/tour" className="btn-brew-outline inline-block text-sm">
                Заказать экскурсию
              </Link>
            </div>
          </div>

          {/* Form */}
          <div className="card-brew p-8">
            {sent ? (
              <div className="text-center py-12">
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✉️</div>
                <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.8rem", color: "#d4a428", marginBottom: "1rem" }}>
                  Сообщение отправлено!
                </h3>
                <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.05rem", color: "#c8b99a", lineHeight: 1.6 }}>
                  Мы ответим вам в течение рабочего часа.
                </p>
                <button onClick={() => { setSent(false); setName(""); setEmail(""); setMessage(""); }}
                  className="btn-brew-outline mt-8">
                  Написать снова
                </button>
              </div>
            ) : (
              <>
                <h3 className="mb-6" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.6rem", color: "#f5e6c8" }}>
                  Напишите нам
                </h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {[
                    { label: "Ваше имя", value: name, setter: setName, placeholder: "Иван Иванов", type: "text" },
                    { label: "Email", value: email, setter: setEmail, placeholder: "ivan@example.com", type: "email" },
                  ].map((field, i) => (
                    <div key={i}>
                      <label style={{ fontFamily: "Oswald, sans-serif", fontSize: "0.7rem", color: "#b8732a", letterSpacing: "0.2em", textTransform: "uppercase", display: "block", marginBottom: "0.4rem" }}>
                        {field.label}
                      </label>
                      <input
                        required
                        type={field.type}
                        value={field.value}
                        onChange={e => field.setter(e.target.value)}
                        placeholder={field.placeholder}
                        className="w-full px-4 py-3 bg-transparent border border-amber-900/40 focus:outline-none focus:border-amber-500 transition-colors"
                        style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1rem", color: "#f5e6c8" }}
                      />
                    </div>
                  ))}
                  <div>
                    <label style={{ fontFamily: "Oswald, sans-serif", fontSize: "0.7rem", color: "#b8732a", letterSpacing: "0.2em", textTransform: "uppercase", display: "block", marginBottom: "0.4rem" }}>
                      Сообщение
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      placeholder="Ваш вопрос или предложение..."
                      className="w-full px-4 py-3 bg-transparent border border-amber-900/40 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                      style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1rem", color: "#f5e6c8" }}
                    />
                  </div>
                  <button type="submit" className="btn-brew">
                    Отправить сообщение
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
