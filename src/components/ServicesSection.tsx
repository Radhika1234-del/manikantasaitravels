import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Calendar, MapPin, Route, Shield, Headphones } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Clock,
      title: "Hourly Rentals",
      description: "Flexible hourly bookings for city travel, shopping, or short business trips.",
      features: ["Minimum 4 hours", "Waiting charges included", "City limits coverage"],
    },
    {
      icon: Calendar,
      title: "Daily Rentals",
      description: "Full day car rentals for sightseeing, business meetings, or local events.",
      features: ["8-12 hour packages", "Driver allowance included", "Fuel included*"],
    },
    {
      icon: Route,
      title: "Long Distance Travel",
      description: "Comfortable outstation trips to any destination across Andhra Pradesh and beyond.",
      features: ["All India permits", "Overnight charges", "Experienced drivers"],
    },
  ];

  const additionalServices = [
    {
      icon: MapPin,
      title: "Airport Transfers",
      description: "Reliable pickup and drop services to Vijayawada and Gannavaram airports.",
    },
    {
      icon: Shield,
      title: "Corporate Services",
      description: "Professional transportation for business meetings and corporate events.",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock customer support for all your travel needs.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer flexible rental options to meet your specific travel requirements, 
            whether it's for a few hours or several days.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="shadow-soft hover:shadow-medium transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-center">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-card-gradient rounded-lg p-8 shadow-soft">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Additional Services
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Service Features */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Why Choose Our Services?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4">
              <div className="text-3xl font-bold text-accent mb-2">₹</div>
              <div className="text-sm text-muted-foreground">Transparent Pricing</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-accent mb-2">✓</div>
              <div className="text-sm text-muted-foreground">No Hidden Charges</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-accent mb-2">🚗</div>
              <div className="text-sm text-muted-foreground">Well-Maintained Fleet</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-accent mb-2">👨‍💼</div>
              <div className="text-sm text-muted-foreground">Professional Drivers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;