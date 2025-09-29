import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import {
  User,
  Settings,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  BarChart3,
  Users,
  DollarSign,
} from "lucide-react";

interface AdminNavbarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  collapsed?: boolean;
