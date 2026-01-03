import {
  BarChart3,
  Sun,
  Moon,
  FileText,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Features = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: BarChart3,
      title: t('features.feature1'),
      description: t('features.feature1Desc'),
    },
    {
      icon: Sun,
      title: t('features.feature2'),
      description: t('features.feature2Desc'),
    },
    {
      icon: Moon,
      title: t('features.feature3'),
      description: t('features.feature3Desc'),
    },
    {
      icon: FileText,
      title: t('features.feature4'),
      description: t('features.feature4Desc'),
    },
  ];
  
  return (
    <section id="caracteristicas" className="py-20 md:py-32 bg-moora-surface">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t('features.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('features.subtitle')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-5 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all group"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1.5">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;