import { Button } from "@/components/ui/button";
import { PawPrint, Users2 } from "lucide-react";
import animalFood from "@/assets/animal-food.jpg";
import helpingPeople from "@/assets/helping-people.jpg";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const CausesSection = () => {
  const causes = [
    {
      title: "जानवरों को भोजन",
      description:
        "हम रोज़ाना सड़क पर रहने वाले कुत्तों, बिल्लियों और अन्य जानवरों को भोजन प्रदान करते हैं। आपका दान हर दिन सैकड़ों भूखे जानवरों की मदद करता है।",
      image: animalFood,
      icon: PawPrint,
      stats: ["50+ स्थानों पर", "रोज़ाना 200+ जानवर", "100% शुद्ध भोजन"],
    },
    {
      title: "ज़रूरतमंद लोगों की मदद",
      description:
        "सड़क किनारे रहने वाले लोगों, बेघर परिवारों और ज़रूरतमंदों को गर्म भोजन और कपड़े प्रदान करते हैं। आपकी मदद से हम हर दिन सैकड़ों लोगों तक पहुंचते हैं।",
      image: helpingPeople,
      icon: Users2,
      stats: ["30+ शहरों में", "रोज़ाना 300+ लोग", "भोजन और कपड़े"],
    },
  ];

  return (
    <section id="causes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            हमारे कार्य
          </h2>
          <p className="text-lg text-muted-foreground">
            जानें कि आपका दान कैसे ज़रूरतमंदों की ज़िंदगी बदल रहा है
          </p>
        </div>

        <div className="space-y-12">
          {causes.map((cause, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-8 items-center bg-card rounded-2xl overflow-hidden shadow-warm`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <img
                  src={cause.image}
                  alt={cause.title}
                  className="w-full h-[400px] object-cover"
                />
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 p-8 md:p-12">
                <div className="w-16 h-16 gradient-hero rounded-full flex items-center justify-center mb-6">
                  <cause.icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-3xl font-bold mb-4 text-foreground">
                  {cause.title}
                </h3>

                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {cause.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {cause.stats.map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-sm font-semibold text-primary">
                        {stat}
                      </div>
                    </div>
                  ))}
                </div>

                <Button
                  onClick={() => scrollToSection("donate")}
                  className="gradient-hero shadow-warm font-semibold"
                >
                  इस कार्य के लिए दान करें
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CausesSection;
