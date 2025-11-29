import { Award, CheckCircle2, Shield } from "lucide-react";
import ngoCertificate from "@/assets/ngo-certificate.jpg";

const CertificateSection = () => {
  const certifications = [
    {
      icon: Award,
      title: "80G प्रमाणित",
      description: "कर में छूट के लिए पंजीकृत",
    },
    {
      icon: Shield,
      title: "सरकारी मान्यता",
      description: "भारत सरकार द्वारा अनुमोदित",
    },
    {
      icon: CheckCircle2,
      title: "पारदर्शी",
      description: "नियमित ऑडिट और रिपोर्ट",
    },
  ];

  return (
    <section id="certificates" className="py-20 gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            हमारी मान्यता
          </h2>
          <p className="text-lg text-muted-foreground">
            एक पंजीकृत और प्रमाणित NGO - आप पर विश्वास करें
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Certificate Image */}
          <div className="w-full lg:w-1/2">
            <div className="bg-card rounded-2xl shadow-warm overflow-hidden">
              <img
                src={ngoCertificate}
                alt="NGO प्रमाणपत्र"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-start bg-card p-6 rounded-xl shadow-warm"
                >
                  <div className="w-12 h-12 gradient-hero rounded-full flex items-center justify-center flex-shrink-0">
                    <cert.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">
                      {cert.title}
                    </h3>
                    <p className="text-muted-foreground">{cert.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-primary/10 border border-primary/20 rounded-xl">
              <h4 className="font-bold text-lg mb-3 text-foreground">
                80G पंजीकरण विवरण
              </h4>
              <div className="space-y-2 text-sm">
                <p className="text-foreground">
                  <span className="font-semibold">संगठन:</span> Thanedar Baba Charitable Trust
                </p>
                <p className="text-foreground">
                  <span className="font-semibold">PAN:</span> AADTT1589L
                </p>
                <p className="text-foreground">
                  <span className="font-semibold">पंजीकरण संख्या:</span> AADTT1589LF20186
                </p>
                <p className="text-foreground">
                  <span className="font-semibold">दस्तावेज़ पहचान संख्या:</span> AADTT1589LF2018601
                </p>
                <p className="text-foreground">
                  <span className="font-semibold">स्वीकृति तिथि:</span> 24-09-2021
                </p>
                <p className="text-foreground">
                  <span className="font-semibold">वैधता अवधि:</span> AY 2022-23 to AY 2026-27
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-primary/20">
                <p className="text-xs text-muted-foreground">
                  <strong>पता:</strong> 2470, Yadav Bhawan, Telipada, Jaipur, Rajasthan - 302003
                </p>
              </div>
              <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-sm text-green-800 font-semibold">
                  ✅ आपका दान 80G के तहत कर में छूट के लिए योग्य है
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;
