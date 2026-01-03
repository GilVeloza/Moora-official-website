import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import AppStoreBadge from "./AppStoreBadge";
import { LanguageSelector } from "@/components/LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#para-quien", label: t("nav.audience") },
    { href: "#como-funciona", label: t("nav.howItWorks") },
    { href: "#caracteristicas", label: t("nav.features") },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-1.5">
            <img src="/Moora-Transparent.png" alt="Moora" className="h-12 w-auto" />
            <span className="font-bold text-xl text-foreground">Moora</span>
          </a>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            <LanguageSelector />
          </div>

          {/* Right side - CTA */}
          <div className="hidden md:flex items-center">
            <AppStoreBadge className="scale-90" />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-lg">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors px-4 py-2"
                >
                  {link.label}
                </a>
              ))}
              <div className="px-4 pt-2 border-t border-border">
                <LanguageSelector />
              </div>
              <div className="px-4 pt-2">
                <AppStoreBadge className="w-full justify-center" />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;