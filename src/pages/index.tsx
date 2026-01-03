import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Audience from "@/components/landing/Audience";
import HowItWorks from "@/components/landing/HowItWorks";
import Features from "@/components/landing/Features";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Audience />
      <HowItWorks />
      <Features />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;