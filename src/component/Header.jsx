import React from 'react';
import { NavLink } from 'react-router-dom';
import {Button}from '@mui/material'
import AcUnitIcon from '@mui/icons-material/AcUnit';
const Header = () => {
    return (
        <div className='flex  h-[15vmin] my-3 justify-between items-center gap-2 py-2 px-4 max-w-[90vw]  w rounded-2xl mx-auto w-full bg-black text-white'>
            <div className='flex justify-between gap-2 items-center text-white'>
                <h1 className='text-2xl '><AcUnitIcon sx={{fontSize:'7vmin'}} className='text-emerald-500 text-2xl'/> Benton</h1>
            </div>
            <div className='flex  justify-between gap-2 items-center '>
                <NavLink to='/' className={({isActive})=>isActive?'text-emerald-400':''+ ' duration-700'}>
                    Home
                </NavLink>
                <NavLink to='/about' className={({isActive})=>isActive?'text-emerald-400':''+ ' duration-700'}>
                    About
                </NavLink>
                <NavLink to='/features' className={({isActive})=>isActive?'text-emerald-400':''+' duration-700'}>
                    Features
                </NavLink>
                <NavLink to='/pricing' className={({isActive})=>isActive?'text-emerald-400':''+' duration-700'}>
                    Pricing
                </NavLink>
                <NavLink to='/blog' className={({isActive})=>isActive?'text-emerald-400':''+' duration-700'}>
                    Blog
                </NavLink>
            </div>
            <Button variant='contained' sx={{height:40,

            }} className='!text-emerald-500 !bg-white'>Contact</Button>
        </div>
    );
};

export default Header;