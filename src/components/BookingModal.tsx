
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { CalendarDays, Clock, CreditCard, MapPin, Car } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface BookingModalProps {
  spot: {
    id: number;
    title: string;
    address: string;
    price: string;
    rating: number;
    features: string[];
  };
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal = ({ spot, isOpen, onClose }: BookingModalProps) => {
  const [duration, setDuration] = useState("2");
  const [startTime, setStartTime] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const { toast } = useToast();

  const pricePerHour = parseInt(spot.price.replace('$', '').replace('/hour', ''));
  const totalPrice = pricePerHour * parseInt(duration || "0");

  const handleBooking = () => {
    if (!startTime || !vehicleNumber) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Booking Confirmed! 🎉",
      description: `Your parking spot at ${spot.title} has been reserved.`,
    });
    
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <Car className="h-5 w-5 mr-2 text-blue-600" />
            Book Parking Spot
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Spot Info */}
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">{spot.title}</CardTitle>
              <div className="flex items-center text-gray-600">
                <MapPin className="h-4 w-4 mr-1" />
                <span className="text-sm">{spot.address}</span>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex justify-between items-center">
                <Badge variant="outline" className="bg-white">
                  {spot.price}
                </Badge>
                <div className="flex gap-1">
                  {spot.features.slice(0, 2).map((feature, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Booking Details */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="startTime" className="flex items-center mb-2">
                  <Clock className="h-4 w-4 mr-1" />
                  Start Time
                </Label>
                <Input
                  id="startTime"
                  type="datetime-local"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  min={new Date().toISOString().slice(0, 16)}
                />
              </div>
              <div>
                <Label htmlFor="duration" className="flex items-center mb-2">
                  <CalendarDays className="h-4 w-4 mr-1" />
                  Duration (hours)
                </Label>
                <Input
                  id="duration"
                  type="number"
                  min="1"
                  max="24"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="vehicle" className="flex items-center mb-2">
                <Car className="h-4 w-4 mr-1" />
                Vehicle Number
              </Label>
              <Input
                id="vehicle"
                placeholder="ABC-1234"
                value={vehicleNumber}
                onChange={(e) => setVehicleNumber(e.target.value.toUpperCase())}
              />
            </div>
          </div>

          {/* Payment Summary */}
          <Card className="border-green-200 bg-green-50">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center">
                <CreditCard className="h-5 w-5 mr-2 text-green-600" />
                Payment Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Price per hour:</span>
                  <span>${pricePerHour}</span>
                </div>
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span>{duration} hours</span>
                </div>
                <div className="flex justify-between font-semibold text-lg pt-2 border-t">
                  <span>Total:</span>
                  <span className="text-green-600">${totalPrice}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button 
              onClick={handleBooking} 
              className="flex-1 bg-green-600 hover:bg-green-700"
            >
              Confirm Booking
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
