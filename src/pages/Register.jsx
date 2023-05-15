import React, { useState } from 'react'
import axios from 'axios'
import { Link, Navigate } from 'react-router-dom'



const Register = () => {
    // const [accounts, setAccount] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirpassword, setConfirPassword] = useState('')

   
    const handleSubmit = (e) => {
        e.preventDefault()
       
         
        if( name === "" ||
            email === "" ||
            password === "" ||
            confirpassword == "" 
       ) {
        return false;
      }else { 
        let data = new FormData();
        data.append('name', name);
        data.append('email', email);
        data.append('password', password);
        data.append('password_confirmation', confirpassword);
        
        let config = {
          method: 'post',
          maxBodyLength: Infinity,
          url: 'https://frontendreq.pondokprogrammer.com/api/register',
          headers: {},
          data : data
        };
        
        axios.request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          Navigate("/login")
        })
        .catch((error) => {
          console.log(error);
        });
  
      }

      

        // const account = {name, password, email, confirpassword}
        // console.log(account);
        // setAccount(accounts.push, (account))
        // console.log(accounts)
        // setName('')
        // setPassword('')
    }

  return (
    <div  className='flex justify-center py-[8%]'>
    <form className='border-none shadow-2xl rounded-lg px-3  border-r-neutral-300 w-[70%] md:w-[25%] sm:w-[25%] h-[75%] border-b-neutral-300 ' onSubmit={handleSubmit}>
      <h4 className=' flex justify-center mt-5 text-blue-400 font-extrabold'>REGISTER</h4>
     <br />
     <br />
        <label htmlFor='username'></label>
        <br/>
        <input
        type='text'
        className='border-2 w-[100%] outline-none h-12 px-3 bg-gray-200  rounded-lg  '
        value={name}
        onChange={(event) => setName(event.target.value)} 
        placeholder='Masukkan Nama'>
       
        </input>{''}
        <br/>
        <label htmlFor='username'></label>
        <br/>
        <input
        type='email'
        className='border-2 w-[100%] outline-none h-12 px-3 bg-gray-200 rounded-lg '
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder='Masukkan Email'></input>
        <br/>
        <label htmlFor='username'></label>
        <br/>
        <input
        type='password'
        className='border-2 w-[100%] outline-none h-12 px-3 bg-gray-200 rounded-lg '
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder='Masukkan Password'></input>
        <br/>
        <label htmlFor='username'></label>
        <br/>
        <input
        type='password'
        className='border-2 w-[100%] outline-none h-12 px-3 bg-gray-200 rounded-lg '
        value={confirpassword}
        onChange={(event) => setConfirPassword(event.target.value)}
        placeholder='Masukkan Komfirmasi Password'></input>
        <br/>
       
        <button
        type='submit'
        onClick={handleSubmit}
        className='border-2 w-[100%] outline-none h-12 font-extrabold text-white rounded-lg bg-blue-500 mt-3'      
        >Button</button>
       
        <p className='flex justify-center mt-1 font-'>Sudah memiliki akun,
          <Link to="/login" className='text-blue-900 px-1' >login.</Link>
        </p>
        <p className='mt-5'></p>
        

    </form>
    </div>
  )
}

export default Register