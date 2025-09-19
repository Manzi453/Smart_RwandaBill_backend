import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User } from "lucide-react";

const SuperadminProfile = () => {
  return (
    <motion.div
      className="p-6 space-y-6"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold text-foreground">Profile</h1>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <User className="h-6 w-6 mr-2" />
            Super Admin Profile
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Profile management features will be implemented here.
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default SuperadminProfile;
