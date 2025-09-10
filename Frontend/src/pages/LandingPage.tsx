import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Smartphone, 
  Shield, 
  Clock, 
  CheckCircle2, 
  Droplets, 
  Trash2, 
  Users, 
  BarChart3,
  ArrowRight,
  Star
} from "lucide-react";

export const Landing = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const features = [
    {
      icon: Smartphone,
      title: "Mobile Money Integration",
      description: "Pay using MTN MoMo, Airtel Money, or bank transfers"
    },
    {
      icon: Clock,
      title: "Real-time Notifications",
      description: "Get reminders before bill due dates"
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description: "Bank-level security for all transactions"
    },
    {
      icon: CheckCircle2,
      title: "Digital Receipts",
      description: "Instant receipts and payment history"
    }
  ];

  const services = [
    {
      icon: Droplets,
      title: "Water Bills",
      description: "Monthly water supply payments",
      color: "text-blue-500"
    },
    {
      icon: Shield,
      title: "Security Services",
      description: "Community security fees",
      color: "text-green-500"
    },
    {
      icon: Trash2,
      title: "Sanitation",
      description: "Waste management services",
      color: "text-orange-500"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 sticky top-0 z-50 bg-card/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 gradient-hero rounded-xl flex items-center justify-center">
                <span className="text-white font-bold">RB</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Rwanda Bills</h1>
                <p className="text-xs text-muted-foreground">Smart Community Billing</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="ghost">Sign In</Button>
              <Button variant="gradient">Get Started</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-hero-pattern relative overflow-hidden">
        <div className="absolute inset-0 bg-background/10"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in">
              Pay Your Community Bills
              <span className="block text-accent-light">Digitally & Securely</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto animate-fade-in">
              Join thousands of Rwandans using our platform to pay water, security, and sanitation bills with ease.
            </p>
            
            {/* Quick Start Form */}
            <Card className="max-w-md mx-auto bg-card/90 backdrop-blur-sm border-0 shadow-2xl animate-slide-up">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-primary">Get Started Today</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="phone" className="text-sm font-medium">
                    Enter your phone number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="07XXXXXXXX"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="mt-1"
                  />
                </div>
                <Button 
                  className="w-full" 
                  variant="hero" 
                  size="lg"
                  disabled={!phoneNumber}
                >
                  Create Account
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  Free to join • Secure • Trusted by 50,000+ families
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Pay All Your Community Bills
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Manage water, security, and sanitation payments from one convenient platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="text-center gradient-card border-0 shadow-lg hover:shadow-glow transition-smooth">
                  <CardHeader>
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center`}>
                      <Icon className={`h-8 w-8 ${service.color}`} />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Why Choose Rwanda Bills?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience the future of community billing with our advanced features
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-smooth">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50K+</div>
              <div className="text-muted-foreground">Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">RWF 2.5B</div>
              <div className="text-muted-foreground">Bills Paid</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">99.9%</div>
              <div className="text-muted-foreground">Uptime</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-success mb-2">4.9/5</div>
              <div className="text-muted-foreground flex items-center justify-center">
                <Star className="h-4 w-4 text-yellow-500 mr-1 fill-current" />
                User Rating
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 gradient-hero">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Simplify Your Bills?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers and start managing your community bills digitally today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="xl" className="min-w-[200px]">
              <Users className="mr-2 h-5 w-5" />
              For Citizens
            </Button>
            <Button variant="outline" size="xl" className="min-w-[200px] border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <BarChart3 className="mr-2 h-5 w-5" />
              For Admins
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border/50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">RB</span>
              </div>
              <div>
                <div className="font-semibold">Rwanda Bills</div>
                <div className="text-sm text-muted-foreground">© 2024 All rights reserved</div>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              Made with ❤️ for Rwanda communities
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};