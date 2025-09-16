// App.tsx
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Landing } from "./pages/Landing";
import LoginPage from "./pages/LoginPage";
import { Admin } from "./pages/Admin";
import SignUpPage from "./pages/SignUp";
import { AnimatePresence, motion } from "framer-motion";
import LanguageSwitcher from "@/components/LanguageSwitcher";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
            >
              <Landing />
            </motion.div>
          }
        />
        <Route
          path="/login"
          element={
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <LoginPage />
            </motion.div>
          }
        />
        <Route
          path="/signup"
          element={
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <SignUpPage/>
            </motion.div>
          }
        />
        <Route
          path="/admin"
          element={
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Admin />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <div className="fixed top-4 right-4 z-50">
        <LanguageSwitcher />
      </div>
      <AnimatedRoutes />
    </Router>
  );
}
