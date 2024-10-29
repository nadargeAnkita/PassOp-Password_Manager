import React from 'react';

const Navbar = () => {
  return (
    <nav className='bg-slate-800 text-white'>
        <div className='mycontainer flex justify-between items-center px-9 py-6 h-12'>
        <div className='logo font-bold text-white text-2xl'>
            <span className='text-green-500'>&lt;</span>
            <span>Pass</span>
            <span className='text-green-500'>OP/&gt;</span>
            </div>
      

      <button className='text-white bg-slate-800 my-5 rounded-full flex justify-between items-center mx-3 hover:border border-green-500'>
        <img className='invert w-10 p-1' src="/icons/github.svg" alt="github logo" />
        <span className='font-bold px-2'>GitHub</span>
      </button>



      </div>
    </nav>
  );
}

export default Navbar;
