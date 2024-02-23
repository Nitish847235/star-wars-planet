import React from 'react';
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({mode,toggleMode}) => {
    


  return (
    <div className="flex justify-between items-center md:px-10 sm:px-8 px-4 min-h-[70px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] mb-5">
      <Link to='/' className="sm:flex hidden justify-start items-center space-x-2">
      <div className="sm:text-4xl text-2xl font-bold text-blue-500">Star</div>
      <div className="sm:text-4xl text-2xl font-bold text-red-500">War</div>
      <div className="sm:text-4xl text-2xl font-bold text-green-500">Plantes</div>
    </Link>
      <Link to='/' className="sm:hidden ">
        <div className='flex justify-start items-center space-x-2'>
            <div className="sm:text-4xl text-2xl font-bold text-blue-500">Star</div>
            <div className="sm:text-4xl text-2xl font-bold text-red-500">War</div>
        </div>
      <div className="sm:text-4xl text-2xl font-bold text-green-500">Plantes</div>
    </Link>
      <div className="flex justify-end py-4 mr-5">
        {/* <button onClick={toggleMode} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Toggle Mode
        </button> */}
        {mode === 'dark' ? <div className={`flex sm:flex-row flex-col-reverse gap-2 items-center cursor-pointer`} onClick={toggleMode} > Dark Mode <MdDarkMode fontSize={25} /></div> : <div className={`flex gap-2 items-center cursor-pointer`} onClick={toggleMode} > Light Mode <CiLight fontSize={25} /></div>}
      </div>
      </div>
  )
}

export default Navbar