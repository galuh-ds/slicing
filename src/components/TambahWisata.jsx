import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../api/api";

import { MdOutlineAddPhotoAlternate } from "react-icons/md";

import SideBar from "../pages/SideBar";

const TambahWisata = () => {
  let [loading, setLoading] = useState("");

  // state untuk mengubah status button
  const [buttonStatus, setButtonStatus] = useState("Create");

  // State untuk menavigasi
  const navigate = useNavigate();

  // State untuk menyimpan gambar preview sebelum dikirimkan
  const [image, setImage] = useState(null);

  // Fungsi untuk event onChange pada input type file
  const fileChangeHandler = (e) => {
    // Mengambil value bukan (e.target.value) tetapi (e.target.files[0])
    setPhoto(e.target.files[0]);

    // Membuat Object URL agar bisa ditampilkan gambar yang dipilih
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [photo, setPhoto] = useState(null);

  // Link gambar ketika user belum memilih gambar
  // const imageunchoosed =
  // "https://i0.wp.com/css-tricks.com/wp-content/uploads/2015/11/drag-drop-upload-2.gif";

  const handleSubmit = (e) => {
    // Agar tidak terjadi render ulang
    e.preventDefault();

    // Merubah status button ketika proses mengirim data
    setButtonStatus("Wait creating...");

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
      url: "https://frontendreq.pondokprogrammer.com/api/create",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: data,
    };

    // Jangan lupa mengimport instance dari file api.js
    instance
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));

        // Merubah status button ketika proses mengirim selesai/berhasil
        setButtonStatus("Tambah Wisata");

        // Menavigasi ke halaman Tabel
        navigate("/home");
      })
      .catch((error) => {
        console.log(error);

        // Merubah status button ketika proses mengirim gagal
        setButtonStatus("Create");
      });
  };

  // const [accounts, setAccount] = useState('')
  // const [namawisata, setNameWisata] = useState('')
  // const [email, setEmail] = useState('')
  // const [nomortelepon, setNomorTelepon] = useState('')
  // const [kota, setKota] = useState('')
  // const [alamat, setAlamat] = useState('')

  // const handleSubmit = (e) => {
  //   e.preventDefault()

  //   const account = {namawisata, password, email, confirpassword}
  //   console.log(account);
  //   setAccount(accounts.push, (account))
  //   console.log(accounts)
  //   setNameWisata('')
  //   setNomorTelepon('')
  //   setKota('')
  //   setAlamat('')
  // }
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

        <p className="absolute left-[20%] flex sm:w-[20%] md:w-[40%] sm:left-[21%] top-10 xl:top-28 md:top-14 bottom-[84%] sm:text-[30px] text-[20px] font-extrabold text-blue-400">
          Tambah Wisata
        </p>

        {/*  */}

        <div className=" justify-center sm:mt-[8%] mt-1 sm:px-[20%] px-[15%] w-[50%]">
          <div className="sm:w-[700%] w-[300%]">
            <form
              className="border-none rounded-lg px-3 border-r-neutral-300 w-[40%] h-[75%] border-b-neutral-300 "
              onSubmit={handleSubmit}
            >
              {/* <h4 className=' flex justify-center mt-5 text-blue-400 font-extrabold'>REGISTER</h4> */}
              <br />
              <br />
              <label htmlFor="username"></label>
              <br />
              <input
                type="text"
                className="border-2 outline-none w-[400%] xl:w-[100%] md:w-[250%] sm:h-14 h-10 sm:text-[100%] text-[10px] px-3 bg-gray-200  rounded-lg  "
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Masukkan Nama Wisata"
              ></input>
              {""}
              <br />
              <label htmlFor="username"></label>
              <br />
              <input
                type="email"
                className="border-2 outline-none w-[400%] xl:w-[100%] md:w-[250%] sm:h-14 h-10 sm:text-[100%] text-[10px] px-3 bg-gray-200 rounded-lg "
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Masukkan Email"
              ></input>
              <br />
              <label htmlFor="username"></label>
              <br />
              <input
                type="tel"
                className="border-2 w-[400%] xl:w-[100%] md:w-[250%] sm:h-14 h-10 sm:text-[100%] text-[10px] px-3 bg-gray-200  rounded-lg "
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                placeholder="Masukkan No. Telepon"
              ></input>
              <br />
              <label htmlFor="username"></label>
              <br />
              <input
                type="text"
                className="border-2 outline-none w-[400%] md:w-[250%] xl:w-[100%] sm:h-14 h-10 sm:text-[100%] text-[10px] px-3 bg-gray-200  rounded-lg "
                value={address}
                onChange={(event) => setAddress(event.target.value)}
                placeholder="Masukkan Kota"
              ></input>
              <br />
            </form>
          </div>
        </div>

        <div className=" flex sm:justify-center sm:px-[1%] px-[15%] sm:w-[65%]">
          <form
            className="border-none right-[9%] bottom-[1%] xl:absolute rounded-lg px-3 border-r-neutral-300 w-[40%] h-[75%] border-b-neutral-300 "
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              className="border-2 outline-none w-[327%] md:w-[282%] xl:w-[80%] xl:mt-[2%] mt-5 sm:h-14 h-10 sm:text-[100%] text-[10px] px-3 bg-gray-200 rounded-lg "
              value={city}
              onChange={(event) => setCity(event.target.value)}
              placeholder="Masukkan Alamat"
            ></input>

            <div className=" w-[327%] xl:w-[80%] md:w-[282%] xl:h-[280px] h-[220px] rounded-lg bg-gray-200 mt-5">
              <div className="flex justify-center">
                <div></div>
              </div>
              {/* Cara 2 */}
              <div className="flex justify-center xl:pr-12 pl-10">
                {image ? (
                  <img
                    src={image}
                    alt=""
                    onClick={() => {
                      document.querySelector("#input-file").click();
                    }}
                  />
                ) : (
                  <div
                    onClick={() => {
                      document.querySelector("#input-file").click();
                    }}
                  >
                    {/* <h5>Choose a file</h5> */}
                    <MdOutlineAddPhotoAlternate className="text-[700%] sm:w-[110%] mt-10 text-stone-800" />
                    <p>Tambahkan Gambar</p>
                  </div>
                )}
              </div>
            </div>

            {/* 
          <img
          className="img-create mt-10"
          src={image ? image : photo === null ? imageunchoosed : photo}
          alt=""
          // Event onClick menjalankan function agar ketika gambar diklik maka input dengan id: input-file juga diklik
          onClick={() => {
            document.querySelector("#input-file").click();
          }}
        /> */}

            {/* <div >
          <img
          className="img-create mt-10"
          src={image ? image : photo === null ? imageunchoosed : photo}
          alt=""
          // Event onClick menjalankan function agar ketika gambar diklik maka input dengan id: input-file juga diklik
          onClick={() => {
            document.querySelector("#input-file").click();
          }}
        />
        </div> */}

            <input
              type="file"
              // Input type file ini ini dihidden agar tidak tampil di Web
              hidden
              // Id diberikan agar ketika element gambar diklik input ini juga ikut diklik
              id="input-file"
              // Fungsi fileChangeHandler dipanggil di onChange
              onChange={fileChangeHandler}

              // Jangan dikasih value nanti error karena input type file tidak menerima value
            />

            <div className="xl:px-20">
              {/* <button type="submit" className="btn-primary">
          {buttonStatus}
        </button> */}
              <button
                type="submit"
                className="border-2 w-[329%] md:w-[282%] xl:w-[70%] h-12 font-extrabold text-white rounded-lg bg-blue-500 mt-3"
              >
                {" "}
                {buttonStatus}
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
};

export default TambahWisata;
