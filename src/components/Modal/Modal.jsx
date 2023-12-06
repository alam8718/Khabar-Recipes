import React from "react";
import {useGlobalContext} from "../../Context";

function Modal() {
  const {selectedMeal, closeModal} = useGlobalContext();
  console.log(selectedMeal);

  const {
    strMealThumb: image,
    strInstructions: desc,
    strMeal: title,
    strSource: source,
  } = selectedMeal;

  return (
    <>
      <div className=" w-[100%]  fixed inset-0 grid place-items-center bg-gray-900/70 ">
        <div className=" bg-white w-[90%] lg:w-[40%] h-[90%] rounded-lg overflow-hidden  ">
          <div className="bg-red-300 h-[400px] overflow-hidden  ">
            <img src={image} alt="" className="w-full h-[400px] " />
          </div>
          <div className="my-4 px-4">
            <h1 className="text-3xl font-semibold mb-2 ">{title}</h1>
            <h1 className="text-xl mb-4">Cokking Instructions</h1>
            <p className="  text-lg overflow-y-scroll border h-[220px] text-justify p-2">
              {desc}
            </p>
          </div>
          <div className="flex flex-col gap-4 px-4">
            <a href={source} className="text-xl underline">
              Original Link
            </a>
            <button
              onClick={closeModal}
              className="bg-red-600/90 hover:bg-red-600/80 duration-300 py-2 rounded-xl mb-2 text-lg font-semibold">
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
