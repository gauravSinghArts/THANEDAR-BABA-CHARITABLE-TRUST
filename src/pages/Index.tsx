import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CausesSection from "@/components/CausesSection";
import DonationSection from "@/components/DonationSection";
import ShopSection from "@/components/ShopSection";
import CertificateSection from "@/components/CertificateSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <CausesSection />
      <DonationSection />
      <ShopSection />
      <CertificateSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
