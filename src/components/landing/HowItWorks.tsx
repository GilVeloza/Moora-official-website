import { Target, Edit3, Sparkles, Trophy } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const HowItWorks = () => {
  const { t } = useLanguage();
  
  const steps = [
    {
      number: "01",
      icon: Target,
      title: t('howItWorks.step1Title'),
      description: t('howItWorks.step1Desc'),
    },
    {
      number: "02",
      icon: Edit3,
      title: t('howItWorks.step2Title'),
      description: t('howItWorks.step2Desc'),
    },
    {
      number: "03",
      icon: Sparkles,
      title: t('howItWorks.step3Title'),
      description: t('howItWorks.step3Desc'),
    },
    {
      number: "04",
      icon: Trophy,
      title: t('howItWorks.step4Title'),
      description: t('howItWorks.step4Desc'),
    },
  ];
  
  return (
    <section id="como-funciona" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t('howItWorks.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('howItWorks.subtitle')}
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8 md:gap-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex gap-6 md:gap-8 items-start group"
              >
                {/* Number & Line */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl shrink-0 group-hover:scale-110 transition-transform">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-full min-h-[60px] bg-border mt-4" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-8">
                  <div className="flex items-center gap-3 mb-2">
                    <step.icon className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-semibold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed max-w-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;