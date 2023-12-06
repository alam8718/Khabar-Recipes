import React from "react";
import {useGlobalContext} from "../../Context";

function Favourite() {
  const {favourites, selectMeal, removeFromFav} = useGlobalContext();
  return (
    <>
      <div className="bg-[#313628] w-full h-[200px]  px-10 flex flex-col gap-3  overflow-x-scroll ">
        <h1 className="text-white text-xl">Favourites</h1>
        <div className="flex gap-3">
        {favourites.map((meal) => {
          return (
            <div key={meal.idMeal} className=" w-[90px] h-[90px]">
              <div className="w-[90px] flex flex-col items-center gap-1">
                <img
                  onClick={() => selectMeal(meal.idMeal, true)}
                  src={meal.strMealThumb}
                  alt="favourite meal"
                  className="ring ring-purple-600 overflow-hidden w-20 h-20  rounded-full"
                />
                <div className=" ">
                  <button
                    onClick={() => removeFromFav(meal.idMeal)}
                    className="px-3 text-white mt-1  bg-red-600 rounded-lg hover:bg-red-500 duration-300">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        </div>
      </div>
    </>
  );
}

export default Favourite;
