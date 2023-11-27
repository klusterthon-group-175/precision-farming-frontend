import field from '../../assets/images/result.png';

const Results = () => {
    return (
        <section
            className='bg-no-repeat text-center sm:py-0 py-5 bg-center min-h-screen flex justify-center items-center bg-white text-neutral-gray-900'
            style={{
                backgroundImage: `url(${field})`,
            }}>
            <article className='bg-white p-6 rounded-xl border border-green-350 shadow-modal sm:max-w-md max-w-[90%]'>
                <h3 className='text-lg font-semibold mb-2'>
                    Generated insights
                </h3>
                <p className='mb-5 text-neutral-gray-600 text-sm'>
                    Based on your provided data, here are your predictions
                </p>
                <div className='text-start mb-10'>
                    <div className='grid sm:grid-cols-2 sm:grid-rows-2 gap-x-[34.5px] gap-y-8 mb-8'>
                        <div className='font-medium'>
                            <h4 className='text-sm  text-neutral-gray-800 mb-2'>
                                Optimal time for planting:
                            </h4>
                            <p className='underline'>
                                {!null && 'November/December'}
                            </p>
                        </div>

                        <div className='font-medium'>
                            <h4 className='text-sm  text-neutral-gray-800 mb-2'>
                                Optimal time for harvest:
                            </h4>
                            <p className='underline'>
                                {!null && 'November/December'}
                            </p>
                        </div>

                        <div>
                            <h5 className='text-neutral-gray-800 text-xs leading-5'>
                                Crop location
                            </h5>
                            <p className='text-sm font-medium leading-6'>
                                {!null && 'Nigeria'}
                            </p>
                        </div>

                        <div>
                            <h5 className='text-neutral-gray-800 text-xs leading-5'>
                                Crop type
                            </h5>
                            <p className='text-sm font-medium leading-6'>
                                {!null && 'Maize'}
                            </p>
                        </div>
                    </div>

                    <div className='grid sm:grid-cols-3 sm:row-auto gap-[23px]'>
                        <div>
                            <h5 className='text-neutral-gray-800 text-xs leading-5'>
                                Ideal soil conditions
                            </h5>
                            <p className='font-medium text-sm'>
                                {!null && '----'}
                            </p>
                        </div>

                        <div>
                            <h5 className='text-neutral-gray-800 text-xs leading-5'>
                                Weather forecast
                            </h5>
                            <p className='font-medium text-sm leading-normal'>
                                {!null && '----'}
                            </p>
                        </div>

                        <div>
                            <h5 className='text-neutral-gray-800 text-xs leading-5'>
                                Expected yield
                            </h5>
                            <p className='font-medium text-sm'>
                                {!null && '----'}
                            </p>
                        </div>
                    </div>
                </div>
                <button
                    onClick={() => {}}
                    className='inline-block w-full rounded-lg py-2.5 px-[18px] border border-green-850 bg-green-850 shadow-sm shadow-[#101828]/5 font-semibold text-white'>
                    Download .csv
                </button>
            </article>
        </section>
    );
};

export default Results;
