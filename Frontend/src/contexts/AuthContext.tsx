import React, { createContext, useContext, useState } from 'react';

export interface User {
  id: string;
  fullName: string;
  email: string;
  telephone: string;
  district: string;
  sector: string;
  role: 'superadmin' | 'admin' | 'member';
  service?: 'security' | 'sanitation' | 'water'; // Optional service field for admins
  group: string;
}

interface AuthContextType {
  user: User | null;
  login: (data: { email: string; password: string }) => Promise<void>;
  logout: () => void;
  signup: (data: { fullName: string; email: string; telephone: string; district: string; sector: string; password: string }) => Promise<void>;
  isLoading: boolean;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (data: { email: string; password: string }) => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API delay

      // Define mock users with passwords
      const mockUsers = [
        {
          id: "1",
          fullName: "Super Admin User",
          email: "superadmin@example.com",
          password: "superadmin123", // Added password
          telephone: "0781234567",
          district: "Kigali",
          sector: "Nyarugenge",
          role: "superadmin" as const,
          group: "System Administrators",
        },
        {
          id: "2",
          fullName: "Security Admin",
          email: "security-admin@example.com",
          password: "admin123", // Added password
          telephone: "0787654321",
          district: "Kigali",
          sector: "Gasabo",
          role: "admin" as const,
          service: "security" as const,
          group: "Regional Administrators",
        },
        {
          id: "4",
          fullName: "Water Admin",
          email: "water-admin@example.com",
          password: "admin123", // Added password
          telephone: "0787654322",
          district: "Kigali",
          sector: "Kicukiro",
          role: "admin" as const,
          service: "water" as const,
          group: "Regional Administrators",
        },
        {
          id: "5",
          fullName: "Sanitation Admin",
          email: "sanitation-admin@example.com",
          password: "admin123", // Added password
          telephone: "0787654323",
          district: "Kigali",
          sector: "Nyarugenge",
          role: "admin" as const,
          service: "sanitation" as const,
          group: "Regional Administrators",
        },
        {
          id: "3",
          fullName: "John Doe",
          email: "member@example.com",
          password: "member123", // Added password
          telephone: "0781234567",
          district: "Kigali",
          sector: "Nyarugenge",
          role: "member" as const,
          group: "Kigali Women's Group",
        }
      ];

      // Find user by email and validate password
      const user = mockUsers.find(u => u.email === data.email);

      if (!user) {
        throw new Error("User not found");
      }

      if (user.password !== data.password) {
        throw new Error("Invalid password");
      }

      // Remove password from user object before storing
      const { password, ...userWithoutPassword } = user;
      setUser(userWithoutPassword);

    } catch (error: any) {
      throw new Error(error.message || "Login failed");
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
  };

  const signup = async (data: { fullName: string; email: string; telephone: string; district: string; sector: string; password: string }) => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API delay

      // Simulate signup - in real app this would create a new user
      // For now, just log the data
      console.log("Signup data:", data);

      // You could add the new user to the mock users array here
      // But for now, we'll just simulate success

    } catch (error: any) {
      throw new Error(error.message || "Signup failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, signup, isLoading, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
