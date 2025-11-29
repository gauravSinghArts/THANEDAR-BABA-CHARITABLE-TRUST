import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Swal from "sweetalert2";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // Using FormSubmit with proper form submission
      const response = await fetch("https://formsubmit.co/Thaanedaarbabacharitabletrust@gmail.com", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "संदेश भेजा गया!",
          text: "हम जल्द ही आपसे संपर्क करेंगे। धन्यवाद!",
          confirmButtonText: "ठीक है",
          confirmButtonColor: "#22c55e",
        });
        form.reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: "error",
        title: "त्रुटि",
        text: "संदेश भेजने में समस्या हुई। कृपया फिर से प्रयास करें।",
        confirmButtonText: "ठीक है",
        confirmButtonColor: "#ef4444",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            संपर्क करें
          </h2>
          <p className="text-lg text-muted-foreground">
            हमसे जुड़ें और हमारे कार्यों का हिस्सा बनें
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card rounded-2xl shadow-warm p-8">
            <h3 className="text-2xl font-bold mb-6 text-foreground">
              संदेश भेजें
            </h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Hidden FormSubmit Configuration */}
              <input type="hidden" name="_subject" value="New Contact Form - THANEDAR BABA CHARITABLE TRUST" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />

              <div>
                <Label htmlFor="name">नाम *</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="आपका नाम"
                  className="mt-2"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email">ईमेल *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  className="mt-2"
                  required
                />
              </div>

              <div>
                <Label htmlFor="phone">फ़ोन नंबर</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+91 1234567890"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="message">संदेश *</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="अपना संदेश यहाँ लिखें..."
                  className="mt-2 min-h-[120px]"
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full gradient-hero shadow-warm font-semibold"
              >
                {isSubmitting ? "भेजा जा रहा है..." : "संदेश भेजें"}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-card rounded-2xl shadow-warm p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                संपर्क जानकारी
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 gradient-hero rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">फ़ोन</div>
                    <a
                      href="tel:+918290977760"
                      className="text-muted-foreground hover:text-primary transition-smooth"
                    >
                      +91 82909 77760
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 gradient-hero rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">ईमेल</div>
                    <a
                      href="mailto:Thaanedaarbabacharitabletrust@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-smooth"
                    >
                      Thaanedaarbabacharitabletrust@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 gradient-hero rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">पता</div>
                    <p className="text-muted-foreground">
                      123, सेवा भवन, एमजी रोड <br />
                      नई दिल्ली - 110001, भारत
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="bg-card rounded-2xl shadow-warm p-8">
            <h3 className="text-xl font-bold mb-4 text-foreground">
              हमसे जुड़ें
            </h3>
            <div className="flex gap-4">
              {/* <a
                  href="#"
                  className="w-12 h-12 gradient-hero rounded-full flex items-center justify-center hover:shadow-warm transition-smooth"
                >
                  <Facebook className="h-6 w-6 text-white" />
                </a> */}
              <a target="_blank"
                href="https://www.instagram.com/thaanedaarbabacharitabletrust?igsh=eWQzcDUyZnlzM202"
                className="w-12 h-12 gradient-hero rounded-full flex items-center justify-center hover:shadow-warm transition-smooth"
              >
                <Instagram className="h-6 w-6 text-white" />
              </a>
              {/* <a
                  href="#"
                  className="w-12 h-12 gradient-hero rounded-full flex items-center justify-center hover:shadow-warm transition-smooth"
                >
                  <Youtube className="h-6 w-6 text-white" />
                </a> */}
              <a
                href="https://wa.me/918290977760"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 gradient-hero rounded-full flex items-center justify-center hover:shadow-warm transition-smooth"
              >
                <MessageCircle className="h-6 w-6 text-white" />
              </a>
            </div>
          </div>

          {/* Volunteer CTA */}
          <div className="gradient-hero rounded-2xl shadow-warm p-8 text-white">
            <h3 className="text-2xl font-bold mb-3">स्वयंसेवक बनें</h3>
            <p className="mb-4 opacity-90">
              अपना समय देकर हमारे कार्यों में शामिल हों
            </p>
            <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLScXtzrHWuT_5HUTUKk5396RziyFHSdSgmwvk3VDVo0CI6F0Gg/viewform?usp=publish-editor">
              <Button
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90 font-semibold"
              >
                अभी जुड़ें
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
