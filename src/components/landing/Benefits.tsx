import { Target, PenLine, Bell, Brain } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Benefits = () => {
  const { t } = useLanguage();
  
  const benefits = [
    {
      icon: Target,
      title: t("benefits.benefit1Title"),
      description: t("benefits.benefit1Desc"),
    },
    {
      icon: PenLine,
      title: t("benefits.benefit2Title"),
      description: t("benefits.benefit2Desc"),
    },
    {
      icon: Bell,
      title: t("benefits.benefit3Title"),
      description: t("benefits.benefit3Desc"),
    },
    {
      icon: Brain,
      title: t("benefits.benefit4Title"),
      description: t("benefits.benefit4Desc"),
    },
  ];

  return (
    <section id="beneficios" className="py-20 md:py-32 bg-moora-surface">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t("benefits.title")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("benefits.subtitle")}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-6 md:p-8 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;