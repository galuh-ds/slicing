import React, { useState } from "react";
import { RiSearchLine } from "react-icons/ri";

const Search = ({ onChange }) => {
  const [valueInput, setValueInput] = useState("");

  const handleSearch = (e) => {
    onChange(valueInput);
    setValueInput(e.target.value);
  };

  return (
    <div className="flex justify-center sm:top-8 top-5  xl:left-[16%] md:left-2 sm:w-[75%] sm:right-10 right-[4%] relative  ">
      <form action="">
        <div className="relative sm:w-[100%] w-[70%] flex items-center left-[70%]">
          <RiSearchLine
            alt=""
            className="w-5 sm:h-5 h-3 text-[30px] text-neutral-600 absolute sm:ml-3 ml-1 pointer-events-none "
          />
          <input
            type="text"
            name="search"
            placeholder="Cari Wisata ..."
            value={valueInput}
            onChange={(e) => onChange(e.target.value)}
            onInput={(e) => handleSearch(e)}
            autoComplete="off"
            aria-label="Cari Wisata ..."
            className="pr-3 sm:pl-10 pl-7 sm:py-2 py-1 bg-neutral-100 inset-x-0 top-0 sm:w-96 w-[90%] placeholder-neutral-700 outline-none font-light text-black sm:text-[100%] text-[70%]  rounded-2xl border-none  "
          />
          <button
            type="submit"
            // onClick={handleSearch}
            className="border-2 sm:w-[23%] w-[30%] absolute inset-x-[68%] sm:left-[80%] md:left-[77%] left-[70%]  sm:h-11 h-[110%] rounded-full font-medium text-white sm:text-[100%] text-[60%]  bg-blue-500 "
            // to="/home"
          >
            Cari
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
