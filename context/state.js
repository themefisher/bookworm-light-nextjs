import { createContext, useContext } from "react";
import posts from "../frontmatter/posts.json";

const AppContext = createContext();

export const AppWraper = ({ children }) => {
  let state = {
    posts,
  };
  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};
export const useAppContext = () => {
  return useContext(AppContext);
};
