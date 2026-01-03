import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "es" | "pt";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("moora-language");
    return (saved as Language) || "es";
  });

  useEffect(() => {
    localStorage.setItem("moora-language", language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    const keys = key.split(".");
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const translations = {
  en: {
    nav: {
      benefits: "Benefits",
      howItWorks: "How it works",
      features: "Features",
      privacy: "Privacy",
      download: "Download",
      audience: "Who is it for"
    },
    hero: {
      badge: "Beta",
      title: "Turn your goals",
      titleHighlight: "into reality",
      subtitle: "Your daily journaling and goal tracking space with AI. Reflect, progress, and achieve what you set out to do.",
      cta: "See how it works",
      availableFor: "Available for iPhone",
      goalCompleted: "Goal completed",
      dailyExercise: "Daily exercise",
      journaling: "Journaling",
      morningReflection: "Morning reflection"
    },
    benefits: {
      title: "What is Moora?",
      subtitle: "Your daily companion to achieve what you set out to do. Simple, private, and effective.",
      benefit1Title: "Set clear goals",
      benefit1Desc: "Define short, medium, and long-term objectives. Visualize your progress simply and motivatingly.",
      benefit2Title: "Reflect every day",
      benefit2Desc: "Write about your progress, emotions, and learnings. Journaling helps you maintain focus.",
      benefit3Title: "Stay focused",
      benefit3Desc: "Smart reminders and morning and evening check-ins so you never lose sight of your goals.",
      benefit4Title: "Understand your patterns",
      benefit4Desc: "AI analyzes your reflections and shows you insights about your progress and areas for improvement."
    },
    howItWorks: {
      title: "How it works",
      subtitle: "Simple steps to transform your daily routine",
      step1Title: "Write or speak",
      step1Desc: "Capture your thoughts, feelings, and goals through text or voice. Moora transcribes and organizes everything for you.",
      step2Title: "Reflect and learn",
      step2Desc: "Moora analyzes your patterns with AI and offers you personalized insights to help you stay on track.",
      step3Title: "Track your progress",
      step3Desc: "See your evolution with interactive metrics and graphs. Celebrate your achievements and stay motivated.",
      step4Title: "Achieve your goals",
      step4Desc: "Stay focused and motivated with daily reminders and AI-powered insights to reach your objectives."
    },
    features: {
      title: "Everything you need",
      subtitle: "to achieve your goals",
      feature1: "Daily journaling with text, photos, and audio",
      feature1Desc: "Express yourself freely using text, photos, or voice recordings in your daily journal.",
      feature2: "AI-powered personalized insights",
      feature2Desc: "Get intelligent analysis of your patterns and personalized recommendations.",
      feature3: "Goal tracking with visual metrics",
      feature3Desc: "Monitor your progress with interactive charts and visual indicators.",
      feature4: "Secure cloud sync across all your devices",
      feature4Desc: "Access your journal from anywhere with automatic and secure cloud synchronization.",
      feature5: "Photos and voice recordings",
      feature5Desc: "Enrich your entries with images and audio recordings for more complete memories.",
      feature6: "100% private and encrypted",
      feature6Desc: "Your data is protected with end-to-end encryption and belongs only to you.",
      feature7: "Smart reminders",
      feature7Desc: "Customizable notifications to maintain your journaling and goal tracking routine."
    },
    privacy: {
      title: "Your privacy matters",
      subtitle: "Your data belongs to you. We use end-to-end encryption and never share your personal information with third parties.",
      secure: "Secure",
      secureDesc: "End-to-end encryption for all your data",
      private: "Private",
      privateDesc: "We don't sell or share your personal information",
      control: "You control",
      controlDesc: "Export or delete your data anytime",
      ai: "AI without training",
      aiDesc: "OpenAI does not use your data to train their models"
    },
    audience: {
      title: "Who is Moora for?",
      subtitle: "No matter your age or situation, Moora helps you keep focus and momentum on what truly matters to you."
    },
    finalCta: {
      title: "Start your journey today",
      subtitle: "Download Moora for free and begin your journey toward your goals. Your best version is waiting.",
      available: "Available for iPhone"
    },
    footer: {
      privacyPolicy: "Privacy Policy",
      contact: "Contact",
      rights: "All rights reserved."
    }
  },
  es: {
    nav: {
      benefits: "Beneficios",
      howItWorks: "Cómo funciona",
      features: "Características",
      privacy: "Privacidad",
      download: "Descargar",
      audience: "¿Para quién?"
    },
    hero: {
      badge: "Beta",
      title: "Convierte tus metas",
      titleHighlight: "en realidad",
      subtitle: "Tu espacio diario de journaling y seguimiento de objetivos con IA. Reflexiona, progresa y alcanza lo que te propones.",
      cta: "Ver cómo funciona",
      availableFor: "Disponible para iPhone",
      goalCompleted: "Meta completada",
      dailyExercise: "Ejercicio diario",
      journaling: "Journaling",
      morningReflection: "Reflexión matutina"
    },
    benefits: {
      title: "¿Qué es Moora?",
      subtitle: "Tu compañero diario para lograr lo que te propones. Simple, privado y efectivo.",
      benefit1Title: "Establece metas claras",
      benefit1Desc: "Define objetivos a corto, mediano y largo plazo. Visualiza tu progreso de forma simple y motivadora.",
      benefit2Title: "Reflexiona cada día",
      benefit2Desc: "Escribe sobre tu progreso, tus emociones y aprendizajes. El journaling te ayuda a mantener el enfoque.",
      benefit3Title: "Mantén el enfoque",
      benefit3Desc: "Recordatorios inteligentes y check-ins matutinos y nocturnos para que nunca pierdas de vista tus objetivos.",
      benefit4Title: "Comprende tus patrones",
      benefit4Desc: "La IA analiza tus reflexiones y te muestra insights sobre tu progreso y áreas de mejora."
    },
    howItWorks: {
      title: "Cómo funciona",
      subtitle: "Pasos simples para transformar tu rutina diaria",
      step1Title: "Escribe o habla",
      step1Desc: "Captura tus pensamientos, sentimientos y metas mediante texto o voz. Moora transcribe y organiza todo por ti.",
      step2Title: "Reflexiona y aprende",
      step2Desc: "Moora analiza tus patrones con IA y te ofrece insights personalizados para mantenerte en el rumbo.",
      step3Title: "Mide tu progreso",
      step3Desc: "Visualiza tu evolución con métricas y gráficos interactivos. Celebra tus logros y mantente motivado.",
      step4Title: "Alcanza tus metas",
      step4Desc: "Mantén el enfoque y la motivación con recordatorios diarios e insights potenciados por IA para alcanzar tus objetivos."
    },
    features: {
      title: "Todo lo que necesitas",
      subtitle: "para lograr tus objetivos",
      feature1: "Journaling diario con texto, fotos y audio",
      feature1Desc: "Exprésate libremente usando texto, fotos o grabaciones de voz en tu diario diario.",
      feature2: "Insights personalizados con IA",
      feature2Desc: "Obtén análisis inteligente de tus patrones y recomendaciones personalizadas.",
      feature3: "Seguimiento de metas con métricas visuales",
      feature3Desc: "Monitorea tu progreso con gráficos interactivos e indicadores visuales.",
      feature4: "Sincronización segura en la nube en todos tus dispositivos",
      feature4Desc: "Accede a tu diario desde cualquier lugar con sincronización automática y segura en la nube.",
      feature5: "Fotos y grabaciones de voz",
      feature5Desc: "Enriquece tus entradas con imágenes y grabaciones de audio para recuerdos más completos.",
      feature6: "100% privado y encriptado",
      feature6Desc: "Tus datos están protegidos con encriptación de extremo a extremo y pertenecen solo a ti.",
      feature7: "Recordatorios inteligentes",
      feature7Desc: "Notificaciones personalizables para mantener tu rutina de journaling y seguimiento de metas."
    },
    privacy: {
      title: "Tu privacidad importa",
      subtitle: "Tus datos te pertenecen. Usamos encriptación de extremo a extremo y nunca compartimos tu información personal con terceros.",
      secure: "Seguro",
      secureDesc: "Encriptación de extremo a extremo para todos tus datos",
      private: "Privado",
      privateDesc: "No vendemos ni compartimos tu información personal",
      control: "Tú controlas",
      controlDesc: "Exporta o elimina tus datos en cualquier momento",
      ai: "IA sin entrenamiento",
      aiDesc: "OpenAI no usa tus datos para entrenar sus modelos"
    },
    audience: {
      title: "¿Para quién es Moora?",
      subtitle: "Sin importar tu edad o situación, Moora te ayuda a mantener el enfoque y el impulso en lo que realmente te importa."
    },
    finalCta: {
      title: "Comienza tu journey hoy",
      subtitle: "Descarga Moora gratis y comienza tu journey hacia tus objetivos. Tu mejor versión te espera.",
      available: "Disponible para iPhone"
    },
    footer: {
      privacyPolicy: "Política de Privacidad",
      contact: "Contacto",
      rights: "Todos los derechos reservados."
    }
  },
  pt: {
    nav: {
      benefits: "Benefícios",
      howItWorks: "Como funciona",
      features: "Características",
      privacy: "Privacidade",
      download: "Baixar",
      audience: "Para quem é"
    },
    hero: {
      badge: "Beta",
      title: "Transforme suas metas",
      titleHighlight: "em realidade",
      subtitle: "Seu espaço diário de journaling e acompanhamento de objetivos com IA. Reflita, progrida e alcance o que você se propõe.",
      cta: "Ver como funciona",
      availableFor: "Disponível para iPhone",
      goalCompleted: "Meta concluída",
      dailyExercise: "Exercício diário",
      journaling: "Journaling",
      morningReflection: "Reflexão matutina"
    },
    benefits: {
      title: "O que é Moora?",
      subtitle: "Seu companheiro diário para alcançar o que você se propõe. Simples, privado e eficaz.",
      benefit1Title: "Estabeleça metas claras",
      benefit1Desc: "Defina objetivos de curto, médio e longo prazo. Visualize seu progresso de forma simples e motivadora.",
      benefit2Title: "Reflita todos os dias",
      benefit2Desc: "Escreva sobre seu progresso, emoções e aprendizados. O journaling ajuda você a manter o foco.",
      benefit3Title: "Mantenha o foco",
      benefit3Desc: "Lembretes inteligentes e check-ins matinais e noturnos para que você nunca perca de vista seus objetivos.",
      benefit4Title: "Entenda seus padrões",
      benefit4Desc: "A IA analisa suas reflexões e mostra insights sobre seu progresso e áreas de melhoriagrandes objetivos.",
      card3Title: "Voz para texto",
      card3Desc: "Fale seus pensamentos. A transcrição de áudio torna a reflexão mais rápida e natural."
    },
    howItWorks: {
      title: "Como funciona",
      subtitle: "Passos simples para transformar sua rotina diária",
      step1Title: "Escreva ou fale",
      step1Desc: "Capture seus pensamentos, sentimentos e metas através de texto ou voz. Moora transcreve e organiza tudo para você.",
      step2Title: "Reflita e aprenda",
      step2Desc: "Moora analisa seus padrões com IA e oferece insights personalizados para mantê-lo no caminho certo.",
      step3Title: "Acompanhe seu progresso",
      step3Desc: "Visualize sua evolução com métricas e gráficos interativos. Comemore suas conquistas e mantenha-se motivado.",
      step4Title: "Alcance seus objetivos",
      step4Desc: "Mantenha o foco e a motivação com lembretes diários e insights potencializados por IA para alcançar seus objetivos."
    },
    features: {
      title: "Tudo o que você precisa",
      subtitle: "para alcançar seus objetivos",
      feature1: "Journaling diário com texto, fotos e áudio",
      feature1Desc: "Expresse-se livremente usando texto, fotos ou gravações de voz em seu diário diário.",
      feature2: "Insights personalizados com IA",
      feature2Desc: "Obtenha análise inteligente de seus padrões e recomendações personalizadas.",
      feature3: "Acompanhamento de metas com métricas visuais",
      feature3Desc: "Monitore seu progresso com gráficos interativos e indicadores visuais.",
      feature4: "Sincronização segura na nuvem em todos os seus dispositivos",
      feature4Desc: "Acesse seu diário de qualquer lugar com sincronização automática e segura na nuvem.",
      feature5: "Fotos e gravações de voz",
      feature5Desc: "Enriqueça suas entradas com imagens e gravações de áudio para memórias mais completas.",
      feature6: "100% privado e criptografado",
      feature6Desc: "Seus dados estão protegidos com criptografia de ponta a ponta e pertencem apenas a você.",
      feature7: "Lembretes inteligentes",
      feature7Desc: "Notificações personalizáveis para manter sua rotina de journaling e acompanhamento de metas."
    },
    privacy: {
      title: "Sua privacidade importa",
      subtitle: "Seus dados pertencem a você. Usamos criptografia de ponta a ponta e nunca compartilhamos suas informações pessoais com terceiros.",
      secure: "Seguro",
      secureDesc: "Criptografia de ponta a ponta para todos os seus dados",
      private: "Privado",
      privateDesc: "Não vendemos ou compartilhamos suas informações pessoais",
      control: "Você controla",
      controlDesc: "Exporte ou exclua seus dados a qualquer momento",
      ai: "IA sem treinamento",
      aiDesc: "OpenAI não usa seus dados para treinar seus modelos"
    },
    audience: {
      title: "Para quem é Moora?",
      subtitle: "Não importa sua idade ou situação, Moora ajuda você a manter o foco e o impulso no que realmente importa para você."
    },
    finalCta: {
      title: "Comece sua jornada hoje",
      subtitle: "Baixe Moora gratuitamente e comece sua jornada em direção aos seus objetivos. Sua melhor versão está esperando.",
      available: "Disponível para iPhone"
    },
    footer: {
      privacyPolicy: "Política de Privacidade",
      contact: "Contato",
      rights: "Todos os direitos reservados."
    }
  }
};
