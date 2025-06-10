
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Calendar, Star } from "lucide-react";

interface ParkingSpot {
  id: number;
  title: string;
  address: string;
  price: string;
  status: string;
  bookings: number;
  earnings: string;
}

interface ProviderSpotsListProps {
  spots: ParkingSpot[];
}

const ProviderSpotsList = ({ spots }: ProviderSpotsListProps) => {
  // Updated spots data with Indian locations and rupee pricing
  const indianSpots = [
    {
      id: 1,
      title: "Connaught Place Office Complex",
      address: "Block A, Connaught Place, New Delhi",
      price: "₹120/hour",
      status: "Active",
      bookings: 156,
      earnings: "₹18,720"
    },
    {
      id: 2,
      title: "DLF Cyber City Residential",
      address: "Phase 2, DLF Cyber City, Gurgaon",
      price: "₹100/hour",
      status: "Active",
      bookings: 89,
      earnings: "₹8,900"
    }
  ];

  return (
    <div className="grid gap-4">
      {indianSpots.map((spot) => (
        <Card key={spot.id} className="hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{spot.title}</h3>
                  <Badge 
                    variant={spot.status === 'Active' ? 'default' : 'secondary'}
                    className={spot.status === 'Active' ? 'bg-green-600' : ''}
                  >
                    {spot.status}
                  </Badge>
                </div>
                <p className="text-gray-600 mb-3">{spot.address}</p>
                <div className="flex items-center space-x-6 text-sm text-gray-500">
                  <span className="flex items-center">
                    <DollarSign className="h-4 w-4 mr-1" />
                    {spot.price}
                  </span>
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {spot.bookings} bookings
                  </span>
                  <span className="flex items-center">
                    <Star className="h-4 w-4 mr-1 text-yellow-500" />
                    Total: {spot.earnings}
                  </span>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  Edit
                </Button>
                <Button variant="outline" size="sm">
                  View
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProviderSpotsList;
