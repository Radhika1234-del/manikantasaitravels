import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Luggage, Star } from "lucide-react";
import innovaImg from "@/assets/innova.jpg";
import tempoTravellerImg from "@/assets/tempo-traveller.jpg";
import kiaSeliosImg from "@/assets/kia-seltos.jpg";
import etiosImg from "@/assets/etios.jpg";

const VehiclesSection = () => {
  const vehicles = [
    {
      name: "Tempo Traveller",
      image: tempoTravellerImg,
      capacity: "12-17 Seater",
      luggage: "Large",
      features: ["AC", "Comfortable Seating", "Large Groups"],
      description: "Perfect for group travel and outstation trips",
      popular: true,
    },
    {
      name: "Toyota Innova",
      image: innovaImg,
      capacity: "7 Seater",
      luggage: "Medium",
      features: ["AC", "Premium Comfort", "Family Friendly"],
      description: "Ideal for family trips and comfortable journeys",
      popular: true,
    },
    {
      name: "Kia Seltos",
      image: kiaSeliosImg,
      capacity: "5 Seater",
      luggage: "Medium",
      features: ["AC", "Modern", "Fuel Efficient"],
      description: "Stylish and comfortable for city and highway travel",
      popular: false,
    },
    {
      name: "Toyota Etios",
      image: etiosImg,
      capacity: "4 Seater",
      luggage: "Small",
      features: ["AC", "Reliable", "Economic"],
      description: "Budget-friendly option for short distance travel",
      popular: false,
    },
    {
      name: "Chevrolet Tavera",
      image: innovaImg, // Using Innova image as placeholder
      capacity: "7 Seater",
      luggage: "Medium",
      features: ["AC", "Spacious", "Reliable"],
      description: "Comfortable and spacious for medium groups",
      popular: false,
    },
    {
      name: "Mahindra Toofan",
      image: tempoTravellerImg, // Using Tempo image as placeholder
      capacity: "6-8 Seater",
      luggage: "Large",
      features: ["Robust", "All-terrain", "Spacious"],
      description: "Sturdy vehicle for rough terrains and group travel",
      popular: false,
    },
  ];

  return (
    <section id="vehicles" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Vehicle Fleet
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our diverse range of well-maintained vehicles, each equipped with modern amenities 
            and driven by experienced chauffeurs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle, index) => (
            <Card key={index} className="overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 group">
              <div className="relative">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {vehicle.popular && (
                  <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                    <Star className="w-3 h-3 mr-1" />
                    Popular
                  </Badge>
                )}
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {vehicle.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {vehicle.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{vehicle.capacity}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Luggage className="w-4 h-4" />
                    <span>{vehicle.luggage}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {vehicle.features.map((feature, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            All vehicles come with experienced chauffeurs and are thoroughly sanitized before each trip.
          </p>
          <p className="text-sm text-muted-foreground">
            Additional vehicles available on request. Contact us for special requirements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VehiclesSection;