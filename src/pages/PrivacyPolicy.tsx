import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSelector } from "@/components/LanguageSelector";
import { privacyTranslations } from "@/lib/privacy-translations";

const PrivacyPolicy = () => {
  const { language } = useLanguage();
  const t = privacyTranslations[language];

  const renderContent = () => {
    return t.content.split('\n').map((line, index) => {
      // Headers level 1 (#)
      if (line.startsWith('# ')) {
        return <h2 key={index} className="text-3xl font-bold mt-12 mb-4">{line.substring(2)}</h2>;
      }
      // Headers level 2 (##)
      if (line.startsWith('## ')) {
        return <h3 key={index} className="text-2xl font-semibold mt-8 mb-3">{line.substring(3)}</h3>;
      }
      // Bold text (**text**)
      if (line.includes('**') && !line.includes('[')) {
        const parts = line.split('**');
        return (
          <p key={index} className="mb-4">
            {parts.map((part, i) => i % 2 === 1 ? <strong key={i}>{part}</strong> : part)}
          </p>
        );
      }
      // Links [text](url)
      if (line.includes('[') && line.includes('](')) {
        const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
        const matches = [...line.matchAll(linkRegex)];
        if (matches.length > 0) {
          let result: (string | JSX.Element)[] = [];
          let lastIndex = 0;
          
          matches.forEach((match, i) => {
            result.push(line.substring(lastIndex, match.index));
            result.push(
              <a 
                key={`link-${i}`} 
                href={match[2]} 
                className="text-primary hover:underline" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                {match[1]}
              </a>
            );
            lastIndex = (match.index || 0) + match[0].length;
          });
          
          result.push(line.substring(lastIndex));
          
          return <p key={index} className="mb-4">{result}</p>;
        }
      }
      // List items (-)
      if (line.startsWith('- ')) {
        const content = line.substring(2);
        // Check if list item has bold text
        if (content.includes('**')) {
          const parts = content.split('**');
          return (
            <li key={index} className="ml-6 mb-2">
              {parts.map((part, i) => i % 2 === 1 ? <strong key={i}>{part}</strong> : part)}
            </li>
          );
        }
        return <li key={index} className="ml-6 mb-2">{content}</li>;
      }
      // Horizontal rule (---)
      if (line === '---') {
        return <hr key={index} className="my-8" />;
      }
      // Empty lines
      if (line.trim() === '') {
        return null;
      }
      // Regular paragraphs
      return <p key={index} className="mb-4">{line}</p>;
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-background/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-16">
            <a href="/" className="flex items-center gap-2">
              <img src="/Moora-Transparent.png" alt="Moora" className="h-12 w-auto" />
              <span className="font-bold text-xl text-foreground">Moora</span>
            </a>
            <LanguageSelector />
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <article className="prose prose-slate dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-4">{t.pageTitle}</h1>
          <p className="text-muted-foreground mb-8">
            <strong>{t.lastUpdated}</strong> {t.date}<br />
            <strong>{t.effectiveDate}</strong> {t.date}
          </p>
          
          <hr className="my-8" />
          
          <div className="space-y-2">
            {renderContent()}
          </div>
        </article>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
