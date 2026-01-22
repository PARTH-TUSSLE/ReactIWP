import { createContext } from "react";

export type CountContextType = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

// Export a single context instance to be used across the app
export const CountContext = createContext<CountContextType | undefined>(undefined);

export default CountContext;
