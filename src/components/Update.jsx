import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import instance from "../api/api";

import Input from "../components/Input";
import SideBar from "../pages/SideBar";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [buttonStatus, setButtonStatus] = useState("Update");
  const [image, setImage] = useState(null);

  // untuk dikirim melalui form
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [photo, setPhoto] = useState("");
  useEffect(() => {
    const checkUserToken = () => {
      const userToken = localStorage.getItem("token");
      if (!userToken || userToken === "undefined") {
        return navigate("/login");
      }
    };
    checkUserToken();
  }, []);

  const fileChangeHandler = (e) => {
    // menggambil value bukan (e.target.value) tetapi (e.target.file[0])
    setPhoto(e.target.files[0]);
    // membuat object URL agar bisa di tampilkan gambar yang di pilih
    setImage(URL.createObjectURL.apply(e.target.files[0]));
  };

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
        data: data,
      };

      instance
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          setData(response.data.data);
          setName(response.data.data[0].name);
          setEmail(response.data.data[0].email);
          setPhone(response.data.data[0].phone);
          setCity(response.data.data[0].city);
          setAddress(response.data.data[0].address);
          setImage(response.data.data[0].photo);
          fetch(response.data.data[0].photo)
            .then((res) => res.blob())
            .then((blob) => {
              console.log(blob);
              const nameFile = response.data.data[0].name;
              const file = new File([blob], nameFile, { type: blob.type });
              setPhoto(file);
            });
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    };
    getData();
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // merubah status button ketika proses mengirim data
    setButtonStatus("Wait Brohhh...");
    let data = new FormData();
    data.append("name", name);
    data.append("email", email);
    data.append("phone", phone);
    data.append("address", address);
    data.append("city", city);
    data.append("photo", photo);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `https://frontendreq.pondokprogrammer.com/api/UP/${id}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: data,
    };

    instance
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));

        // merubah status button ketika proses mengirim selesai/ berhasil
        setButtonStatus("Create");

        // menavigasi ke halaman home
        navigate("/home");
      })
      .catch((error) => {
        console.log(error);

        // merubah status button ketika proses mengirim gagal
        setButtonStatus("Update");
      });
  };

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
      <>
        <SideBar />
        <div className="p-4 md:p-20 flex justify-center items-center">
          <main className="w-full md:w-[60%] flex flex-col gap-5">
            <header>
              <h1 className="text-[#6889FF] sm:absolute sm:left-[26%] left-[15%] absolute  font-[700] sm:text-2xl md:text-4xl">
                Ubah Wisata
              </h1>
            </header>
            <form
              action=""
              className="mt-28 flex flex-col md:flex-row justify-between gap-10"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col gap-6 md:gap-10 mt-[-85px] justify-center items-center">
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                />
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                />
                <Input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="text"
                />
                <Input
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  type="text"
                />
              </div>

              <div className="flex flex-col gap-6 md:gap-7 items-center mt-[-20px]">
                <input
                  className="xl:w-full md:w-[370px] w-[85%] xl:h-[50px] h-[50px] text-[#515151] placeholder:text-[#515151] outline-none rounded-[12px] pl-[25px] text-[15px] bg-[#F6F6F6]  "
                  required
                  type="text"
                  placeholder="Masukkan Alamat"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />

                <div className="input-gambar xl:bg-[#F6F6F6] relative h-[200px] md:h-[230px] rounded-[12px] flex justify-center items-center w-full md:w-[370px] overflow-hidden z-10">
                  <input
                    type="file"
                    className="xl:w-full h-full absolute  opacity-0 cursor-pointer"
                    onChange={fileChangeHandler}
                  />
                  <div className="order flex flex-col justify-center items-center gap-5 xl:w-full sm:w-[150%] h-full">
                    <img
                      src={image}
                      className="xl:w-full sm:w-[50%] h-full rounded-lg object-cover "
                    />
                  </div>
                </div>
                <button className="xl:w-[370px] w-[85%] h-[40px] rounded-md bg-[#6889FF] text-[#F6F6F6] font-bold">
                  {buttonStatus}
                </button>
              </div>
            </form>
          </main>
        </div>
      </>
    );
  }
};

export default Update;
