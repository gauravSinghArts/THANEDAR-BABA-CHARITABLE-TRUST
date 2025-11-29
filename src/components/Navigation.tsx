import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart } from "lucide-react";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "होम", id: "home" },
    { label: "हमारे बारे में", id: "about" },
    { label: "हमारे कार्य", id: "causes" },
    { label: "दान करें", id: "donate" },
    { label: "खरीदें", id: "shop" },
    { label: "संपर्क करें", id: "contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-[10px]">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-2 font-bold text-xl text-primary hover:opacity-80 transition-smooth"
          >
            <img src={logo} alt="Logo" className="h-auto w-[80px] object-contain" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-smooth font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("donate")}
              className="gradient-hero shadow-warm font-semibold"
            >
              अभी दान करें
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  setIsOpen(false);
                }}
                className="block w-full text-left py-2 text-foreground hover:text-primary transition-smooth font-medium"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => {
                scrollToSection("donate");
                setIsOpen(false);
              }}
              className="w-full gradient-hero shadow-warm font-semibold"
            >
              अभी दान करें
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
