import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "./SideBar";
import instance from "../api/api";
import Card from "../components/Card";
import Search from "../components/Search";


const Home = () => {
  const [loading, setLoading] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([])
  const userName = localStorage.getItem("userName");

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

  // --------------

  useEffect(() => {
    setLoading(true);

    let getData = () => {
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "https://frontendreq.pondokprogrammer.com/api/index",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        data:data,
      };

      instance(config) //sesuain sama variabel yang kita buat
        .then((response) => {
          console.log(JSON.stringify(response.data));
          setData(response.data.data);
          setFilteredData(response.data.data)
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    };
    getData();
  }, []);

  const handleSearch = (valueInput)=>{
    const filterData = data.filter((item)=>{
      const value = valueInput.toLowerCase()
      const itemData = item.name.toLowerCase()
      return itemData.includes(value)
    })
    if (valueInput.length > 0 && filterData.length === 0) {
      setFilteredData([])
    }else{
      setFilteredData(filterData)
    }
  }

 
  //
  if (loading) {
    return (
      <>
      <div class="loader">
        <div class="dot dot-1"></div>
        <div class="dot dot-2"></div>
        <div class="dot dot-3"></div>
        <div class="dot dot-4"></div>
        <div class="dot dot-5"></div>
      </div>
      <Search onChange={handleSearch}/>
      </>
    );
  } else {
    return (
      <>
      
        <Search onChange={handleSearch}/>
        <div className="flex md:px-[11%] xl:px-[13%] px-[15%] absolute font-bold text-[60%]  sm:text-[100%] ">
          <h1>Hallo, {userName}</h1>
        </div>

      <SideBar/>

        <div className="content xl:w-[80%] flex flex-wrap sm:gap-x-[30px] md:gap-x-[20px] gap-x-[10px] sm:gap-y-[30px] gap-y-[10px] justify-center md:py-[7%] xl:py-[5%] py-[10%] xl:ml-36 md:ml-[9%] ml-10 ">
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <Card
              key={item.id}
              id={item.id}
              src={item.photo}
              alt={item.name}
              nama={item.name}
              address={item.address}
              city={item.city}
              phone={item.phone}
            />
            ))
         
          ):(
             <div className="w-full h-[350px] flex justify-center items-center">
              <h1>Hasil Tidak Ditemukan</h1>
             </div>
          )}
        </div>

        {/* copyrigth */}
        <div className="bg-blue-500 mt-[30%] sm:h-40 h-20">
          <p className="flex justify-center"></p>
          <p className="flex justify-center text-white sm:text-[100%] text-[70%] font-light sm:mt-16 mt-5">
            Footer Component
          </p>
          <p className="flex justify-center text-white sm:text-[100%] text-[70%] font-light">
            Copyrigth 2023 All rigth reserved
          </p>
        </div>
      </>
    );
  }
};

export default Home;
