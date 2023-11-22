// import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { HiMenuAlt2 } from 'react-icons/hi';
import { BsXCircle } from 'react-icons/bs';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className='bg-green-80 border-b border-dark-900 text-dark-900 font-medium'>
            <div className='container sm:px-16 px-10 mx-auto py-5'>
                <nav>
                    <ul className='flex justify-between items-center'>
                        <div className='md:flex md:justify-between md:items-center hidden'>
                            <li>
                                <Link
                                    className='hover:text-green-550 active:text-green-550 focus:text-green-550 duration-500'
                                    to='#'>
                                    Resources
                                </Link>
                            </li>
                            <li className='ml-8'>
                                <Link
                                    className='hover:text-green-550 active:text-green-550 focus:text-green-550 duration-500'
                                    to='#'>
                                    Get help
                                </Link>
                            </li>
                        </div>

                        <li>
                            <Link
                                to='/'
                                className='text-black tracking-[1.2px] font-impact text-2xl hover:text-green-550 active:text-green-550 focus:text-green-550 duration-500'>
                                Team 175
                            </Link>
                        </li>

                        <li>
                            <Link
                                to='/create-account'
                                className='md:inline hidden text-white bg-green-1000 border-white rounded-lg px-5 py-2  hover:bg-white hover:border-green-1000 hover:text-green-550  active:bg-white active:border-green-1000 active:text-green-550 focus:bg-white focus:border-green-1000 focus:text-green-550 duration-500'>
                                Get Predictions
                            </Link>

                            <button
                                className='inline md:hidden'
                                onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                {isMenuOpen ? (
                                    <BsXCircle className='text-2xl hover:text-green-550 active:text-green-550 focus:text-green-550 duration-700' />
                                ) : (
                                    <HiMenuAlt2 className='text-2xl hover:text-green-550 active:text-green-550 focus:text-green-550 duration-700' />
                                )}
                            </button>
                        </li>
                    </ul>

                    {isMenuOpen && (
                        <ul
                            id='mobileMenu'
                            className='animate-fadeIn text-lg text-center pt-8 duration-500 md:hidden block'>
                            <li className='mb-5'>
                                <Link
                                    onClick={() => setIsMenuOpen(false)}
                                    className='hover:text-green-550 active:text-green-550 focus:text-green-550 duration-500'
                                    to='#'>
                                    Resources
                                </Link>
                            </li>
                            <li className='mb-5'>
                                <Link
                                    onClick={() => setIsMenuOpen(false)}
                                    className='hover:text-green-550 active:text-green-550 focus:text-green-550 duration-500'
                                    to='#'>
                                    Get help
                                </Link>
                            </li>
                            <Link
                                to='/create-account'
                                className=' text-white bg-green-1000 border-white rounded-lg px-5 py-2  hover:bg-white hover:border-green-1000 hover:text-green-550  active:bg-white active:border-green-1000 active:text-green-550 focus:bg-white focus:border-green-1000 focus:text-green-550 duration-500'>
                                Get Predictions
                            </Link>
                        </ul>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Header;
