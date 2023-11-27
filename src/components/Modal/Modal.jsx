import {
    CircularProgressbarWithChildren,
    buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ChangingProgressProvider from './ChangingProgressProvider';
import { useState } from 'react';
import check from '../../assets/images/check-icon.png';
import { PropTypes } from 'prop-types';
import { useNavigate } from 'react-router-dom';

const Modal = ({ setShow }) => {
    const [showModal1, setShowModal1] = useState(true);
    const [showModal2, setShowModal2] = useState(false);
    const navigate = useNavigate();

    return (
        <section className='text-center text-neutral-gray-900 absolute inset-0 flex justify-center items-center bg-gray-750/70 backdrop-blur'>
            <article className='p-6 sm:min-w-[400px] min-w-[95%] bg-white rounded-xl shadow-modal'>
                {/* Shoes loading animation */}
                {showModal1 && (
                    <>
                        <h3 className='text-lg font-semibold sm:mb-8 mb-4'>
                            Gathering predictions
                        </h3>
                        <div className='h-40 h- w-40 mx-auto'>
                            <ChangingProgressProvider
                                setShowModal1={setShowModal1}
                                setShowModal2={setShowModal2}
                                values={[0, 20, 40, 60, 80, 100]}>
                                {(percentage) => (
                                    <CircularProgressbarWithChildren
                                        value={percentage}
                                        styles={buildStyles({
                                            pathColor: `#085700`,
                                            pathTransitionDuration: 0.6,
                                            trailColor: '#F2F4F7',
                                        })}>
                                        <p className='text-neutral-gray-600 font-medium mb-0.5 text-xs leading-[18px]'>
                                            Time to complete
                                        </p>
                                        <p className='font-medium text-2xl'>
                                            {percentage}%
                                        </p>
                                    </CircularProgressbarWithChildren>
                                )}
                            </ChangingProgressProvider>
                        </div>
                    </>
                )}

                {/* Shows report modal */}
                {showModal2 && (
                    <>
                        <img
                            src={check}
                            alt='check marc icon'
                            className='mb-5 mx-auto'
                        />

                        <h3 className='text-lg font-semibold mb-2'>
                            Predictions generated
                        </h3>

                        <p className='mb-8 text-sm text-neutral-gray-600'>
                            You can view report or download the .csv file
                        </p>

                        <div className='grid gap-3 sm:grid-cols-2'>
                            <button className='rounded-lg py-2.5 px-[18px] border border-gray-350 shadow-sm shadow-[#101828]/5 font-semibold'>
                                Download as .csv
                            </button>

                            <button
                                onClick={() => {
                                    setShow(false);
                                    navigate('/results');
                                }}
                                className='rounded-lg py-2.5 px-[18px] border border-green-850 bg-green-850 shadow-sm shadow-[#101828]/5 text-white font-semibold'>
                                View report
                            </button>
                        </div>
                    </>
                )}
            </article>
        </section>
    );
};

Modal.propTypes = {
    setShow: PropTypes.func,
};

export default Modal;
