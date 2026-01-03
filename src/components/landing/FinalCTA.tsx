import AppStoreBadge from "./AppStoreBadge";
import { useLanguage } from "@/contexts/LanguageContext";

const FinalCTA = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* App Icon */}
          <div className="w-32 h-32 rounded-[2rem] bg-primary/10 flex items-center justify-center mx-auto mb-8 shadow-lg p-2">
            <img 
              src="/Moora-Transparent.png" 
              alt="Moora" 
              className="w-full h-full object-contain scale-150"
            />
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('finalCta.title')}
          </h2>

          {/* Subheadline */}
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            {t('finalCta.subtitle')}
          </p>

          {/* CTA */}
          <div className="flex justify-center">
            <AppStoreBadge className="scale-110" />
          </div>

          {/* Trust */}
          <p className="text-sm text-muted-foreground mt-6">
            {t('finalCta.available')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;