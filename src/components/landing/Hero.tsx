import { Button } from "@/components/ui/button";
import IPhoneMockup from "./IphoneMockup";
import AppStoreBadge from "./AppStoreBadge";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-moora-purple-light/50 to-background pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-border text-sm font-medium text-accent-foreground opacity-0 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              {t("hero.badge")}
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight tracking-tight opacity-0 animate-fade-in [animation-delay:100ms]">
              {t("hero.title")}{" "}
              <span className="text-primary">{t("hero.titleHighlight")}</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 opacity-0 animate-fade-in [animation-delay:200ms]">
              {t("hero.subtitle")}
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start opacity-0 animate-fade-in [animation-delay:300ms]">
              <AppStoreBadge />
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 text-base"
                asChild
              >
                <a href="#como-funciona">{t("hero.cta")}</a>
              </Button>
            </div>

            {/* Trust indicator */}
            <p className="text-sm text-muted-foreground opacity-0 animate-fade-in [animation-delay:400ms]">
              {t("hero.availableFor")}
            </p>
          </div>

          {/* iPhone Mockup */}
          <div className="flex justify-center lg:justify-end opacity-0 animate-fade-in-up [animation-delay:300ms]">
            <div className="relative">
              <IPhoneMockup />
              {/* Floating elements */}
              <div className="absolute -left-10 bottom-1/4 p-4 bg-card rounded-2xl shadow-lg border border-border animate-float hidden lg:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-moora-success/20 flex items-center justify-center">
                    <span className="text-moora-success text-lg">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground">{t("hero.goalCompleted")}</p>
                    <p className="text-xs text-muted-foreground">{t("hero.dailyExercise")}</p>
                  </div>
                </div>
              </div>
              <div className="absolute -right-12 top-1/4 p-4 bg-card rounded-2xl shadow-lg border border-border animate-float [animation-delay:2s] hidden lg:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary text-lg">📝</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground">{t("hero.journaling")}</p>
                    <p className="text-xs text-muted-foreground">{t("hero.morningReflection")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;