import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, ExternalLink } from "lucide-react";
import dogFoodImg from "@/assets/dog-food.png";
import catFoodImg from "@/assets/cat-food.png";
import birdFoodImg from "@/assets/bird-food.png";
import medicineImg from "@/assets/animal-medicine.png";
import beddingImg from "@/assets/pet-bedding.png";
import toysImg from "@/assets/pet-toys.png";

const ShopSection = () => {
  const AMAZON_WISHLIST_URL = "https://www.amazon.in/hz/wishlist/ls/3UXB76UCH82NN";

  const products = [
    {
      name: "कुत्तों का भोजन",
      description: "पौष्टिक और स्वादिष्ट डॉग फूड",
      image: dogFoodImg,
      category: "Dog Food"
    },
    {
      name: "बिल्लियों का भोजन",
      description: "ताज़ा और पौष्टिक कैट फूड",
      image: catFoodImg,
      category: "Cat Food"
    },
    {
      name: "पक्षियों का दाना",
      description: "विभिन्न प्रकार के पक्षियों के लिए",
      image: birdFoodImg,
      category: "Bird Food"
    },
    {
      name: "पशु चिकित्सा",
      description: "दवाइयां और प्राथमिक उपचार",
      image: medicineImg,
      category: "Medicine"
    },
    {
      name: "कंबल और बिस्तर",
      description: "आरामदायक और गर्म बिस्तर",
      image: beddingImg,
      category: "Bedding"
    },
    {
      name: "खिलौने और सामान",
      description: "जानवरों के लिए खेल सामग्री",
      image: toysImg,
      category: "Toys"
    }
  ];

  return (
    <section id="shop" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            खरीदें और मदद करें
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            Amazon से सामान खरीदें और सीधे हमारे पते पर भिजवाएं
          </p>
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-6">
            <p className="text-sm text-foreground">
              <Heart className="inline h-4 w-4 text-primary mr-2" />
              आपकी गोपनीयता सुरक्षित है - Amazon आपको हमारा पूरा पता नहीं दिखाता
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl shadow-warm p-6 hover:shadow-xl transition-smooth border border-border overflow-hidden group"
            >
              <div className="relative h-48 mb-4 rounded-xl overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground text-center">
                {product.name}
              </h3>
              <p className="text-muted-foreground text-center mb-4 text-sm">
                {product.description}
              </p>
              <Button
                onClick={() => window.open(AMAZON_WISHLIST_URL, "_blank")}
                className="w-full gradient-hero shadow-warm"
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                Amazon पर खरीदें
              </Button>
            </div>
          ))}
        </div>

        {/* View Full Wishlist Button */}
        <div className="text-center">
          <Button
            onClick={() => window.open(AMAZON_WISHLIST_URL, "_blank")}
            size="lg"
            className="gradient-hero shadow-warm text-lg px-8 py-6"
          >
            <ExternalLink className="mr-2 h-5 w-5" />
            पूरी Wishlist देखें
          </Button>
        </div>

        {/* How it Works */}
        <div className="mt-16 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold mb-6 text-foreground text-center">
            यह कैसे काम करता है?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                1
              </div>
              <h4 className="font-semibold mb-2 text-foreground">सामान चुनें</h4>
              <p className="text-sm text-muted-foreground">
                ऊपर दिए गए किसी भी सामान पर क्लिक करें या पूरी wishlist देखें
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                2
              </div>
              <h4 className="font-semibold mb-2 text-foreground">Amazon पर खरीदें</h4>
              <p className="text-sm text-muted-foreground">
                Amazon पर जाएं, सामान चुनें और "Add to Cart" पर क्लिक करें
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                3
              </div>
              <h4 className="font-semibold mb-2 text-foreground">स्वचालित डिलीवरी</h4>
              <p className="text-sm text-muted-foreground">
                सामान सीधे समर्पण सेवा संगम के पते पर पहुंच जाएगा
              </p>
            </div>
          </div>
        </div>

        {/* Thank You Note */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground italic">
            "आपकी छोटी सी मदद भूखे जानवरों के लिए बड़ा बदलाव ला सकती है। धन्यवाद! 🙏"
          </p>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
