import {createContext, useContext, useEffect, useState} from "react";

const AppContext = createContext();

const allMealsURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const randomMealURL = "https://www.themealdb.com/api/json/v1/1/random.php";

const AppProvider = ({children}) => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoadig] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [favourites, setFavourites] = useState(
    JSON.parse(localStorage.getItem("favourites")) || []
  );

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
  // console.log(meals);

  const fetchRandomMeal = () => {
    fetchMeals(randomMealURL);
  };

  // modal part
  const selectMeal = (idMeal, favouriteMeal) => {
    let meal;
    if (favouriteMeal) {
      meal = favourites.find((meal) => meal.idMeal === idMeal);
    } else {
      meal = meals.find((meal) => meal.idMeal === idMeal);
    }
    setSelectedMeal(meal);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  // modal part end

  // favourite part
  const addToFav = (idMeal) => {
    const alreadyThere = favourites.find((meal) => meal.idMeal === idMeal);
    if (alreadyThere) return;

    const meal = meals.find((meal) => meal.idMeal === idMeal);
    const updateFav = [...favourites, meal];
    setFavourites(updateFav);
    localStorage.setItem("favourites", JSON.stringify(updateFav));
  };
  console.log(favourites);

  const removeFromFav = (idMeal) => {
    const updateFav = favourites.filter((meal) => meal.idMeal !== idMeal);
    setFavourites(updateFav);
    localStorage.setItem("favourites", JSON.stringify(updateFav));
  };

  // favourite part ends

  useEffect(() => {
    fetchMeals(allMealsURL);
  }, []);

  useEffect(() => {
    fetchMeals(`${allMealsURL}${searchValue}`);
  }, [searchValue]);

  return (
    <AppContext.Provider
      value={{
        loading,
        meals,
        setSearchValue,
        fetchRandomMeal,
        showModal,
        closeModal,
        selectedMeal,
        selectMeal,
        favourites,
        addToFav,
        removeFromFav,
      }}>
      {children}
    </AppContext.Provider>
  );
};

//custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export {AppContext, AppProvider};
