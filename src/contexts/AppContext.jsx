import { createContext, useContext, useState } from "react";

// Create Context
const AppContext = createContext();

// Custom Hook to use context
export const useAppContext = () => useContext(AppContext);

// Context Provider Component
export const AppProvider = ({ children }) => {
  const [pathname, setPathname] = useState("Dashboard"); 
  return (
    <AppContext.Provider value={{ pathname,setPathname }}>
      {children}
    </AppContext.Provider>
  );
};
