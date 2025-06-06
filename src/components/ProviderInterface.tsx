import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, MapPin, Car, Plus, DollarSign, Calendar, Star } from "lucide-react";

interface ProviderInterfaceProps {
  onBack: () => void;
}

const ProviderInterface = ({ onBack }: ProviderInterfaceProps) => {
  const [showAddSpot, setShowAddSpot] = useState(false);

  // Mock provider data
  const providerStats = {
    totalEarnings: "$1,247",
    activeSpots: 3,
    totalBookings: 127,
    rating: 4.8
  };

  const mySpots = [
    {
      id: 1,
      title: "Downtown Office Garage",
      address: "123 Business Ave, Downtown",
      price: "$8/hour",
      status: "Active",
      bookings: 23,
      earnings: "$542"
    },
    {
      id: 2,
      title: "Residential Driveway",
      address: "789 Maple Street",
      price: "$6/hour",
      status: "Active",
      bookings: 18,
      earnings: "$378"
    }
  ];

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
              <h1 className="text-2xl font-bold text-gray-900">Provider Dashboard</h1>
            </div>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              <Car className="h-4 w-4 mr-1" />
              Provider Mode
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total Earnings</CardTitle>
              <DollarSign className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{providerStats.totalEarnings}</div>
              <p className="text-xs text-gray-500">+12% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Active Spots</CardTitle>
              <MapPin className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{providerStats.activeSpots}</div>
              <p className="text-xs text-gray-500">2 pending approval</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total Bookings</CardTitle>
              <Calendar className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{providerStats.totalBookings}</div>
              <p className="text-xs text-gray-500">+8 this week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Rating</CardTitle>
              <Star className="h-4 w-4 text-yellow-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{providerStats.rating}</div>
              <p className="text-xs text-gray-500">From 47 reviews</p>
            </CardContent>
          </Card>
        </div>

        {/* My Parking Spots */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">My Parking Spots</h2>
          <Button 
            onClick={() => setShowAddSpot(!showAddSpot)}
            className="bg-blue-600 hover:bg-blue-700"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add New Spot
          </Button>
        </div>

        {/* Add New Spot Form */}
        {showAddSpot && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Add New Parking Spot</CardTitle>
              <CardDescription>
                Fill in the details of your parking space to start earning
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Spot Title</label>
                  <Input placeholder="e.g., Downtown Office Garage" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Price per Hour</label>
                  <Input placeholder="e.g., $8" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Address</label>
                <Input placeholder="Full address of your parking spot" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Description</label>
                <Textarea placeholder="Describe your parking spot, access instructions, features..." rows={3} />
              </div>
              <div className="flex gap-4">
                <Button className="bg-green-600 hover:bg-green-700">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Spot
                </Button>
                <Button variant="outline" onClick={() => setShowAddSpot(false)}>
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Existing Spots List */}
        <div className="grid gap-4">
          {mySpots.map((spot) => (
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
      </div>
    </div>
  );
};

export default ProviderInterface;
