import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings } from "lucide-react";

const SuperadminSettings = () => {
  return (
    <motion.div
      className="p-6 space-y-6"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold text-foreground">Settings</h1>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Settings className="h-6 w-6 mr-2" />
            System Settings
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            System configuration and settings will be implemented here.
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default SuperadminSettings;
