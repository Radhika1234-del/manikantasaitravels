import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get in touch with us for bookings, inquiries, or any assistance. 
            We're here to make your travel experience smooth and comfortable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="text-center shadow-soft hover:shadow-medium transition-all duration-300">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Phone
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Call us for immediate assistance
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open("tel:+919542455552")}
                className="w-full"
              >
                9542455552
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center shadow-soft hover:shadow-medium transition-all duration-300">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Email
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Send us your queries
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open("mailto:srimanikantasaitravels346@gmail.com")}
                className="w-full text-xs"
              >
                srimanikantasaitravels346@gmail.com
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center shadow-soft hover:shadow-medium transition-all duration-300">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Location
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Visit our office
              </p>
              <div className="text-sm text-foreground">
                Chenchupet, Tenali<br />
                Guntur District
              </div>
            </CardContent>
          </Card>

          <Card className="text-center shadow-soft hover:shadow-medium transition-all duration-300">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Availability
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                We're here for you
              </p>
              <div className="text-sm text-foreground">
                24/7 Service<br />
                Available
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Contact Actions */}
        <div className="bg-card-gradient rounded-lg p-8 shadow-soft text-center">
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Quick Contact
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Need immediate assistance? Choose your preferred way to reach us and we'll respond promptly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => window.open("tel:+919542455552")}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
            <Button
              onClick={() => window.open("https://wa.me/919542455552?text=Hi,%20I%20would%20like%20to%20inquire%20about%20your%20car%20rental%20services.")}
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </Button>
            <Button
              onClick={() => window.open("mailto:srimanikantasaitravels346@gmail.com?subject=Car%20Rental%20Inquiry")}
              size="lg"
              variant="outline"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </Button>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 text-center">
          <div className="grid md:grid-cols-3 gap-6 text-sm text-muted-foreground">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Service Areas</h4>
              <p>Tenali, Guntur, Vijayawada, Amaravati, and all over Andhra Pradesh</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Response Time</h4>
              <p>We respond to all inquiries within 30 minutes during business hours</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Languages</h4>
              <p>Telugu, Hindi, and English support available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;