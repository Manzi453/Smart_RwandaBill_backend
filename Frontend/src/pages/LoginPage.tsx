// LoginPage.tsx
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Login attempt:", form);
    // TODO: connect with backend authentication API
  };

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-200 px-4"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.4 }}
    >
      <div className="w-full max-w-md">
        <Card className="shadow-lg rounded-2xl">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
              {t("welcome")}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                name="email"
                placeholder={t("email")}
                value={form.email}
                onChange={handleChange}
                required
              />
              <Input
                type="password"
                name="password"
                placeholder={t("password")}
                value={form.password}
                onChange={handleChange}
                required
              />

              <div className="flex gap-2 mt-4">
                <Button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700" size="lg">
                  {t("login")}
                </Button>
                <Button
                  type="button"
                  onClick={() => navigate("/")}
                  variant="outline"
                  className="flex-1"
                  size="lg"
                >
                  {t("GoBack")}
                </Button>
              </div>
            </form>

            <p className="text-center text-gray-600 text-sm mt-4">
              {t("dontHaveAccount")}{" "}
              <Link to="/signup" className="text-blue-600 font-medium hover:underline">
                {t("signUp")}
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}