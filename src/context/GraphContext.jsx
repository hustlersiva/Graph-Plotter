import { createContext, useState, useContext } from "react";

const GraphContext = createContext();

export const useGraph = () => useContext(GraphContext);

export const GraphProvider = ({ children }) => {
  const [data, setData] = useState([]);

  return (
    <GraphContext.Provider value={{ data, setData }}>
      {children}
    </GraphContext.Provider>
  );
};
