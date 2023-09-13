import React, { useContext, useEffect, useState } from "react";

const RestaurantContext = React.createContext();

export function useRestaurantContext() {
  return useContext(RestaurantContext);
}

export const RestaurantContextProvider = ({ children }) => {
  const [restaurant, setRestaurant] = useState(() => {
    const stored = localStorage.getItem("restaurant");
    return JSON.parse(stored);
  });

  useEffect(() => {
    localStorage.setItem("restaurant", JSON.stringify(restaurant));
  }, [restaurant]);

  return (
    <RestaurantContext.Provider
      value={{
        restaurant,
        setRestaurant,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};
