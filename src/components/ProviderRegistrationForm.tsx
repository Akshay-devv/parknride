import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Plus, Upload, FileText, Shield, Clock } from "lucide-react";

interface ProviderRegistrationFormProps {
  onCancel: () => void;
}

const ProviderRegistrationForm = ({ onCancel }: ProviderRegistrationFormProps) => {
  const [formStep, setFormStep] = useState(1);

  const handleNextStep = () => {
    if (formStep < 3) {
      setFormStep(formStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (formStep > 1) {
      setFormStep(formStep - 1);
    }
  };

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center mb-6">
      {[1, 2, 3].map((step) => (
        <div key={step} className="flex items-center">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
            step === formStep 
              ? 'bg-blue-600 text-white' 
              : step < formStep 
                ? 'bg-green-600 text-white' 
                : 'bg-gray-200 text-gray-600'
          }`}>
            {step}
          </div>
          {step < 3 && (
            <div className={`w-12 h-1 mx-2 ${
              step < formStep ? 'bg-green-600' : 'bg-gray-200'
            }`} />
          )}
        </div>
      ))}
    </div>
  );

  const renderStepContent = () => {
    switch (formStep) {
      case 1:
        return (
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                Basic Information
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Parking Spot Title *</label>
                <Input placeholder="e.g., Downtown Office Garage" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Price per Hour *</label>
                <Input placeholder="e.g., $8" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Full Address *</label>
              <Input placeholder="Enter complete address with zip code" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Parking Type *</label>
                <select className="w-full h-10 px-3 py-2 text-sm bg-background border border-input rounded-md">
                  <option value="">Select type</option>
                  <option value="driveway">Private Driveway</option>
                  <option value="garage">Garage</option>
                  <option value="lot">Parking Lot</option>
                  <option value="street">Street Parking</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Number of Spots *</label>
                <Input type="number" placeholder="1" min="1" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Description</label>
              <Textarea placeholder="Describe your parking spot, access instructions, special features..." rows={3} />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Clock className="h-5 w-5 mr-2 text-blue-600" />
                Availability & Features
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Available From *</label>
                <Input type="time" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Available Until *</label>
                <Input type="time" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Available Days *</label>
              <div className="flex flex-wrap gap-2">
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                  <label key={day} className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">{day}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Features</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {[
                  'Covered/Indoor',
                  'Security Camera',
                  'EV Charging',
                  '24/7 Access',
                  'Well Lit',
                  'Gated',
                  'Attendant',
                  'Wheelchair Accessible',
                  'Height Restriction'
                ].map((feature) => (
                  <label key={feature} className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">{feature}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Maximum Vehicle Height</label>
                <Input placeholder="e.g., 7 feet" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Vehicle Types Allowed</label>
                <select className="w-full h-10 px-3 py-2 text-sm bg-background border border-input rounded-md">
                  <option value="all">All Vehicles</option>
                  <option value="cars">Cars Only</option>
                  <option value="small">Small Cars Only</option>
                  <option value="no-trucks">No Trucks/RVs</option>
                </select>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Shield className="h-5 w-5 mr-2 text-blue-600" />
                Legal Documents & Verification
              </h3>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-800 mb-2">
                <strong>Required:</strong> Please upload the following documents to verify your parking spot ownership and ensure legal compliance.
              </p>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Property Ownership Document *</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 mb-2">Property deed, lease agreement, or ownership certificate</p>
                  <Button variant="outline" size="sm">
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Document
                  </Button>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Government ID *</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <FileText className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 mb-2">Driver's license, passport, or national ID</p>
                  <Button variant="outline" size="sm">
                    <Upload className="h-4 w-4 mr-2" />
                    Upload ID
                  </Button>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Insurance Certificate</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Shield className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 mb-2">Property insurance or liability coverage (optional but recommended)</p>
                  <Button variant="outline" size="sm">
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Insurance
                  </Button>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Parking Spot Photos *</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 mb-2">Upload 3-5 clear photos of the parking area</p>
                  <Button variant="outline" size="sm">
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Photos
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <h4 className="font-medium text-yellow-800 mb-2">Legal Agreement</h4>
              <div className="flex items-start space-x-2">
                <input type="checkbox" className="mt-1" />
                <p className="text-sm text-yellow-800">
                  I confirm that I have the legal right to rent out this parking space and agree to ParkNRide's Terms of Service and Provider Agreement.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-800 mb-2">Next Steps</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Your application will be reviewed within 24-48 hours</li>
                <li>• We may contact you for additional verification</li>
                <li>• Once approved, your parking spot will go live</li>
                <li>• You'll receive an email confirmation with your provider dashboard access</li>
              </ul>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Add New Parking Spot</CardTitle>
        <CardDescription>
          Complete the registration process to start earning from your parking space
        </CardDescription>
      </CardHeader>
      <CardContent>
        {renderStepIndicator()}
        {renderStepContent()}
        
        <div className="flex justify-between mt-6">
          <div>
            {formStep > 1 && (
              <Button variant="outline" onClick={handlePrevStep}>
                Previous
              </Button>
            )}
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={onCancel}>
              Cancel
            </Button>
            {formStep < 3 ? (
              <Button className="bg-blue-600 hover:bg-blue-700" onClick={handleNextStep}>
                Next Step
              </Button>
            ) : (
              <Button className="bg-green-600 hover:bg-green-700">
                <Plus className="h-4 w-4 mr-2" />
                Submit for Review
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProviderRegistrationForm;
