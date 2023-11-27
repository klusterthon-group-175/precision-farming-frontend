import { Link } from 'react-router-dom';
import { useState } from 'react';
import { HiMenuAlt2 } from 'react-icons/hi';
import { BsXCircle } from 'react-icons/bs';
import { PropTypes } from 'prop-types';

const Header = ({ path }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    let bg;
    if (path === '/') {
        bg = 'bg-green-80';
    } else {
        bg = 'bg-white';
    }

    return (
        // Header
        <header
            className={`border-b ${bg} animate-fadeIn duration-500 border-dark-900 text-dark-900 font-medium`}>
            <div className='container sm:px-16 px-10 mx-auto py-5'>
                {/* Navbar */}
                <nav>
                    <ul className='flex justify-between items-center'>
                        <div className='md:flex md:justify-between md:items-center hidden'>
                            <li>
                                <Link
                                    className='hover:text-green-550 active:text-green-550 focus:text-green-550 duration-500'
                                    to='#'>
                                    Give feedback
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
                            <div>
                                <Link
                                    to='/create-account'
                                    className='md:inline hidden border text-white bg-green-1000 border-green-1000 rounded-lg px-5 py-2  hover:bg-white hover:border-green-550 hover:text-green-550  active:bg-white active:border-green-550 active:text-green-550 focus:bg-white focus:border-green-550 focus:text-green-550 duration-500'>
                                    Get Predictions
                                </Link>
                            </div>

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

                    {/* Mobile navbar dropdown */}
                    {isMenuOpen && (
                        <ul
                            id='mobileMenu'
                            className='animate-fadeIn text-lg text-center pt-8 duration-500 md:hidden block'>
                            <li className='mb-5'>
                                <Link
                                    onClick={() => setIsMenuOpen(false)}
                                    className='hover:text-green-550 active:text-green-550 focus:text-green-550 duration-500'
                                    to='#'>
                                    Give feedback
                                </Link>
                            </li>
                            <Link
                                to='/create-account'
                                className=' text-white  border bg-green-1000 border-green-1000 rounded-lg px-5 py-2  hover:bg-white hover:border-green-550 hover:text-green-550  active:bg-white active:border-green-550 active:text-green-550 focus:bg-white focus:border-green-550 focus:text-green-550 duration-500'>
                                Get Predictions
                            </Link>
                        </ul>
                    )}
                </nav>
            </div>
        </header>
    );
};

Header.propTypes = {
    path: PropTypes.string,
};

export default Header;
