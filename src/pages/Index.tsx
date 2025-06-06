import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Car, Clock, Shield, Star, ArrowRight } from "lucide-react";
import UserInterface from "@/components/UserInterface";
import ProviderInterface from "@/components/ProviderInterface";
import LoginPage from "@/components/LoginPage";

const Index = () => {
  const [currentView, setCurrentView] = useState<'landing' | 'user' | 'provider' | 'login'>('landing');
  const [loginContext, setLoginContext] = useState<'provider' | 'user'>('provider');

  const handleProviderAction = () => {
    setLoginContext('provider');
    setCurrentView('login');
  };

  const handleUserAction = () => {
    setLoginContext('user');
    setCurrentView('login');
  };

  const handleLoginSuccess = () => {
    if (loginContext === 'provider') {
      setCurrentView('provider');
    } else {
      setCurrentView('user');
    }
  };

  if (currentView === 'login') {
    return (
      <LoginPage
        onBack={() => setCurrentView('landing')}
        onLogin={handleLoginSuccess}
        title={loginContext === 'provider' ? "become a provider" : "find parking"}
      />
    );
  }

  if (currentView === 'user') {
    return <UserInterface onBack={() => setCurrentView('landing')} />;
  }

  if (currentView === 'provider') {
    return <ProviderInterface onBack={() => setCurrentView('landing')} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <Car className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              ParkNRide
            </h1>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline" onClick={handleUserAction}>
              Find Parking
            </Button>
            <Button onClick={handleProviderAction}>
              Become Provider
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Your One-Stop Solution to
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {" "}Parking Problems
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Connect with private parking space owners in busy cities. Find secure parking spots 
            instantly or earn money by renting out your unused parking space.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg px-8 py-6"
              onClick={handleUserAction}
            >
              <MapPin className="mr-2 h-5 w-5" />
              Find Parking Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 border-2 hover:bg-blue-50"
              onClick={handleProviderAction}
            >
              <Car className="mr-2 h-5 w-5" />
              List Your Space
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose ParkNRide?</h3>
          <p className="text-lg text-gray-600">Experience hassle-free parking with our innovative platform</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl text-gray-900">Real-Time Availability</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                Find available parking spots near you with live updates and instant booking confirmation.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl text-gray-900">Secure & Safe</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                All parking providers are verified. Your vehicle and payment information are protected.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl text-gray-900">Flexible Timing</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                Book parking for minutes, hours, or days. Extend your booking anytime through the app.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl text-gray-900">Earn Money</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                Turn your unused parking space into a source of income with our easy provider platform.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Ready to Solve Your Parking Problems?</h3>
          <p className="text-xl text-blue-100 mb-8">Join thousands of satisfied users and providers</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6"
              onClick={handleUserAction}
            >
              Start Parking Smart
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-6"
              onClick={handleProviderAction}
            >
              Start Earning Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
