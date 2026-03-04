import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const NAV_LINKS = [
  { label: "О нас", href: "/about" },
  { label: "История", href: "/history" },
  { label: "Продукция", href: "/products" },
  { label: "Производство", href: "/process" },
  { label: "Блог", href: "/blog" },
  { label: "Контакты", href: "/contacts" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#1a0f00", color: "#f5e6c8" }}>
      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-50 wood-texture border-b border-amber-900/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <span style={{ color: "#d4a428", fontFamily: "UnifrakturMaguntia, cursive", fontSize: "1.6rem" }}>
              Савицкий
            </span>
            <span style={{ color: "#b8732a", fontFamily: "Oswald, sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              и сыновья
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map(link => (
              <Link
                key={link.href}
                to={link.href}
                className="nav-link"
                style={location.pathname === link.href ? { color: "#d4a428" } : {}}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link to="/tour" className="hidden md:block btn-brew text-sm">
            Заказать экскурсию
          </Link>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden wood-texture border-t border-amber-900/30 px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map(link => (
              <Link
                key={link.href}
                to={link.href}
                className="nav-link text-left"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/tour" className="btn-brew mt-2 text-center" onClick={() => setMenuOpen(false)}>
              Заказать экскурсию
            </Link>
          </div>
        )}
      </nav>

      {/* PAGE CONTENT */}
      <main className="pt-[73px]">{children}</main>

      {/* FOOTER */}
      <footer className="wood-texture border-t border-amber-900/40 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <Link to="/">
              <div style={{ fontFamily: "UnifrakturMaguntia, cursive", fontSize: "2.5rem", color: "#d4a428", textShadow: "0 0 20px rgba(212,164,40,0.3)" }}>
                Савицкий и сыновья
              </div>
            </Link>
            <div style={{ fontFamily: "Oswald, sans-serif", fontSize: "0.7rem", color: "#b8732a", letterSpacing: "0.3em", textTransform: "uppercase", marginTop: "0.5rem" }}>
              Пивоварня · с 1887 года
            </div>
          </div>

          <div className="section-divider mb-8" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-6 justify-center">
              {NAV_LINKS.map(link => (
                <Link key={link.href} to={link.href} className="nav-link" style={{ fontSize: "0.75rem" }}>
                  {link.label}
                </Link>
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
