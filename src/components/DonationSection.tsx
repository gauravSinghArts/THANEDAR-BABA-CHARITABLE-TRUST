import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Heart, QrCode } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import QRCode from "qrcode";
import defaultQR from "@/assets/upi-qr-default.png";
import Swal from "sweetalert2";

const DonationSection = () => {
  const [amount, setAmount] = useState("500");
  const [customAmount, setCustomAmount] = useState("");
  const [donationType, setDonationType] = useState("general");
  const [qrCodeUrl, setQrCodeUrl] = useState(defaultQR);
  const [showQR, setShowQR] = useState(false);
  const { toast } = useToast();

  const presetAmounts = ["100", "500", "1000", "5000"];
  const UPI_ID = "merchant524373.augp@aubank";

  // Generate UPI payment link
  const generateUPILink = (amt: string, type: string) => {
    const finalAmount = amt || "0";
    let note = "";

    switch (type) {
      case "animals":
        note = "Donation for Animals - THANEDAR BABA CHARITABLE TRUST";
        break;
      case "people":
        note = "Donation for People - THANEDAR BABA CHARITABLE TRUST";
        break;
      default:
        note = "General Donation - THANEDAR BABA CHARITABLE TRUST";
    }

    return `upi://pay?pa=${UPI_ID}&pn=THANEDAR BABA CHARITABLE TRUST&am=${finalAmount}&cu=INR&tn=${encodeURIComponent(note)}`;
  };

  // Generate QR code when amount or type changes
  useEffect(() => {
    const finalAmount = customAmount || amount;
    if (finalAmount && parseFloat(finalAmount) > 0) {
      const upiLink = generateUPILink(finalAmount, donationType);

      QRCode.toDataURL(upiLink, {
        width: 300,
        margin: 2,
        color: {
          dark: "#000000",
          light: "#FFFFFF",
        },
      })
        .then((url) => {
          setQrCodeUrl(url);
        })
        .catch((err) => {
          console.error("QR Code generation error:", err);
          setQrCodeUrl(defaultQR);
        });
    } else {
      setQrCodeUrl(defaultQR);
    }
  }, [amount, customAmount, donationType]);

  const handleGenerateQR = () => {
    const finalAmount = customAmount || amount;

    if (!finalAmount || parseFloat(finalAmount) <= 0) {
      Swal.fire({
        icon: "warning",
        title: "राशि चुनें",
        text: "कृपया दान की राशि चुनें या दर्ज करें",
        confirmButtonText: "ठीक है",
        confirmButtonColor: "#f97316",
      });
      return;
    }

    setShowQR(true);

    // Send donation details to email
    sendDonationNotification(finalAmount, donationType);
  };

  const sendDonationNotification = async (amt: string, type: string) => {
    const donationTypeText =
      type === "animals" ? "जानवरों के लिए" :
        type === "people" ? "ज़रूरतमंद लोगों के लिए" :
          "सामान्य दान";

    try {
      const response = await fetch("https://formsubmit.co/Thaanedaarbabacharitabletrust@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `🎁 New Donation QR Generated - ₹${amt}`,
          _template: "table",
          amount: `₹${amt}`,
          donation_type: donationTypeText,
          upi_id: UPI_ID,
          time: new Date().toLocaleString('hi-IN'),
          status: "QR Code Generated - Awaiting Payment",
        }),
      });

      if (response.ok) {
        console.log("✅ Email notification sent successfully");
      }
    } catch (error) {
      // Silent fail - email notification is optional
      console.log("Email notification skipped");
    }
  };

  return (
    <section id="donate" className="py-20 gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            दान करें
          </h2>
          <p className="text-lg text-muted-foreground">
            आपकी छोटी सी मदद किसी की ज़िंदगी बदल सकती है
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-card rounded-2xl shadow-warm p-8 md:p-12">
          {!showQR ? (
            <>
              {/* Donation Amount */}
              <div className="mb-8">
                <Label className="text-lg font-semibold mb-4 block">
                  दान राशि चुनें (₹)
                </Label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
                  {presetAmounts.map((preset) => (
                    <button
                      key={preset}
                      onClick={() => {
                        setAmount(preset);
                        setCustomAmount("");
                      }}
                      className={`py-4 px-6 rounded-lg border-2 font-semibold transition-smooth ${amount === preset && !customAmount
                        ? "border-primary bg-primary text-white"
                        : "border-border hover:border-primary"
                        }`}
                    >
                      ₹{preset}
                    </button>
                  ))}
                </div>

                <Input
                  type="number"
                  placeholder="अन्य राशि दर्ज करें"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setAmount("");
                  }}
                  className="text-lg"
                />
              </div>

              {/* Donation Type */}
              <div className="mb-8">
                <Label className="text-lg font-semibold mb-4 block">
                  दान का प्रकार
                </Label>
                <RadioGroup
                  value={donationType}
                  onValueChange={setDonationType}
                  className="space-y-3"
                >
                  <div className="flex items-center space-x-3 p-4 rounded-lg border hover:border-primary transition-smooth">
                    <RadioGroupItem value="general" id="general" />
                    <label htmlFor="general" className="flex-1 cursor-pointer">
                      <div className="font-semibold">सामान्य दान</div>
                      <div className="text-sm text-muted-foreground">
                        जहाँ सबसे ज़्यादा ज़रूरत हो
                      </div>
                    </label>
                  </div>

                  <div className="flex items-center space-x-3 p-4 rounded-lg border hover:border-primary transition-smooth">
                    <RadioGroupItem value="animals" id="animals" />
                    <label htmlFor="animals" className="flex-1 cursor-pointer">
                      <div className="font-semibold">जानवरों के लिए</div>
                      <div className="text-sm text-muted-foreground">
                        भूखे जानवरों को भोजन
                      </div>
                    </label>
                  </div>

                  <div className="flex items-center space-x-3 p-4 rounded-lg border hover:border-primary transition-smooth">
                    <RadioGroupItem value="people" id="people" />
                    <label htmlFor="people" className="flex-1 cursor-pointer">
                      <div className="font-semibold">ज़रूरतमंद लोगों के लिए</div>
                      <div className="text-sm text-muted-foreground">
                        भोजन और कपड़े
                      </div>
                    </label>
                  </div>
                </RadioGroup>
              </div>

              {/* Generate QR Button */}
              <Button
                onClick={handleGenerateQR}
                className="w-full gradient-hero shadow-warm text-lg font-semibold py-6"
              >
                <QrCode className="mr-2 h-5 w-5" />
                ₹{customAmount || amount} के लिए QR कोड बनाएं
              </Button>

              <p className="text-center text-sm text-muted-foreground mt-4">
                आपका दान 100% सुरक्षित है और 80G के तहत कर में छूट योग्य है
              </p>
            </>
          ) : (
            <>
              {/* QR Code Display */}
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  QR कोड स्कैन करें
                </h3>
                <p className="text-muted-foreground mb-6">
                  किसी भी UPI ऐप से स्कैन करें और ₹{customAmount || amount} का भुगतान करें
                </p>

                <div className="bg-white p-6 rounded-xl inline-block mb-6 shadow-lg">
                  <img
                    src={qrCodeUrl}
                    alt="UPI QR Code"
                    className="w-64 h-64 mx-auto"
                  />
                </div>

                <div className="mb-6">
                  <Button
                    onClick={() => {
                      const finalAmount = customAmount || amount;
                      const link = generateUPILink(finalAmount, donationType);
                      window.location.href = link;
                    }}
                    className="w-full gradient-hero shadow-warm text-lg font-semibold py-6"
                  >
                    <QrCode className="mr-2 h-5 w-5" />
                    Pay via UPI App
                  </Button>
                </div>

                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-6">
                  <p className="text-sm font-semibold text-foreground mb-2">
                    UPI ID: {UPI_ID}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    राशि: ₹{customAmount || amount}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    प्रकार: {
                      donationType === "animals" ? "जानवरों के लिए" :
                        donationType === "people" ? "ज़रूरतमंद लोगों के लिए" :
                          "सामान्य दान"
                    }
                  </p>
                </div>

                <div className="space-y-3">
                  <Button
                    onClick={() => setShowQR(false)}
                    variant="outline"
                    className="w-full"
                  >
                    वापस जाएं
                  </Button>

                  {/* <p className="text-xs text-muted-foreground">
                    भुगतान के बाद कृपया स्क्रीनशॉट gaurav89824@gmail.com पर भेजें
                  </p> */}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
