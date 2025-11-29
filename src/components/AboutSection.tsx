import { Heart, Users, Sparkles } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: "करुणा",
      description: "हर जीवन के प्रति दया और सहानुभूति",
    },
    {
      icon: Users,
      title: "सामुदायिक सेवा",
      description: "समाज के हर वर्ग की सेवा",
    },
    {
      icon: Sparkles,
      title: "पारदर्शिता",
      description: "हर दान का सही उपयोग",
    },
  ];

  return (
    <section id="about" className="py-20 gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            हमारे बारे में
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            सेवा संगठन एक पंजीकृत NGO है जो जानवरों और ज़रूरतमंद लोगों की सेवा में समर्पित है। 
            हम मानते हैं कि हर जीवन मूल्यवान है और सभी को भोजन, कपड़े और देखभाल का अधिकार है।
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-card rounded-2xl shadow-warm p-8 md:p-12 mb-12">
          <h3 className="text-2xl font-bold mb-4 text-primary">हमारा मिशन</h3>
          <p className="text-lg text-foreground leading-relaxed mb-6">
            भूखे जानवरों को भोजन प्रदान करना, सड़क किनारे रहने वाले लोगों को खाना और कपड़े देना, 
            और समाज में एक दयालु और सहायक वातावरण बनाना।
          </p>
          <p className="text-lg text-foreground leading-relaxed">
            हमारा लक्ष्य है कि कोई भी भूखा न सोए और हर जानवर को प्यार और देखभाल मिले।
          </p>
        </div>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 text-center hover:shadow-warm transition-smooth"
            >
              <div className="w-16 h-16 gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                <value.icon className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2 text-foreground">{value.title}</h4>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
