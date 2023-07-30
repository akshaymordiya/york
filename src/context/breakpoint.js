import { createContext } from "react";

import useBreakpoints from "../hooks/useBreakpoints";

export const BreakpointContext = createContext({});


const BreakpointProvider = ({ children }) => {
  const breakpoints = useBreakpoints();

  return (
    <BreakpointContext.Provider value={breakpoints}>
      {children}
    </BreakpointContext.Provider>
  )
}

export default BreakpointProvider 