import { Button, Stack ,TextField} from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <div className='w-full h-[50vmin] bg-gray-900 sm:px-[7vmin] sm:py-[5vmin] flex flex-col gap-3 justify-end'>
            {/* upper */}
            <div className='flex  justify-between items-center  py-3 w-full  mx-auto border-b-2 border-b-gray-600'>
                <div className='flex flex-col  gap-2 justify-items-start'>
                    <h1 className='text-white sm:text-3xl mb-3'>Benton</h1>
                    <p className='text-left text-white sm:text-sm '>
                        Deliver instant, Human like support with our AI assistant
                    </p>
                    <Stack direction='row' gap={1}>
                        <TextField placeholder='Your Email Address' /><Button>Subscribe</Button>
                    </Stack>
                </div >
                <div className='flex flex-col  gap-2 justify-items-start'>
                    <h1 className='sm:text-xl text-white'>Quick Links</h1>
                    <div className='flex flex-col  gap-2 justify-items-start sm:text-sm text-white'>

                    <p>Home </p>
                    <p>About </p>
                    <p>Features </p>
                    <p>Pricing </p>
                    <p>Blog </p>
                    </div>
                </div >
                <div className='flex flex-col  gap-2 justify-items-start'>
                     <h1 className='sm:text-xl text-white'>Quick Links</h1>
                      <div className='flex flex-col  gap-2 justify-items-start sm:text-sm text-white'>

                    <p>Home </p>
                    <p>About </p>
                    <p>Features </p>
                    <p>Pricing </p>
                    <p>Blog </p>
                    </div>
                </div>
                <div className='flex flex-col  gap-2 justify-items-start'>
                     <h1 className='sm:text-xl text-white'>Quick Links</h1>
                      <div className='flex flex-col  gap-2 justify-items-start sm:text-sm text-white'>

                    <p>Home </p>
                    <p>About </p>
                    <p>Features </p>
                    <p>Pricing </p>
                    <p>Blog </p>
                    </div>
                </div>
            </div>
            {/* lower */}
            <div className=' w-fit mx-auto '>
                <p className='text-white'>@Team <span className='text-emerald-400'>Sabers</span></p>
            </div>
        </div>
    );
};

export default Footer;