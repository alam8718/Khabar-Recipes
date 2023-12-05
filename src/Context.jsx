import {createContext, useContext, useEffect, useState} from "react";

const AppContext = createContext();

const allMealsURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const randomMealURL = "https://www.themealdb.com/api/json/v1/1/random.php";

const AppProvider = ({children}) => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoadig] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const fetchMeals = async (url) => {
    setLoadig(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.meals) {
        setMeals(data.meals);
      } else {
        setMeals([]);
      }
    } catch (error) {
      console.log(error.response);
    }
    setLoadig(false);
  };
  console.log(meals);

  const fetchRandomMeal = () => {
    fetchMeals(randomMealURL);
  };

  useEffect(() => {
    fetchMeals(`${allMealsURL}${searchValue}`);
  }, [searchValue]);
  return (
    <AppContext.Provider
      value={{loading, meals, setSearchValue, fetchRandomMeal}}>
      {children}
    </AppContext.Provider>
  );
};

//custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export {AppContext, AppProvider};
