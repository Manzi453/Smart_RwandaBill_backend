import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Card, CardContent } from "../components/ui/Card";

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
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
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
              <Button 
                type="submit" 
                className="w-full bg-blue-600 text-white py-2 rounded-lg"
              >
                Login
              </Button>
            </form>

            <p className="text-center text-gray-600 text-sm mt-4">
              Don’t have an account?{" "}
              <a href="#" className="text-blue-600 font-medium">Register</a>
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
