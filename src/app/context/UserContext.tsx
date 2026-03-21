import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface UserProfile {
  nickname: string;
  avatarUrl: string;
}

interface UserContextType {
  profile: UserProfile | null;
  saveProfile: (p: UserProfile) => void;
  clearProfile: () => void;
}

const STORAGE_KEY = 'trip-user-profile';
const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<UserProfile | null>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as UserProfile) : null;
    } catch {
      return null;
    }
  });

  const saveProfile = (p: UserProfile) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
    setProfile(p);
  };

  const clearProfile = () => {
    localStorage.removeItem(STORAGE_KEY);
    setProfile(null);
  };

  return (
    <UserContext.Provider value={{ profile, saveProfile, clearProfile }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error('useUser must be used within UserProvider');
  return ctx;
}
