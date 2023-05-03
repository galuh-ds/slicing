import React from 'react'
import { NavLink } from "react-router-dom";

const Card = ({key,src,alt,name,address,city,phone,id}) => {
  return (
    <div key={key} className='w-[45%] sm:w-[30%] h-[170px] sm:h-[250px] rounded-[8px] bg-white drop-shadow-xl shadow-[4px_4px_12px_rgba(0,0,0,0,25)]'>
        <div className='img-container w-full h-[90px] sm:h-[180px] overflow-hidden'>
          <NavLink to={`/detail/${id}`}>
          <img className='w-[100%] sm:w-[100%] h-[100%]  sm:h-full object-cover rounded-t-lg hover:scale-100 hover:brightness-50 ' src={src} alt={alt} />
          </NavLink>

        </div>
        <div className='desc p-[15px] pt-[10px] flex flex-col'>
            <p className='text-[10px] font-[700] mb-1'>{name}</p>
            <p className='text-[12px] text-black font-bold  '>{address},{city}</p>
            <p className='text-[10px] font-[400] '>{phone}</p>
        </div>
    </div>
  )
}

export default Card