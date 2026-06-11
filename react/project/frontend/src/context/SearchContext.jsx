// import React, { createContext, useContext, useState } from "react";

// const SearchContext = createContext();

// export const SearchProvider = ({ children }) => {
//   const [searchQuery, setSearchQuery] = useState("");
//   return (
//     <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
//       {children}
//     </SearchContext.Provider>
//   );
// };

// export const useSearch = () => useContext(SearchContext);

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  // Restore previous search on page load
  const [searchQuery, setSearchQuery] = useState(() => {
    return sessionStorage.getItem("searchQuery") || "";
  });

  // Save search whenever it changes
  useEffect(() => {
    sessionStorage.setItem("searchQuery", searchQuery);
  }, [searchQuery]);

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);