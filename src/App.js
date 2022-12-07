import React, { useRef, useState } from 'react';
import './App.css';
import user from "./img/penalty.png";

function App() {
  const [open , setOpen] = useState(false);
  const Menus = ['Profile', "Your apps", 'Settings', 'Logout'];

  const  menuRef =  useRef();
  const imgRef = useRef();

  window.addEventListener('click',(e)=>{
    if(e.target !== menuRef.current && e.target !==  imgRef.current){
        setOpen(false);
    }
  });
  return (
    <>
    <div className='h-screen bg-gray-200 flex justify-end p-4'>
     
        <img 
        ref={imgRef}
        src={user} onClick={() => setOpen(!open)} alt="user" className='h-10 w-10 object-cover  rounded-full absolute cursor-pointer'/>
         
      {
        open &&(
          <div ref={menuRef} className='pt-11'>
        <div className="bg-white p-4 w-52 shadow-lg  -left-14 top-12">
          <ul>
            {Menus.map((menu) =>(
                <li 
                onClick={() => setOpen(false)}
                className='p-2 text-lg cursor-pointer rounded hover:bg-blue-100' key={menu}>
                  {menu}
                </li>
              ))}
          </ul>
        </div>
        </div>
      )}
      
       </div>
  </>
   
  );
}

export default App;
