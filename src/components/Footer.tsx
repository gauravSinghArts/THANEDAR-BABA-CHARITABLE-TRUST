import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src="/src/assets/logo.png" alt="Logo" className="h-16 w-16 object-contain" />
            </div>
            <p className="text-background/80 mb-4">
              जानवरों और ज़रूरतमंद लोगों की सेवा में समर्पित एक पंजीकृत NGO।
              हम हर दिन सैकड़ों जीवन को छू रहे हैं।
            </p>
            <p className="text-sm text-background/70">
              पंजीकरण संख्या: NGO/2023/IND/12345
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">त्वरित लिंक</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-background/80 hover:text-primary transition-smooth"
                >
                  हमारे बारे में
                </a>
              </li>
              <li>
                <a
                  href="#causes"
                  className="text-background/80 hover:text-primary transition-smooth"
                >
                  हमारे कार्य
                </a>
              </li>
              <li>
                <a
                  href="#donate"
                  className="text-background/80 hover:text-primary transition-smooth"
                >
                  दान करें
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-background/80 hover:text-primary transition-smooth"
                >
                  संपर्क करें
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-4">कानूनी</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-background/80 hover:text-primary transition-smooth"
                >
                  गोपनीयता नीति
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-background/80 hover:text-primary transition-smooth"
                >
                  नियम और शर्तें
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-background/80 hover:text-primary transition-smooth"
                >
                  रिफंड नीति
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/80">
            © {currentYear} THANEDAR BABA CHARITABLE TRUST. सर्वाधिकार सुरक्षित.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
