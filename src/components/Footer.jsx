import React from 'react';

const Footer = () => {
    return (

        <div className='bg-slate-800 text-white border border-slate-800'>
            <div className='mycontainer flex justify-between items-center px-10 py-2 h-12'>
                <div className='logo font-bold text-white text-xl'>
                    <span className='text-green-500'>&lt;</span>
                    <span>Pass</span>
                    <span className='text-green-500'>OP/&gt;</span>
                </div>
                <div className='my-3 p-1 text-xs text-white mx-8'>
                   <p>Manage your Passwords by using your own PassWord Manager PassOP</p>
                   <p>Created by Ankita Nadarge</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
