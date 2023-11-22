const FarmData = () => {
    return (
        <section className='py-10 sm:px-0 px-4 text-center max-w-[560px] mx-auto text-neutral-gray-900'>
            <h2 className='text-5xl leading-[1.2] font-semibold mb-4'>
                Input your farm data
            </h2>
            <p className='text-neutral-gray-800 text-lg leading-6 mb-6'>
                Help Us Help You Achieve Your Best Harvest Yet!
            </p>

            <form action='' className='mt-6 text-start'>
                <article className='grid sm:grid-cols-2 grid-cols-1 auto-rows-auto gap-6 mb-6'>
                    <div>
                        <label htmlFor='location' className='mb-2 font-medium'>
                            Location
                        </label>
                        <br />
                        <input
                            id='location'
                            type='text'
                            className='w-full px-3.5 py-2.5 rounded-lg bg-white border border-gray-350 shadow-sm shadow-[#101828]/[0.05]'
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor='cropType' className='mb-2 font-medium'>
                            Crop type
                        </label>
                        <br />
                        <input
                            id='cropType'
                            type='text'
                            className='w-full px-3.5 py-2.5 rounded-lg bg-white border border-gray-350 shadow-sm shadow-[#101828]/[0.05]'
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor='cropType' className='mb-2 font-medium'>
                            Crop type
                        </label>
                        <br />
                        <input
                            id='cropType'
                            type='text'
                            className='w-full px-3.5 py-2.5 rounded-lg bg-white border border-gray-350 shadow-sm shadow-[#101828]/[0.05]'
                            required
                        />
                    </div>

                    <div>
                        <label
                            htmlFor='cropVariety'
                            className='mb-2 font-medium'>
                            Crop variety
                        </label>
                        <br />
                        <input
                            id='cropVariety'
                            type='text'
                            className='w-full px-3.5 py-2.5 rounded-lg bg-white border border-gray-350 shadow-sm shadow-[#101828]/[0.05]'
                            required
                        />
                    </div>

                    <div className='sm:col-span-2'>
                        <label htmlFor='info' className='mb-2 font-medium'>
                            Other information (optional)
                        </label>
                        <br />
                        <textarea
                            id='info'
                            type='text'
                            className='w-full px-3.5 py-2.5 rounded-lg bg-white border border-gray-350 shadow-sm shadow-[#101828]/[0.05] placeholder:text-gray-550'
                            placeholder='Type your message...'
                            rows={1}
                        />
                    </div>
                </article>

                <button
                    type='submit'
                    className='block mx-auto py-3 px-6 rounded-lg text-white bg-green-850 border border-white text-2xl leading-6 font-semibold'>
                    Continue
                </button>
            </form>
        </section>
    );
};

export default FarmData;
