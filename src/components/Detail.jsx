import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import Back from "../assets/Back.png";
import { MdOutlineLocationOn } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { TbPhone } from "react-icons/tb";

// import Location from "../assets/Location.png";
// import Email from "../assets/Email.svg";
// import phone from "../assets/Phone.png";
import instance from "../api/api";

const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
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

  useEffect(() => {
    setLoading(true);
    const getData = () => {
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `https://frontendreq.pondokprogrammer.com/api/show/${id}`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };

      instance
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          setData(response.data.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    };
    getData();
  }, []);

  if (loading) {
    return (
      <div class="loader">
        <div class="dot dot-1"></div>
        <div class="dot dot-2"></div>
        <div class="dot dot-3"></div>
        <div class="dot dot-4"></div>
        <div class="dot dot-5"></div>
      </div>
    );
  } else {
    return (
      <div className="w-full p-5 flex justify-center items-center">
        {data.map((item) => {
          return (
            <main key={item.id} className="w-[60%]">
              <header className="flex items-center gap-5 mt-5">
                <NavLink to="/datauser">
                  {" "}
                  <img src={Back} className="w-[15px]" />
                </NavLink>
                <h1 className="xl:text-[25px] w-[100%] font-[700]">{item.name}</h1>
              </header>
              <div className="flex flex-col gap-5">
                <div className="img-container w-full mt-5 rounded-[8px] xl:h-[400px] overflow-hidden">
                  <img
                    src={item.photo}
                    className="w-full xl:h-full sm:h-[60%] rounded-lg object-cover"
                    alt=""
                  />
                </div>
                <div className="description flex flex-col gap-2 pl-1 mt-6">
                  <div className="location flex items-center gap-3">
                    {/* <img className="w-[25px]" src={Location} alt="" /> */}
                    <MdOutlineLocationOn className="w-[25px] bg-blue-500 text-white rounded-md h-5 "/>
                    <p className="text-[15px] font-[400]">
                      {item.address},{item.city}
                    </p>
                  </div>

                  <div className="email flex items-center gap-3">
                    {/* <img className="w-[25px]" src={Email} alt="" /> */}
                    <HiOutlineMail className="w-[25px] bg-blue-500 text-white rounded-md h-5 "/>
                    <p className="text-[15px] font-[400]">{item.email}</p>
                  </div>
                  <div className="phone flex items-center gap-3">
                    <TbPhone className="w-[25px] bg-blue-500 text-white rounded-md h-5 "/>
                    <p className="text-[15px] font-[400]">{item.phone}</p>
                  </div>
                </div>
              </div>
            </main>
          );
        })}
      </div>
    );
  }
};

export default Detail;
