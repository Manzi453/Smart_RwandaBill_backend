#!/bin/bash

# Script to set up the SignUp page with all required components
echo "Setting up SignUp page implementation..."

# 1. Install required dependencies
echo "Installing required packages..."
npm install @radix-ui/react-select react-icons

# 2. Create Select component
echo "Creating Select component..."
cat > src/components/ui/select.tsx << 'EOF'
import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { Check, ChevronDown, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"

const Select = SelectPrimitive.Root
const SelectGroup = SelectPrimitive.Group
const SelectValue = SelectPrimitive.Value

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      )}
      position={position}
      {...props}
    >
      <SelectPrimitive.Viewport
        className={cn(
          "p-1",
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
SelectItem.displayName = SelectPrimitive.Item.displayName

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
}
EOF

# 3. Create Select index file
echo "Creating Select index file..."
cat > src/components/ui/select/index.ts << 'EOF'
export * from "./select";
EOF

# 4. Create SignUp page
echo "Creating SignUp page..."
cat > src/pages/SignUp.tsx << 'EOF'
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FcGoogle } from "react-icons/fc";

const DISTRICTS = ["Kigali", "Gasabo", "Nyarugenge", "Kicukiro", "Rubavu", "Musanze", "Huye", "Nyagatare"];
const SECTORS = {
  Kigali: ["Nyarugenge", "Kacyiru", "Kimihurura", "Remera"],
  Gasabo: ["Gisozi", "Jali", "Kinyinya", "Ndera"],
  Nyarugenge: ["Muhima", "Nyakabanda", "Rwezamenyo"],
  Kicukiro: ["Gatenga", "Kicukiro", "Niboye"],
  Rubavu: ["Gisenyi", "Rubavu", "Nyamyumba"],
  Musanze: ["Muhoza", "Nyange", "Shingiro"],
  Huye: ["Ngoma", "Tumba", "Mukura"],
  Nyagatare: ["Nyagatare", "Rwimiyaga", "Tabagwe"]
};

export default function SignUpPage() {
  const [form, setForm] = useState({
    telephone: "",
    password: "",
    fullName: "",
    email: "",
    district: "",
    sector: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name, value) => {
    setForm({ 
      ...form, 
      [name]: value,
      ...(name === "district" && { sector: "" })
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign up attempt:", form);
  };

  const handleGoogleSignUp = () => {
    console.log("Google sign up initiated");
  };

  const availableSectors = form.district ? SECTORS[form.district] || [] : [];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-200 px-4 py-8">
      <div className="w-full max-w-md">
        <Card className="shadow-lg rounded-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-blue-600">
              Create Account
            </CardTitle>
            <p className="text-sm text-gray-600 mt-2">
              Join Rwanda Bills and manage your community bills digitally
            </p>
          </CardHeader>
          <CardContent className="p-6">
            <Button
              type="button"
              variant="outline"
              className="w-full mb-6 border-gray-300"
              onClick={handleGoogleSignUp}
            >
              <FcGoogle className="mr-2 h-5 w-5" />
              Sign up with Google
            </Button>

            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  value={form.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="telephone">Phone Number</Label>
                <Input
                  id="telephone"
                  name="telephone"
                  type="tel"
                  placeholder="07XXXXXXXX"
                  value={form.telephone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Create a strong password"
                  value={form.password}
                  onChange={handleChange}
                  required
                  minLength={6}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="district">District</Label>
                <Select
                  value={form.district}
                  onValueChange={(value) => handleSelectChange("district", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your district" />
                  </SelectTrigger>
                  <SelectContent>
                    {DISTRICTS.map((district) => (
                      <SelectItem key={district} value={district}>
                        {district}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {form.district && (
                <div className="space-y-2">
                  <Label htmlFor="sector">Sector</Label>
                  <Select
                    value={form.sector}
                    onValueChange={(value) => handleSelectChange("sector", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your sector" />
                    </SelectTrigger>
                    <SelectContent>
                      {availableSectors.map((sector) => (
                        <SelectItem key={sector} value={sector}>
                          {sector}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              <Button 
                type="submit" 
                variant="gradient"
                className="w-full" 
                size="lg"
                disabled={!form.district || !form.sector}
              >
                Create Account
              </Button>
            </form>

            <p className="text-center text-gray-600 text-sm mt-6">
              Already have an account?{" "}
              <a href="/login" className="text-blue-600 font-medium hover:underline">
                Sign in
              </a>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
EOF

# 5. Update App.tsx to include SignUp route
echo "Updating App.tsx to include SignUp route..."
sed -i '' '/import LoginPage from "\.\/pages\/LoginPage";/a\
import SignUpPage from "\.\/pages\/SignUp";\
' src/App.tsx

sed -i '' '/<Route path="\/login" element={<LoginPage\/>}\/>/a\
          <Route path="\/signup" element={<SignUpPage\/>}\/>\
' src/App.tsx

# 6. Update Landing page to link to SignUp
echo "Updating Landing page to link to SignUp..."
sed -i '' 's/<a href="#" className="text-blue-600 font-medium">Register<\/a>/<Link to="\/signup" className="text-blue-600 font-medium">Register<\/Link>/' src/pages/Landing.tsx

# 7. Add Link import to Landing page if not already there
if ! grep -q "import { Link } from \"react-router-dom\"" src/pages/Landing.tsx; then
  sed -i '' '/import { Card, CardContent, CardHeader, CardTitle } from "\.\/\.\.\/components\/ui\/card";/a\
import { Link } from "react-router-dom"\
' src/pages/Landing.tsx
fi

echo "Setup complete! ✅"
echo "Run 'npm run dev' to start your development server"
echo "SignUp page will be available at: http://localhost:5173/signup"