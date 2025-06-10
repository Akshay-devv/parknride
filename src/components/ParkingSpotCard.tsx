
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Clock, Shield } from "lucide-react";

interface ParkingSpotCardProps {
  spot: {
    id: number;
    title: string;
    address: string;
    price: string;
    rating: number;
    distance: string;
    availability: string;
    features: string[];
    image: string;
  };
  onBook: () => void;
}

const ParkingSpotCard = ({ spot, onBook }: ParkingSpotCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 overflow-hidden">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row">
          {/* Image */}
          <div className="md:w-48 h-48 md:h-auto">
            <img 
              src={spot.image} 
              alt={spot.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Content */}
          <div className="flex-1 p-6">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{spot.title}</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{spot.address}</span>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-1 text-yellow-500 fill-current" />
                    <span>{spot.rating}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{spot.distance}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{spot.availability}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-blue-600 mb-1">{spot.price}</div>
                <Badge 
                  variant={spot.availability.includes('Available now') ? 'default' : 'secondary'}
                  className={spot.availability.includes('Available now') ? 'bg-green-600' : 'bg-orange-500'}
                >
                  {spot.availability.includes('Available now') ? 'Available' : 'Soon'}
                </Badge>
              </div>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-2 mb-4">
              {spot.features.map((feature, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {feature === 'Security' && <Shield className="h-3 w-3 mr-1" />}
                  {feature}
                </Badge>
              ))}
            </div>

            {/* Action Button */}
            <Button 
              onClick={onBook}
              className="w-full md:w-auto bg-blue-600 hover:bg-blue-700"
              disabled={!spot.availability.includes('Available now')}
            >
              {spot.availability.includes('Available now') ? 'Book Now' : 'Reserve'}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ParkingSpotCard;
