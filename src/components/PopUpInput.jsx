import React,{useState,useEffect}from 'react';


function Input() {

const [record, setRecord] = useState([]);
const [show, setShow] = useState(false);
const [modaldata, setModaldata] = useState({
  id: "",
  name: "",
  username: "",
  email: "",
  phone: "",
  website: "",
});

//get data for all user
const getData = () => {
  fetch("https://jsonplaceholder.typicode.com/users/")
    .then((resposne) => resposne.json())
    .then((res) => setRecord(res));
};
 useEffect(() => {
   getData();
 }, []);

//get data user by id
const showDetail = (id) => {
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((resposne) => resposne.json())
    .then((res) => setModaldata(res));
};

  return (
    
    
    <div  className="container  h-[700px] rounded-lg  ">

      {/* displays all employee data */}
      <h2 className=' justify-center mt-4  animate-pulse flex space-x-4'>Check More Records of Employees</h2>
      <div id='table' className="table-data-employees flex   justify-center  bg-white-100  ... focus:ring-2  ">
       
       <table  className='border' cellSpacing={10}>
        <thead className='h-14 bg-sky-400'>
         <tr  className='text-2xl'>
          <th  className='  border px-5'>No.</th>
          <th className='border text-left px-5  '>Name</th>
          <th className='border text-left px-5 '>Username</th>
          <th className='border p'>Show Details</th>
         </tr>
        </thead>
       <tbody>
       {record.map((names, index) => (
         <tr key={index}>
           <td className='px-5 border '>{names.id}.</td>
           <td className='px-5 py-5 border'>{names.name}</td>
           <td className='px-5 border'>{names.username}</td>
           <td>
             <button className='rounded-lg w-40 h-10 border transition ease-in-out delay-150  shadow-blue-500/50 ... hover:-translate-y-1 hover:scale-110 hover:bg-cyan-500 shadow-lg shadow-cyan-500/51 ...'
               onClick={() => {
                 setShow(true);
                 showDetail(names.id);
               }}
             >
               Get Details
             </button>
           </td>
         </tr>
       ))}
      </tbody>
     </table>
     </div>

   {/* displays employee detail data according to id */}
   {/* Modal Box  */}
   {show ? (
   
   <div className="modal fixed top-60 z-5 w-[100%] left-10 h-[150vh] flex justify-center align-center">
   <div className="modal-dialog bg-white rounded-lg h-80 text-xl ">
     <div className="modal-header p-2 h-22 ">
       {/* <button className='rounded-full ... bg-white px-3 text-2xl' onClick={() => setShow(false)} style={{ float: "right" }}>
         &times;
       </button> */}
         {/* <h4  className='text-left px-10 '> {modaldata.id}</h4> */}
         
       </div>
       <div className="modal-body ">
         <p className='text-left px-20'>
           <b ></b> <b className='rounded-full ... bg-blue-300 px-3 text-3xl'> {modaldata.id}</b>
         </p>
         <p className='text-left px-20 underline underline-offset-4 ... h-10'>
           <b>Name:</b> {modaldata.name}
         </p>
         <p className='text-left px-20 underline underline-offset-4 ... h-10 '>
           <b>Username:</b>  {modaldata.username}
         </p>
         <p  className='text-left px-20 underline underline-offset-4 ... h-10 '>
           <b>Email:</b> {modaldata.email}
         </p>
         <p  className='text-left px-20 underline underline-offset-4 ... h-10 '>
           <b>Phone:</b>  {modaldata.phone}
         </p>
         <p  className='text-left px-20 underline underline-offset-4 ... h-10 a'>
           <b>Website:</b> {modaldata.website}  
         </p>
        </div>
        <div className="modal-footer text-left px-20">
         <button
           onClick={() => setShow(false)}
           className="btn-close rounded-lg w-20  h-10 transition delay-300 duration-300 ease-in-out ...  hover:-translate-y-1 hover:scale-110 hover:bg-cyan-500 shadow-lg shadow-cyan-500/50 ... bg-gradient-to-r from-sky-400 to-blue-500 hover:from-sky-500 hover:to-sky-500 ..."
         >
           Close
         </button>
        </div>
       </div>
      </div>

     
      ) : null}
    </div>


    

   
  );
}

export default Input;



