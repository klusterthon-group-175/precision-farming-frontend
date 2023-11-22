import google from '../../assets/images/google.png';
import basket from '../../assets/images/basket.png';
import corn from '../../assets/images/corn.png';

const Signup = () => {
    return (
        <section
            className='bg-no-repeat min-h-screen px-8 pb-12 pt-6 bg-white text-neutral-gray-900'
            style={{
                backgroundImage: `url(${corn}), url(${basket})`,
                backgroundPosition: '66.2% 23%, 36% 87%',
            }}>
            <div className='min-h-screen max-w-[360px] mx-auto px-4 pt-10 text-center bg-white/[0.42] backdrop-blur'>
                <h2 className='mb-3 text-3xl leading-tight font-semibold'>
                    Set up your account
                </h2>
                <p className='mb-8 text-neutral-gray-600'>
                    Let’s start by personalizing your farming experience
                </p>
                <form action='' className='flex flex-col gap-y-5 text-start'>
                    <div>
                        <label
                            htmlFor='fullName'
                            className='mb-1.5 text-sm font-medium'>
                            Full name
                        </label>
                        <br />
                        <input
                            id='fullName'
                            type='text'
                            className='w-full px-3.5 py-2.5 rounded-lg bg-white border border-gray-350 shadow-sm shadow-[#101828]/[0.05]  placeholder:text-gray-550'
                            required
                            placeholder='Enter your full name'
                        />
                    </div>

                    <div>
                        <label
                            htmlFor='location'
                            className='mb-1.5 text-sm font-medium'>
                            Location
                        </label>
                        <br />
                        <input
                            id='location'
                            type='text'
                            className='w-full px-3.5 py-2.5 rounded-lg bg-white border border-gray-350 shadow-sm shadow-[#101828]/[0.05]  placeholder:text-gray-550'
                            required
                            placeholder='Enter your geo-location'
                        />
                    </div>

                    <div>
                        <label
                            htmlFor='crops'
                            className='mb-1.5 text-sm font-medium'>
                            Crops
                        </label>
                        <br />
                        <input
                            id='crops'
                            type='text'
                            className='w-full px-3.5 py-2.5 rounded-lg bg-white border border-gray-350 shadow-sm shadow-[#101828]/[0.05]  placeholder:text-gray-550'
                            required
                            placeholder='Enter your type of crops'
                        />
                    </div>

                    <div>
                        <label
                            htmlFor='password'
                            className='mb-1.5 text-sm font-medium'>
                            Password
                        </label>
                        <br />
                        <input
                            id='password'
                            type='password'
                            className='w-full px-3.5 py-2.5 rounded-lg bg-white border border-gray-350 shadow-sm shadow-[#101828]/[0.05]  placeholder:text-gray-550'
                            required
                            placeholder='••••••••'
                        />
                    </div>

                    <div className='text-center my-1 flex justify-center items-center gap-x-2'>
                        <input
                            type='checkbox'
                            name='update'
                            id='update'
                            className='bg-white border border-gray-350'
                        />
                        <label
                            htmlFor='update'
                            className='text-sm font-medium text-gray-750'>
                            Stay updated with timely notifications
                        </label>
                    </div>

                    <div className='gap-y-4 flex flex-col'>
                        <button
                            type='submit'
                            className='block py-2.5 px-[18px] rounded-lg text-white bg-green-1000 shadow-sm shadow-[#101828]/[0.05]'>
                            Sign up
                        </button>

                        <button className='flex items-center justify-center gap-x-3 py-2.5 px-4 rounded-lg border border-gray-350 shadow-sm shadow-[#101828]/[0.05] text-gray-750 font-semibold'>
                            <img src={google} alt='Google Icon' />

                            <span>Sign in with Google</span>
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Signup;
