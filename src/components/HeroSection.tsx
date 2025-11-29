import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBanner}
          alt="जरूरतमंदों की मदद करते हुए"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 z-10 relative py-12 sm:py-16 md:py-20">
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 text-foreground">
            हर ज़रूरतमंद की
            <span className="block mt-2 sm:mt-3 gradient-hero bg-clip-text">
              सेवा में समर्पित
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
            जानवरों को भोजन देना, सड़क किनारे रहने वाले लोगों को खाना और कपड़े प्रदान करना -
            हम हर ज़रूरतमंद की मदद के लिए प्रतिबद्ध हैं।
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("donate")}
              className="gradient-hero shadow-warm text-base sm:text-lg font-semibold group w-full sm:w-auto"
            >
              दान करें
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("about")}
              className="text-base sm:text-lg font-semibold border-2 w-full sm:w-auto"
            >
              हमारे बारे में जानें
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border">
            <div>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">5000+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">जानवरों को भोजन</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">3000+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">लोगों की मदद</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">500+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">स्वयंसेवक</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
