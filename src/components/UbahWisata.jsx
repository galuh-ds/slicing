import React, { useState } from "react";

import SideBar from "../pages/SideBar";

const UbahWisata = () => {
  const [accounts, setAccount] = useState("");
  const [namawisata, setNameWisata] = useState("");
  const [email, setEmail] = useState("");
  const [nomortelepon, setNomorTelepon] = useState("");
  const [kota, setKota] = useState("");
  const [alamat, setAlamat] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const account = { namawisata, password, email, confirpassword };
    console.log(account);
    setAccount(accounts.push, account);
    console.log(accounts);
    setNameWisata("");
    setNomorTelepon("");
    setKota("");
    setAlamat("");
  };
  return (
    <>
      <SideBar />
      <p className="absolute xl:left-[7%] xl:right-[65%]  sm:left-[18%] top-10 bottom-[84%] text-[30px] font-extrabold text-blue-400">
        Ubah Wisata
      </p>

      {/*  */}

      <div className=" justify-center py-[7%] px-[20%] w-[50%]">
        <div className="sm:w-[700%] w-[300%]">
          <form
            className="border-none  rounded-lg px-3 border-r-neutral-300 w-[40%] h-[75%] border-b-neutral-300 "
            onSubmit={handleSubmit}
          >
            {/* <h4 className=' flex justify-center mt-5 text-blue-400 font-extrabold'>REGISTER</h4> */}
            <br />
            <br />
            <label htmlFor="username"></label>
            <br />
            <input
              type="text"
              className="border-2 outline-none w-[100%] h-12 px-3 bg-gray-200  rounded-lg  "
              value={namawisata}
              onChange={(event) => setNameWisata(event.target.value)}
            ></input>
            {""}
            <br />
            <label htmlFor="username"></label>
            <br />
            <input
              type="text"
              className="border-2 outline-none w-[100%] h-12 px-3 bg-gray-200 mt-5 rounded-lg "
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            ></input>
            <br />
            <label htmlFor="username"></label>
            <br />
            <input
              type="text"
              className="border-2 outline-none w-[100%] h-12 px-3 bg-gray-200 mt-5 rounded-lg "
              value={nomortelepon}
              onChange={(event) => setNomorTelepon(event.target.value)}
            ></input>
            <br />
            <label htmlFor="username"></label>
            <br />
            <input
              type="text"
              className="border-2 outline-none w-[100%] h-12 px-3 bg-gray-200 mt-5 rounded-lg "
              value={kota}
              onChange={(event) => setKota(event.target.value)}
            ></input>
            <br />
          </form>
        </div>
      </div>

      <div className=" flex justify-center ">
        <form
          className="border-none right-[9%] bottom-[1%] absolute rounded-lg px-3 border-r-neutral-300 w-[40%] h-[75%] border-b-neutral-300 "
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            className="border-2 outline-none w-[80%] h-12 px-3 bg-gray-200 rounded-lg "
            value={alamat}
            onChange={(event) => setAlamat(event.target.value)}
          ></input>

          <div className=" w-[80%] h-[230px] rounded-lg bg-gray-200 mt-11">
            <div className="flex justify-center">
              <img
                src="./src/assets/5.svg"
                alt="card"
                className="w-[130%] rounded-lg "
              />
            </div>
          </div>

          <div className="px-20">
            <button
              type="submit"
              className="border-2 w-[70%]  h-12 font-extrabold text-white rounded-lg bg-blue-500 mt-3"
            >
              Button
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UbahWisata;
