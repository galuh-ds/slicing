import React from "react";
// import Form from "./pages/Form";
// import InputkeApi from "./components/InputkeApi";
// import Depedensi from "./components/Depedensi";
// import Input from "./components/PopUpInput";

// react-router-dom.
import Home from "./pages/Home";

// import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";

// import Ref from "./components/Ref";
import UbahWisata from "./components/UbahWisata";
import DataUser from "./components/DataUser";
import TambahWisata from "./components/TambahWisata";


import Create from "./components/Create";

import Detail from "./components/Detail";
import Update from "./components/Update";

const App = () => {
  return (
    // pages.

    <div className="w-full h-screen items-center gap-5">
      <BrowserRouter>
        {/* <Navbar/> */}
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/home"
            element={<Home />}
            // pakai  /  untuk menampilkan halaman pertama
          />

          <Route path="/datauser" element={<DataUser />} />
          <Route path="/tambahwisata" element={<TambahWisata />} />
          <Route path="/ubahwisata" element={<UbahWisata />} />


          <Route path="/create" element={<Create />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>

    // <div className="w-full h-screen flex justify-center items-center gap-10">
    // <>
    // {/* <StateContext className="w-full h-screen flex flex-col justify-between">

    //   <ProductCard />
    // </StateContext> */}
    // <SearchAndCard/>
    // </>
  );
};

export default App;
