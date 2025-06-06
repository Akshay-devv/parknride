
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Search, Star, Clock, Car } from "lucide-react";
import ParkingSpotCard from "./ParkingSpotCard";
import BookingModal from "./BookingModal";

interface UserInterfaceProps {
  onBack: () => void;
}

const UserInterface = ({ onBack }: UserInterfaceProps) => {
  const [searchLocation, setSearchLocation] = useState("");
  const [selectedSpot, setSelectedSpot] = useState<any>(null);
  const [showBooking, setShowBooking] = useState(false);

  // Mock parking spots data
  const parkingSpots = [
    {
      id: 1,
      title: "Downtown Office Garage",
      address: "123 Business Ave, Downtown",
      price: "$8/hour",
      rating: 4.8,
      distance: "0.2 miles",
      availability: "Available now",
      features: ["Covered", "Security", "EV Charging"],
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Mall Parking Spot",
      address: "456 Shopping Center Blvd",
      price: "$5/hour",
      rating: 4.6,
      distance: "0.5 miles",
      availability: "Available in 15 min",
      features: ["Covered", "24/7 Access"],
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Residential Driveway",
      address: "789 Maple Street",
      price: "$6/hour",
      rating: 4.9,
      distance: "0.3 miles",
      availability: "Available now",
      features: ["Private", "Secure"],
      image: "https://images.unsplash.com/photo-1487252665478-49b61b47f302?w=400&h=300&fit=crop"
    }
  ];

  const handleBookSpot = (spot: any) => {
    setSelectedSpot(spot);
    setShowBooking(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" onClick={onBack}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
              <h1 className="text-2xl font-bold text-gray-900">Find Parking</h1>
            </div>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              <Car className="h-4 w-4 mr-1" />
              User Mode
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Search Section */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <MapPin className="h-5 w-5 mr-2 text-blue-600" />
              Where do you need parking?
            </CardTitle>
            <CardDescription>
              Search for available parking spots near your destination
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Enter address or landmark..."
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  className="h-12"
                />
              </div>
              <Button className="h-12 bg-blue-600 hover:bg-blue-700">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Map Placeholder */}
        <Card className="mb-6">
          <CardContent className="p-0">
            <div className="h-64 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-lg flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
              <div className="text-center z-10">
                <MapPin className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Interactive Map</h3>
                <p className="text-gray-600">Parking spots will be displayed here</p>
              </div>
              {/* Mock map pins */}
              <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
              <div className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
            </div>
          </CardContent>
        </Card>

        {/* Available Spots */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Available Parking Spots</h2>
            <Badge variant="outline" className="text-green-600 border-green-200">
              {parkingSpots.length} spots found
            </Badge>
          </div>

          <div className="grid gap-4">
            {parkingSpots.map((spot) => (
              <ParkingSpotCard
                key={spot.id}
                spot={spot}
                onBook={() => handleBookSpot(spot)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {showBooking && selectedSpot && (
        <BookingModal
          spot={selectedSpot}
          isOpen={showBooking}
          onClose={() => {
            setShowBooking(false);
            setSelectedSpot(null);
          }}
        />
      )}
    </div>
  );
};

export default UserInterface;
