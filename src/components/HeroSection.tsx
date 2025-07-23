import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative bg-hero-gradient text-primary-foreground py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Sri Manikanta Sai Travels
          </h1>
          <p className="text-xl md:text-2xl mb-4 opacity-90">
            Professional Car Rental Services in Tenali, Guntur
          </p>
          <p className="text-lg md:text-xl mb-8 opacity-80">
            Chauffeur-driven cars for hourly, daily, and long-distance travel
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={() => scrollToSection("booking")}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3"
            >
              Book Now
            </Button>
            <Button 
              onClick={() => window.open("tel:+919542455552")}
              variant="outline"
              size="lg"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-3"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: 9542455552
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 text-primary-foreground/90">
              <MapPin className="w-6 h-6" />
              <div className="text-left">
                <p className="font-semibold">Location</p>
                <p className="text-sm">Chenchupet, Tenali, Guntur</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3 text-primary-foreground/90">
              <Phone className="w-6 h-6" />
              <div className="text-left">
                <p className="font-semibold">Phone</p>
                <p className="text-sm">9542455552</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3 text-primary-foreground/90">
              <Mail className="w-6 h-6" />
              <div className="text-left">
                <p className="font-semibold">Email</p>
                <p className="text-sm">srimanikantasaitravels346@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;