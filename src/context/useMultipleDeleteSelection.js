import { useState } from "react";
import { createContext } from "react";

export const useMultipleDeleteSelection = createContext();

export function MultipleDeleteProvider({ children }) {
  const [isChecked, setIsChecked] = useState([]);

  return (
    <useMultipleDeleteSelection.Provider
      value={{ isChecked, setIsChecked }}
    >
      {children}
    </useMultipleDeleteSelection.Provider>
  );
}
