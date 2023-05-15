import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  // const [accounts, setAccount] = useState('')
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      return false;
    } else {
      let data = new FormData();
      data.append("email", email);
      data.append("password", password);

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "https://frontendreq.pondokprogrammer.com/api/login",
        headers: {},
        data: data,
      };

      axios
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("userName", response.data.user.name);
          navigate("/home");
        })
        .catch((error) => {
          console.log(error);
        });
    }

    // const account = {email, password}
    // console.log(account);
    // setAccount(accounts.push, (account))
    // console.log(accounts)
    // setEmail('')
    // setPassword('')
  };

  return (
    <div className="flex justify-center py-[8%]">
      <form
        className="border-none rounded-lg px-3 border-r-neutral-300 w-[70%] md:w-[25%] sm:w-[25%] h-[65%] border-b-neutral-300 shadow-2xl ..."
        onSubmit={handleSubmit}
      >
        <h4 className="flex justify-center mt-14 text-blue-400 font-extrabold">
          LOGIN
        </h4>
        <br />
        <br />
        <label htmlFor="username"></label>
        <br />
        <input
          type="email"
          className="border-2 w-[100%] outline-none h-12 px-6 bg-gray-200  rounded-lg "
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Masukkan Email"
        ></input>
        <br />
        <label htmlFor="username"></label>
        <br />
        <input
          type="password"
          className="border-2 w-[100%] outline-none h-12 px-6 bg-gray-200 rounded-lg "
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Masukkan Password"
        ></input>
        <br />
        <button
          type="submit"
          onClick={handleSubmit}
          className="border-2 w-[100%] h-12 rounded-lg font-extrabold text-white bg-blue-500 mt-5"
          to="/home"
        >
          Button
        </button>
        <div className="flex">
          <input type="checkbox" class="default:ring-2 ..." />{" "}
          <p className="px-2 font-serif ">Ingatkan saya untuk login</p>
        </div>
        <p className="flex justify-center mt-4 font-">
          Belum memiliki akun,
          <Link to="/" className="text-blue-900 px-1">
            Register.
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
