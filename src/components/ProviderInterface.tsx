
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Car, Plus } from "lucide-react";
import ProviderStats from "./ProviderStats";
import ProviderRegistrationForm from "./ProviderRegistrationForm";
import ProviderSpotsList from "./ProviderSpotsList";

interface ProviderInterfaceProps {
  onBack: () => void;
}

const ProviderInterface = ({ onBack }: ProviderInterfaceProps) => {
  const [showAddSpot, setShowAddSpot] = useState(false);

  // Mock provider data with Indian rupees
  const providerStats = {
    totalEarnings: "₹24,750",
    activeSpots: 3,
    totalBookings: 127,
    rating: 4.8
  };

  const mySpots = [
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

  const handleCancelAddSpot = () => {
    setShowAddSpot(false);
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
        <ProviderStats stats={providerStats} />

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
          <ProviderRegistrationForm onCancel={handleCancelAddSpot} />
        )}

        {/* Existing Spots List */}
        <ProviderSpotsList spots={mySpots} />
      </div>
    </div>
  );
};

export default ProviderInterface;
