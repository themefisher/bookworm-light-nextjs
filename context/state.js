import { createContext, useContext } from "react";
import posts from "../json/posts.json";

const AppContext = createContext();

export const JsonContext = ({ children }) => {
  const state = {
    posts,
  };
  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
