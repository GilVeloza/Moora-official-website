import { GraduationCap, Briefcase, Rocket, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Audience = () => {
  const { t } = useLanguage();
  
  const audiences = [
    {
      icon: GraduationCap,
      title: t('audience.students'),
      description: t('audience.studentsDesc'),
    },
    {
      icon: Briefcase,
      title: t('audience.professionals'),
      description: t('audience.professionalsDesc'),
    },
    {
      icon: Rocket,
      title: t('audience.entrepreneurs'),
      description: t('audience.entrepreneursDesc'),
    },
    {
      icon: Heart,
      title: t('audience.anyone'),
      description: t('audience.anyoneDesc'),
    },
  ];
  
  return (
    <section id="para-quien" className="py-20 md:py-32 bg-moora-surface">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t('audience.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('audience.subtitle')}
          </p>
        </div>

        {/* Audience Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="text-center p-6 bg-card rounded-2xl border border-border hover:border-primary/30 transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <audience.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {audience.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Audience;