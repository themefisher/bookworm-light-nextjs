import posts from "@json/posts.json";
import { createContext, useContext } from "react";

const SearchContext = createContext();

export const JsonContext = ({ children }) => {
  const state = {
    posts,
  };
  return (
    <SearchContext.Provider value={state}>{children}</SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  return useContext(SearchContext);
};
