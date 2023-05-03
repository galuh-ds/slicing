import React, { useState, useEffect } from "react";
import { BiHomeAlt2 } from "react-icons/bi";
import { TbClipboardText } from "react-icons/tb";
import { AiOutlinePlusSquare } from "react-icons/ai";

import { FiLogOut } from "react-icons/fi";

import { Link, NavLink, useNavigate } from "react-router-dom";

const SideBar = ({ setShowname, setIsShow, className }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkUserToken = () => {
      const userToken = localStorage.getItem("token");
      if (!userToken || userToken === "undefined") {
        return navigate("/login");
      }
    };
    checkUserToken();
  }, []);

  const [logout, setLoggout] = useState(false);
  const active = ({ isActive }) => (isActive ? "text-blue-400" : "text-black");
  return (
    <>
      <div>
        {/* sidebar */}
        <nav className="fixed xl:h-[62%] sm:h-[62%] w-16 border-none gap-5 xl:shadow-lg ... sm:shadow-lg ... bg-white xl:rounded-lg sm:rounded-lg text-black font-extrabold ">
          <nav className="absolute  inset-y-5 left-4 w-10 ...">
            {/* tag Link ini adalah pengganti a ( html ). */}
            <NavLink to="/home" className={active}>
              <BiHomeAlt2 className="sm:text-[30px] text-[20px]" />
            </NavLink>
            <NavLink to="/datauser" className={active}>
              <TbClipboardText className="sm:text-[30px] text-[20px] mt-7" />
            </NavLink>
            <NavLink to="/tambahwisata" className={active}>
              <AiOutlinePlusSquare className="sm:text-[30px] text-[20px] mt-7" />
            </NavLink>

            <div
              className={active}
              onClick={() => {
                setLoggout(true);
                setShowname(true);
                setIsShow(false);
              }}
            >
              <span className="flex gap-x-2">
                <i>
                  <FiLogOut className="sm:text-[30px] text-[20px] mt-40" />
                </i>
              </span>
            </div>
          </nav>
        </nav>

        <div
          className={`w-full h-sceen bg-black opacity-30 ${className}`}
          onClick={() => {
            setShowname(true);
            setIsShow(false);
          }}
        ></div>
      </div>
      {logout ? (
        <div className="top-0 bg-black bg-opacity-50 w-full h-screen flex justify-center items-center fixed z-50">
          <div className="xl:w-96 h-40 bg-white flex flex-col items-center justify-around rounded-xl relative py-5 gap-y-5">
            <span className="absolute top-[-8px] right-1 text-2xl text-blue-700">
              <Link onClick={() => setLoggout(false)}>&times;</Link>
            </span>
            <h2 className="text-blue-400 font-bold text-md ">
              Anda yakin ingin keluar
            </h2>
            <div className="flex justify-center  w-80 gap-10">
              <Link onClick={() => setLoggout(false)}>
                <button className="bg-slate-200 text-[.8em] h-10 w-16 font-bold rounded-md p-2 ">
                  Batal
                </button>
              </Link>
              <Link
                to={"/login"}
                onClick={() => {
                  localStorage.removeItem("token");
                  localStorage.removeItem("user");
                }}
              >
                <button className="bg-blue-500 text-[.8em] h-10 w-16 font-bold text-white rounded-md p-2">
                  Logout
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SideBar;
