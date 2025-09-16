import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt:", form);
    // TODO: connect with backend authentication API
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-200 px-4">
      <div className="w-full max-w-md">
        <Card className="shadow-lg rounded-2xl">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
              Welcome Back
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                name="email"
                placeholder="Phone number or Email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <Input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                required
              />
              {/* Buttons side by side */}
                            <div className="flex gap-2">
                              <Button type="submit" className="flex-1" size="lg">
                                Login
                              </Button>
                              <Button
                                type="button"
                                onClick={() => navigate("/")}
                                variant="outline"
                                className="flex-1"
                                size="lg"
                              >
                                Go Back
                              </Button>
                            </div>
            </form>

            <p className="text-center text-gray-600 text-sm mt-4">
              Don't have an account?{" "}
              <a href="SignUp" className="text-blue-600 font-medium">Register</a>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}