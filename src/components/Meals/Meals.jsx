import React, {useContext} from "react";
import {AppContext, useGlobalContext} from "../../Context";
import {AiTwotoneLike} from "react-icons/ai";
import loadingGif from "../Meals/Walk.gif";

function Meals() {
  const {meals, loading} = useGlobalContext();

  //--------------------------------------------------------------------------
  //* if we don't use custom hook than we have to write these 2 lines
  //* first line is basically using the AppContext by using useContext function and store it in context variable so that from the AppContext we can access all the things.
  //* second line is basically destructuring the meals from the context
  //! const context = useContext(AppContext)
  //!  const {meals} = context
  //--------------------------------------------------------------------------

  if (meals.length < 1) {
    return (
      <div className="h-screen flex justify-center items-center ">
        <h1 className="text-2xl font-semibold">
          No Meals matched your search terms.{" "}
          <span className="text-red-600">PLEASE try again !00!</span>
        </h1>
      </div>
    );
  }

  return (
    <>
      {loading ? (
        <div className="flex justify-center h-screen items-center ">
          <img src={loadingGif} width={100} alt="loading image " />
        </div>
      ) : (
        <div className="my-20  container mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {meals.map((meal) => {
            const {idMeal, strMeal: title, strMealThumb: image} = meal;

            return (
              <div
                key={idMeal}
                className="bg-gray-200/80 shadow-lg pb-4 rounded-xl  flex flex-col  gap-3 ">
                <img
                  src={image}
                  className="w-full h-[300px] lg:h-[350px] rounded-lg overflow-hidden  "
                  alt="meal image"
                />
                <div className="flex justify-between mx-5">
                  <h1 className="text-xl">{title}</h1>
                  <a href="#" className="hover:scale-90 duration-300">
                    <AiTwotoneLike size={30} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default Meals;
