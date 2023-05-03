import React, { useEffect, useState } from "react";

import { FiInfo } from "react-icons/fi";
import { RiDeleteBin4Line } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import instance from "../api/api";

import SideBar from "../pages/SideBar";

const DataUser = () => {
  const [data, setData] = useState([]);
  const [Loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [isDelete, setisDelete] = useState(false);

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
        url: "https://frontendreq.pondokprogrammer.com/api/index",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        data: data,
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
  }, [isDelete]);

  const handleDelete = (id) => {
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `https://frontendreq.pondokprogrammer.com/api/delete/${id}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: data,
    };

    instance
      .request(config)
      .then((response) => {
        console.log(`ini delete`);
        console.log(JSON.stringify(response.data));
        setisDelete(!isDelete);
      })
      .catch((error) => {
        console.log(error);
        setisDelete(!isDelete);
      });
  };

  if (Loading) {
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
      <>
        <SideBar className="mt-10"/>
        <p className="absolute xl:left-[7%] xl:right-[75%] sm:left-[18%] sm:w-[50%] left-[20%] top-5 bottom-[84%] sm:text-[30px] text-[80%] font-extrabold text-blue-400">
         <p className=" left-[30%] sm:left-[1%] w-[96px] sm:w-[100%] flex justify-center absolute">Tabel Wisata</p> 
        </p>
        <div className="w-full absolute xl:left-[5%] md:left-[15%] left-[30%] sm:w-full flex justify-center items-center p-3  sm:p-10 ">
          <table className="rounded-[20px] overflow-hidden shadow-lg">
            <thead>
              <tr className="bg-[#E7EAF0] text-[#212529]">
                <th className="text-center sm:font-[500] sm:text-[20px] text-[10px] sm:p-[20px] p-[14px]">No</th>
                <th className="text-center sm:font-[500] sm:text-[20px] text-[10px] sm:p-[20px] p-[14px]">Nama</th>
                <th className="text-center sm:font-[500] sm:text-[20px] text-[10px] sm:p-[20px] p-[14px]">Alamat</th>
                <th className="text-center sm:font-[500] sm:text-[20px] text-[10px] sm:p-[20px] p-[14px]">No Telefon</th>
                <th className="text-center sm:font-[500] sm:text-[20px] text-[10px] sm:p-[20px] p-[14px]">Email</th>
                <th className="text-center sm:font-[500] sm:text-[20px] text-[10px] sm:p-[20px] p-[14px]">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td className="text-center sm:text-[16px] text-[10px]">{index + 1}</td>
                  <td className="p-[5px] sm:text-[16px] text-[10px] sm:p-[10px]">{item.name}</td>
                  <td className="p-[5px] sm:text-[16px] text-[10px] sm:p-[10px]">{item.address}</td>
                  <td className="p-[5px] sm:text-[16px] text-[10px] sm:p-[10px]">{item.phone}</td>
                  <td className="p-[5px] sm:text-[16px] text-[10px] sm:p-[10px]">{item.email}</td>
                  <td className="sm:p-[10px]  flex gap-2">
                    <Link to={`/detail/${item.id}`}>
                      <button className="sm:min-w-[45px] min-w-[20px] min-h-[45px]  border-[1px] flex justify-center items-center sm:border-[#E8EBF0] border-white sm:text-[25px] text-[10px] rounded-[6px] text-[#465170] hover:scale-110">
                        <FiInfo />
                      </button>
                    </Link>

                    <Link to={`/update/${item.id}`}>
                      <button className="sm:min-w-[45px] min-w-[20px] min-h-[45px] hover:scale-110 border-[1px] flex justify-center items-center sm:border-[#E8EBF0] border-white sm:text-[25px] text-[10px] rounded-[6px] text-[#465170]">
                        <CiEdit />
                      </button>
                    </Link>
                    <button
                      className="sm:min-w-[45px] min-w-[20px] min-h-[45px] hover:scale-110 border-[1px] flex justify-center items-center sm:border-[#E8EBF0] border-white sm:text-[25px] text-[10px] rounded-[6px] text-[#465170]"
                      onClick={() => handleDelete(item.id)}
                    >
                      <RiDeleteBin4Line />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
};

export default DataUser;
