import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h1 className="text-3xl font-bold mb-4">{t("userDashboard")}</h1>
      <p className="text-gray-700 mb-8">{t("dashboardDesc")}</p>
      <div className="flex gap-4">
        <Button asChild>
          <Link to="/admin">{t("adminPanel")}</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link to="/">{t("GoBack")}</Link>
        </Button>
      </div>
    </motion.div>
  );
};

export { Dashboard };
