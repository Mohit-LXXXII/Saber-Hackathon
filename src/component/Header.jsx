import React from 'react';
import { NavLink } from 'react-router-dom';
import {Button}from '@mui/material'
const Header = () => {
    return (
        <div className='flex h-[15vmin] my-3 justify-between items-center gap-2 py-2 px-4 max-w-[90vw]  w rounded-2xl mx-auto w-full bg-white '>
            <div className='flex justify-between gap-2 items-center'>
                <h1 className='text-2xl '>Benton</h1>
            </div>
            <div className='flex justify-between gap-2 items-center'>
                <NavLink to='/about' className={({isActive})=>isActive?'text-emerald-400':''}>
                    About
                </NavLink>
                <NavLink to='/features' className={({isActive})=>isActive?'text-emerald-400':''}>
                    Features
                </NavLink>
                <NavLink to='/pricing' className={({isActive})=>isActive?'text-emerald-400':''}>
                    Pricing
                </NavLink>
                <NavLink to='/blog' className={({isActive})=>isActive?'text-emerald-400':''}>
                    Blog
                </NavLink>
            </div>
            <Button sx={{height:40}}>Contact</Button>
        </div>
    );
};

export default Header;