import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    uid: 'gdgoc-contributor-1',
    displayName: 'Alex Chen',
    username: 'alexchen',
    email: 'alex.chen@gdgoc.dev',
    bio: 'Open Source Contributor & Flutter enthusiast 🚀',
    reputationScore: 840,
    joinedAt: new Date().toISOString(),
  });
  const [loading, setLoading] = useState(false);

  const loginDemoUser = () => {
    setUser({
      uid: 'gdgoc-contributor-1',
      displayName: 'Alex Chen',
      username: 'alexchen',
      email: 'alex.chen@gdgoc.dev',
      bio: 'Open Source Contributor & Flutter enthusiast 🚀',
      reputationScore: 840,
      joinedAt: new Date().toISOString(),
    });
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, loading, loginDemoUser, logout }}>
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
