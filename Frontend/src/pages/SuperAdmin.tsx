import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Shield, Users, BarChart3, Settings } from "lucide-react";

const SuperAdmin = () => {
  const { t } = useTranslation();

  // Simulated data for app usage and functionality
  const [stats, setStats] = useState({
    totalUsers: 50000,
    activeUsers: 12000,
    billsPaid: 150000,
    uptimePercent: 99.9,
    userRating: 4.8,
    adminsCount: 15,
    securityIncidents: 2,
  });

  useEffect(() => {
    // Here you could fetch real data from an API if available
  }, []);

  return (
    <motion.div
      className="min-h-screen bg-background p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            {t("superAdminPanel")}
          </h1>
          <p className="text-muted-foreground">{t("superAdminDesc")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
              <CardTitle>{t("activeUsers")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground text-center">
                {stats.activeUsers.toLocaleString()}
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <BarChart3 className="h-12 w-12 mx-auto mb-4 text-primary" />
              <CardTitle>{t("billsPaid")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground text-center">
                {stats.billsPaid.toLocaleString()}
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <Shield className="h-12 w-12 mx-auto mb-4 text-primary" />
              <CardTitle>{t("manageAdmins")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground text-center">
                {stats.adminsCount} {t("admins")}
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <Settings className="h-12 w-12 mx-auto mb-4 text-primary" />
              <CardTitle>{t("systemUptime")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground text-center">
                {stats.uptimePercent}%
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button asChild variant="outline">
            <Link to="/">{t("GoBack")}</Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default SuperAdmin;
