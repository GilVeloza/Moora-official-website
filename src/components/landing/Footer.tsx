import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/Moora-Transparent.png" alt="Moora" className="h-12" />
            <span className="font-bold text-foreground">
              <span className="text-xl">Moora - </span>
              <span className="text-sm">Journal & Goal Tracker</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <a
              href="/privacy-policy"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('footer.privacyPolicy')}
            </a>
            <span className="text-muted-foreground">•</span>
            <a
              href="/support"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('footer.support')}
            </a>
            <span className="text-muted-foreground">•</span>
            <a
              href="mailto:hello@getmoora.app"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('footer.contact')}
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} Moora. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;