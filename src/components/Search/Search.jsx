import React, {useState} from "react";
import {useGlobalContext} from "../../Context";

function Search() {
  const [text, setText] = useState("");
  const {setSearchValue, fetchRandomMeal} = useGlobalContext();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      setSearchValue(text);
    }
  };

  const handleRandomMeal = ()=>{
    setSearchValue("")
    setText("")
    fetchRandomMeal()
  }

  return (
    <>
      <div className="my-5 pl-4 container mx-auto">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={text}
            onChange={handleChange}
            placeholder="Type your meals name"
            className="bg-gray-200 p-2 rounded-md placeholder:text-gray-700 outline-none focus:ring focus:ring-purple-500"
          />
          <button
            className="px-4 py-2 mx-3 bg-purple-400 rounded-md hover:bg-purple-500 duration-300 "
            type="submit">
            Search
          </button>
          <button
            onClick={handleRandomMeal}
            className="px-4 py-2 mx-3 bg-purple-400 rounded-md hover:bg-purple-500 duration-300"
            type="button">
            Surprise ME !!!
          </button>
        </form>
      </div>
    </>
  );
}

export default Search;
