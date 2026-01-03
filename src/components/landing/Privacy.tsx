import { Shield, EyeOff, Lock, Download } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Privacy = () => {
  const { t } = useLanguage();
  
  const privacyPoints = [
    {
      icon: Lock,
      title: t('privacy.secure'),
      description: t('privacy.secureDesc'),
    },
    {
      icon: EyeOff,
      title: t('privacy.private'),
      description: t('privacy.privateDesc'),
    },
    {
      icon: Shield,
      title: t('privacy.ai'),
      description: t('privacy.aiDesc'),
    },
    {
      icon: Download,
      title: t('privacy.control'),
      description: t('privacy.controlDesc'),
    },
  ];
  
  return (
    <section id="privacidad" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              {t('privacy.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              {t('privacy.subtitle')}
            </p>
          </div>

          {/* Privacy Points Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {privacyPoints.map((point, index) => (
              <div
                key={index}
                className="flex gap-4 p-5 bg-card rounded-xl border border-border"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <point.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {point.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {point.description}
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

export default Privacy;