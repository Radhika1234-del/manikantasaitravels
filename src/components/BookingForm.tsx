import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, MapPin, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const BookingForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    pickupLocation: "",
    dropLocation: "",
    date: "",
    time: "",
    vehicleType: "",
    serviceType: "",
    additionalNotes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Hi Sri Manikanta Sai Travels,\n\nI would like to book a vehicle:\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nPickup: ${formData.pickupLocation}\nDrop: ${formData.dropLocation}\nDate: ${formData.date}\nTime: ${formData.time}\nVehicle: ${formData.vehicleType}\nService Type: ${formData.serviceType}\nNotes: ${formData.additionalNotes}\n\nPlease confirm availability and pricing.`;
    
    const whatsappUrl = `https://wa.me/919542455552?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Booking Request Sent!",
      description: "We'll contact you shortly to confirm your booking.",
    });

    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      pickupLocation: "",
      dropLocation: "",
      date: "",
      time: "",
      vehicleType: "",
      serviceType: "",
      additionalNotes: "",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="booking" className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Book Your Ride
          </h2>
          <p className="text-lg text-muted-foreground">
            Fill out the form below and we'll get back to you with availability and pricing.
          </p>
        </div>

        <Card className="shadow-large">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-foreground">
              Booking Request Form
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    required
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="Enter your email address"
                />
              </div>

              {/* Trip Details */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="pickup">Pickup Location *</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="pickup"
                      value={formData.pickupLocation}
                      onChange={(e) => handleInputChange("pickupLocation", e.target.value)}
                      required
                      placeholder="Enter pickup location"
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="drop">Drop Location *</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="drop"
                      value={formData.dropLocation}
                      onChange={(e) => handleInputChange("dropLocation", e.target.value)}
                      required
                      placeholder="Enter drop location"
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date">Travel Date *</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => handleInputChange("date", e.target.value)}
                      required
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">Preferred Time *</Label>
                  <Input
                    id="time"
                    type="time"
                    value={formData.time}
                    onChange={(e) => handleInputChange("time", e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Vehicle and Service Selection */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="vehicle">Vehicle Type *</Label>
                  <Select onValueChange={(value) => handleInputChange("vehicleType", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select vehicle type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tempo-traveller">Tempo Traveller</SelectItem>
                      <SelectItem value="innova">Toyota Innova</SelectItem>
                      <SelectItem value="kia-seltos">Kia Seltos</SelectItem>
                      <SelectItem value="etios">Toyota Etios</SelectItem>
                      <SelectItem value="tavera">Chevrolet Tavera</SelectItem>
                      <SelectItem value="toofan">Mahindra Toofan</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service">Service Type *</Label>
                  <Select onValueChange={(value) => handleInputChange("serviceType", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select service type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hourly">Hourly Rental</SelectItem>
                      <SelectItem value="daily">Daily Rental</SelectItem>
                      <SelectItem value="outstation">Long Distance/Outstation</SelectItem>
                      <SelectItem value="airport">Airport Transfer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Additional Notes</Label>
                <Textarea
                  id="notes"
                  value={formData.additionalNotes}
                  onChange={(e) => handleInputChange("additionalNotes", e.target.value)}
                  placeholder="Any special requirements or additional information..."
                  rows={3}
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3"
                size="lg"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Booking Request
              </Button>

              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  Or call us directly at{" "}
                  <Button
                    variant="link"
                    className="p-0 h-auto text-primary"
                    onClick={() => window.open("tel:+919542455552")}
                  >
                    <Phone className="w-4 h-4 mr-1" />
                    9542455552
                  </Button>
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BookingForm;