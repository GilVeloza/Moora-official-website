import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/Moora-Transparent.png" alt="Moora" className="h-12" />
            <span className="font-bold text-foreground">
              <span className="text-xl">Moora - </span>
              <span className="text-sm">Journal & Goal Tracker</span>
            </span>
          </div>

          {/* Links - Centered */}
          <div className="flex items-center gap-6 text-sm absolute left-1/2 -translate-x-1/2">
            <a
              href="/privacy-policy"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('footer.privacyPolicy')}
            </a>
            <a
              href="mailto:hello@getmoora.app"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('footer.contact')}
            </a>
            <a
              href="/support"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('footer.support')}
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} Moora. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;