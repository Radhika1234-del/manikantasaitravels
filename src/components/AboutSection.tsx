import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Clock, Award } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Reliable & Safe",
      description: "Well-maintained vehicles with experienced, professional drivers ensuring your safety.",
    },
    {
      icon: Users,
      title: "Professional Service",
      description: "Courteous and knowledgeable chauffeurs committed to providing excellent customer service.",
    },
    {
      icon: Clock,
      title: "Flexible Timing",
      description: "Available for hourly, daily, and long-distance rentals to suit your schedule.",
    },
    {
      icon: Award,
      title: "Affordable Rates",
      description: "Competitive pricing with transparent billing and no hidden costs.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Sri Manikanta Sai Travels
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Located in Chenchupet, Tenali, Guntur, we are your trusted partner for comfortable and reliable transportation. 
            Our commitment to excellence has made us a preferred choice for both local and long-distance travel.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card-gradient rounded-lg p-8 shadow-soft">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Why Choose Us?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              With years of experience in the transportation industry, we understand the importance of punctuality, 
              comfort, and safety. Our fleet of well-maintained vehicles and professional drivers ensure that your 
              journey is smooth and memorable.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-accent mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Service Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;