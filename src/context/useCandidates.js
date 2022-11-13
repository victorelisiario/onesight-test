import { useState } from "react";
import { createContext } from "react";

export const CandidatesContext = createContext();

export function CandidatesProvider({ children }) {
  const [candidates, setCandidates] = useState([]);

  return (
    <CandidatesContext.Provider
      value={{ candidates, setCandidates }}
    >
      {children}
    </CandidatesContext.Provider>
  );
}
