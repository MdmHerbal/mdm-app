// import React, {createContext, useState, useContext} from "react";

// const PriceContext = createContext();

// const PriceContextProvider = ({children}) => {
//   const [totalCount, setTotalCount] = useState([]);

//   const updateTotalCount = (newCount) => {
//     setTotalCount(newCount);
//   };

//   return (
//     <PriceContext.Provider
//       value={{
//         totalCount,
//         updateTotalCount,
//       }}>
//       {children}
//     </PriceContext.Provider>
//   );
// };

// const usePriceContext = () => useContext(PriceContext);

// export {usePriceContext, PriceContextProvider};

import React, {createContext, useState, useContext, useEffect} from "react";

const PriceContext = createContext();

const PriceContextProvider = ({children}) => {
  const [totalCount, setTotalCount] = useState([]);

  useEffect(() => {
    // Load totalCount from local storage on component mount
    const savedTotalCount = JSON.parse(localStorage.getItem("totalCount"));
    if (savedTotalCount) {
      setTotalCount(savedTotalCount);
    }
  }, []);

  const updateTotalCount = (newCount) => {
    setTotalCount(newCount);
  };

  useEffect(() => {
    // Save totalCount to local storage whenever it changes
    localStorage.setItem("totalCount", JSON.stringify(totalCount));
  }, [totalCount]);

  return (
    <PriceContext.Provider value={{totalCount, updateTotalCount}}>
      {children}
    </PriceContext.Provider>
  );
};

const usePriceContext = () => useContext(PriceContext);

export {usePriceContext, PriceContextProvider};
