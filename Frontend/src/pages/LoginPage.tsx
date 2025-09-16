import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigater = useNavigate();
  const location = useLocation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
              <div className="flex gap-2 mt-4">
                <Button
                  type="submit"
                  className="flex-1 bg-blue-600 hover:bg-blue-700"
                  size="lg"
                >
                  Login
                </Button>
                <Button
                  type="button"
                  onClick={() => navigater("/")} 
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
              <a
                href="/signup"
                className="text-blue-600 font-medium hover:underline"
              >
                Register
              </a>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
