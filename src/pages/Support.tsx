import { useState } from "react";
import { Mail, MessageCircle, Book, AlertCircle, ChevronDown, ChevronUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSelector } from "@/components/LanguageSelector";

const Support = () => {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: t("support.faq1.question"),
      answer: t("support.faq1.answer")
    },
    {
      question: t("support.faq2.question"),
      answer: t("support.faq2.answer")
    },
    {
      question: t("support.faq3.question"),
      answer: t("support.faq3.answer")
    },
    {
      question: t("support.faq4.question"),
      answer: t("support.faq4.answer")
    },
    {
      question: t("support.faq5.question"),
      answer: t("support.faq5.answer")
    },
    {
      question: t("support.faq6.question"),
      answer: t("support.faq6.answer")
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-16 md:h-20">
            <a href="/" className="flex items-center gap-1.5">
              <img src="/Moora-Transparent.png" alt="Moora" className="h-12 w-auto" />
              <span className="font-bold text-xl text-foreground">Moora</span>
            </a>
            <div className="flex items-center gap-4">
              <LanguageSelector />
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            {t("support.title")}
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            {t("support.subtitle")}
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Email Support */}
            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 dark:bg-purple-900/20 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">{t("support.contact.email.title")}</h3>
                  <p className="text-muted-foreground mb-3 text-sm">
                    {t("support.contact.email.description")}
                  </p>
                  <a 
                    href="mailto:support@getmoora.app" 
                    className="text-purple-600 hover:text-purple-700 font-medium text-sm"
                  >
                    support@getmoora.app
                  </a>
                </div>
              </div>
            </div>

            {/* Report Issue */}
            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 dark:bg-blue-900/20 p-3 rounded-lg">
                  <AlertCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">{t("support.contact.issue.title")}</h3>
                  <p className="text-muted-foreground mb-3 text-sm">
                    {t("support.contact.issue.description")}
                  </p>
                  <a 
                    href="mailto:support@getmoora.app?subject=Bug Report" 
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    {t("support.contact.issue.action")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900/20 px-4 py-2 rounded-full mb-4">
              <Book className="w-4 h-4 text-purple-600" />
              <span className="text-purple-600 font-medium text-sm">{t("support.faq.badge")}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("support.faq.title")}</h2>
            <p className="text-muted-foreground">{t("support.faq.subtitle")}</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-accent/50 transition-colors"
                >
                  <span className="font-semibold pr-4">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/10 border border-border rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6">{t("support.requirements.title")}</h2>
            <div className="flex justify-center">
              <div className="max-w-md">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <span className="text-2xl">📱</span>
                  {t("support.requirements.ios.title")}
                </h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• {t("support.requirements.ios.version")}</li>
                  <li>• {t("support.requirements.ios.devices")}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6">{t("support.resources.title")}</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/privacy-policy" 
                className="text-purple-600 hover:text-purple-700 font-medium underline"
              >
                {t("support.resources.privacy")}
              </a>
              <span className="text-muted-foreground">•</span>
              <a 
                href="/" 
                className="text-purple-600 hover:text-purple-700 font-medium underline"
              >
                {t("support.resources.home")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4">
        <div className="container mx-auto max-w-4xl text-center text-muted-foreground text-sm">
          <p>© 2026 Moora. {t("support.footer.rights")}</p>
        </div>
      </footer>
    </main>
  );
};

export default Support;
