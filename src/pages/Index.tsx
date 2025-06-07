
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Car, Clock, Shield, Star, ArrowRight, Zap, Users, TrendingUp } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-lg border-b sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <Car className="h-7 w-7 text-white" />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              ParkNRide
            </h1>
          </div>
          <div className="flex space-x-4">
            <Button variant="outline" onClick={handleUserAction} className="border-2 hover:bg-blue-50 transition-all duration-300">
              Find Parking
            </Button>
            <Button 
              onClick={handleProviderAction}
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold px-6 py-2 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <TrendingUp className="h-4 w-4 mr-2" />
              Start Earning
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="text-center max-w-5xl mx-auto relative z-10">
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 text-sm font-medium mb-4">
              <Zap className="h-4 w-4 mr-2" />
              India's Fastest Growing Parking Platform
            </span>
          </div>
          
          <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Solve India's
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent block">
              Parking Crisis
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto">
            Connect with verified parking space owners across Delhi, Mumbai, Bangalore & more. 
            Find secure parking instantly or <span className="font-semibold text-orange-600">earn ₹15,000+ monthly</span> from your unused space.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-xl px-10 py-8 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              onClick={handleUserAction}
            >
              <MapPin className="mr-3 h-6 w-6" />
              Find Parking Now
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-xl px-10 py-8 rounded-xl border-3 border-gradient-to-r from-orange-500 to-red-500 bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 font-bold"
              onClick={handleProviderAction}
            >
              <TrendingUp className="mr-3 h-6 w-6" />
              Start Earning
              <span className="ml-2 px-2 py-1 bg-white/20 rounded-full text-sm">Hot 🔥</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-gray-900 mb-6">Why Choose ParkNRide?</h3>
          <p className="text-xl text-gray-600">Experience hassle-free parking across India's major cities</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:transform hover:scale-105">
            <CardHeader>
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <MapPin className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-2xl text-gray-900">Real-Time Availability</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 text-base">
                Find available parking spots near you with live updates and instant booking confirmation across 25+ Indian cities.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:transform hover:scale-105">
            <CardHeader>
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-2xl text-gray-900">100% Secure</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 text-base">
                All parking providers are verified with Aadhaar. Your vehicle and UPI payment information are completely protected.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:transform hover:scale-105">
            <CardHeader>
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Clock className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-2xl text-gray-900">Flexible Timing</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 text-base">
                Book parking for minutes, hours, or days. Extend your booking anytime through the app with instant UPI payments.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:transform hover:scale-105">
            <CardHeader>
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <TrendingUp className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-2xl text-gray-900">Earn ₹15,000+/month</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 text-base">
                Turn your unused parking space into a reliable income source. Top earners make extra income daily in prime locations.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Join Thousands of Indians?</h3>
          <p className="text-2xl text-blue-100 mb-12">Start parking smart or earning money today</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-blue-50 text-xl px-12 py-8 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 font-semibold"
              onClick={handleUserAction}
            >
              <Users className="mr-3 h-6 w-6" />
              Start Parking Smart
            </Button>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-xl px-12 py-8 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 font-bold border-2 border-white/20"
              onClick={handleProviderAction}
            >
              <TrendingUp className="mr-3 h-6 w-6" />
              Start Earning
              <span className="ml-3 px-3 py-1 bg-white/20 rounded-full text-sm">Limited Spots</span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
