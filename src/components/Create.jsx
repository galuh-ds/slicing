import { useState } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../api/api";

const Create = () => {
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
  const imageunchoosed =
    "https://i0.wp.com/css-tricks.com/wp-content/uploads/2015/11/drag-drop-upload-2.gif";

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
      url: "/create",
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
        setButtonStatus("Create");

        // Menavigasi ke halaman Tabel
        navigate("/home/tabel");
      })
      .catch((error) => {
        console.log(error);

        // Merubah status button ketika proses mengirim gagal
        setButtonStatus("Create");
      });
  };

  return (
    <div>
      <h1>Create</h1>
      <form 
        // Panggil fungsi handleSubmit dengan onSubmit
        onSubmit={handleSubmit}
      >
        <div className='border-none  rounded-lg px-3 border-r-neutral-300 w-[40%] h-[75%] border-b-neutral-300 '>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
             className='border-2 w-[100%] h-12 px-3 bg-gray-200  rounded-lg  '
          placeholder="Enter name"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
             className='border-2 w-[100%] h-12 px-3 bg-gray-200  rounded-lg  '
          placeholder="Enter email"
          required
        />
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
             className='border-2 w-[100%] h-12 px-3 bg-gray-200  rounded-lg  '
          placeholder="Enter Phone"
          required
        />
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
             className='border-2 w-[100%] h-12 px-3 bg-gray-200  rounded-lg  '
          placeholder="Enter Address"
          required
        />
         </div>
         <div className='border-none flex justify-center  rounded-lg px-3 border-r-neutral-300 w-[40%] h-[75%] border-b-neutral-300 '>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
             className='border-2 w-[100%] h-12 px-3 bg-gray-200  rounded-lg  '
          placeholder="Enter city"
          required
        />
       

        {/* Image Preview = gambar ditampilkan sebelum dikirim */}

        {/* Cara 1 */}
        <div >
        <img
          className="img-create mt-10"
          src={image ? image : photo === null ? imageunchoosed : photo}
          alt=""
          // Event onClick menjalankan function agar ketika gambar diklik maka input dengan id: input-file juga diklik
          onClick={() => {
            document.querySelector("#input-file").click();
          }}
        />
        </div>
        </div>

        {/* Cara 2 */}
        <div className="flex justify-center">
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
            <h5>Choose a file</h5>
            <p>Pilih gambar untuk diupload</p>
          </div>
          
        )}
        </div>

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
        <button type="submit" className="btn-primary">
          {buttonStatus}
        </button>
      </form>
    </div>
  );
};

export default Create;