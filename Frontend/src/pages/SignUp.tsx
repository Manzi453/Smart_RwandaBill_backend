// SignUpPage.tsx
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion";


// Mock data for districts and sectors
const DISTRICTS = [
  "Kigali",
  "Gasabo",
  "Nyarugenge",
  "Kicukiro",
  "Rubavu",
  "Musanze",
  "Huye",
  "Nyagatare",
];
const SECTORS = {
  Kigali: ["Nyarugenge", "Kacyiru", "Kimihurura", "Remera"],
  Gasabo: ["Gisozi", "Jali", "Kinyinya", "Ndera"],
  Nyarugenge: ["Muhima", "Nyakabanda", "Rwezamenyo"],
  Kicukiro: ["Gatenga", "Kicukiro", "Niboye"],
  Rubavu: ["Gisenyi", "Rubavu", "Nyamyumba"],
  Musanze: ["Muhoza", "Nyange", "Shingiro"],
  Huye: ["Ngoma", "Tumba", "Mukura"],
  Nyagatare: ["Nyagatare", "Rwimiyaga", "Tabagwe"],
};

export default function SignUpPage() {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    telephone: "",
    password: "",
    fullName: "",
    email: "",
    district: "",
    sector: "",
  });

  // Read phone number from URL query parameter
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const phone = searchParams.get("phone");
    if (phone) {
      setForm((prev) => ({ ...prev, telephone: decodeURIComponent(phone) }));
    }
  }, [location.search]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setForm({
      ...form,
      [name]: value,
      ...(name === "district" && { sector: "" }), // reset sector if district changes
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign up attempt:", form);
    // TODO: connect with backend authentication API
  };

  const handleGoogleSignUp = () => {
    console.log("Google sign up initiated");
    // TODO: Implement Google OAuth integration
  };

  const availableSectors = form.district
    ? SECTORS[form.district as keyof typeof SECTORS] || []
    : [];

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-200 px-4 py-8 relative"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.4 }}
    >
      <div className="w-full max-w-md">
        <Card className="shadow-lg rounded-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-blue-600">
              {t("createAccount")}
            </CardTitle>
            <p className="text-sm text-gray-600 mt-2">
              {t("joinRwandaBills")}
            </p>
          </CardHeader>
          <CardContent className="p-6">
            {/* Google Sign Up Button */}
            <Button
              type="button"
              variant="outline"
              className="w-full mb-6 border-gray-300"
              onClick={handleGoogleSignUp}
            >
              <FcGoogle className="mr-2 h-5 w-5" />
              {t("signUpWithGoogle")}
            </Button>

            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  {t("orContinueWith")}
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div className="space-y-2">
                <Label htmlFor="fullName">{t("fullName")}</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder={t("enterFullName")}
                  value={form.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Telephone */}
              <div className="space-y-2">
                <Label htmlFor="telephone">{t("phoneNumber")}</Label>
                <Input
                  id="telephone"
                  name="telephone"
                  type="tel"
                  placeholder={t("phonePlaceholder")}
                  value={form.telephone}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">{t("email")}</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={t("emailPlaceholder")}
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password">{t("password")}</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder={t("createStrongPassword")}
                  value={form.password}
                  onChange={handleChange}
                  required
                  minLength={6}
                />
              </div>

              {/* District */}
              <div className="space-y-2">
                <Label htmlFor="district">{t("district")}</Label>
                <Select
                  value={form.district}
                  onValueChange={(value) =>
                    handleSelectChange("district", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder={t("selectDistrict")} />
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

              {/* Sector */}
              {form.district && (
                <div className="space-y-2">
                  <Label htmlFor="sector">{t("sector")}</Label>
                  <Select
                    value={form.sector}
                    onValueChange={(value) =>
                      handleSelectChange("sector", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder={t("selectSector")} />
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

              {/* Buttons side by side */}
              <div className="flex gap-2">
                <Button
                  type="submit"
                  className="flex-1 bg-blue-600 hover:bg-blue-700"
                  size="lg"
                  disabled={!form.district || !form.sector}
                >
                  {t("createAccount")}
                </Button>
                <Button
                  type="button"
                  onClick={() => navigate("/")}
                  variant="outline"
                  className="flex-1"
                  size="lg"
                >
                  {t("Go Back")}
                </Button>
              </div>
            </form>

            <p className="text-center text-gray-600 text-sm mt-6">
              {t("alreadyHaveAccount")}{" "}
              <a
                href="/login"
                className="text-blue-600 font-medium hover:underline"
              >
                {t("signIn")}
              </a>
            </p>

            <p className="text-xs text-center text-gray-500 mt-4">
              {t("agreeToTerms")}
            </p>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}
