"use client";

import React, { createContext, useContext, useState } from "react";

type NavContextValue = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
};

const NavContext = createContext<NavContextValue | undefined>(undefined);

export const NavProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen((v) => !v);

  return (
    <NavContext.Provider value={{ isOpen, open, close, toggle }}>
      {children}
    </NavContext.Provider>
  );
};

export const useNav = (): NavContextValue => {
  const ctx = useContext(NavContext);
  if (!ctx) throw new Error("useNav must be used within NavProvider");
  return ctx;
};

export default NavContext;
