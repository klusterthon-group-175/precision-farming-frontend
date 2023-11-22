import { Link } from 'react-router-dom';
import produce from '../../assets/images/produce.png';

const Home = () => {
    return (
        <section className='bg-green-80 min-h-screen'>
            <div className='flex flex-col xl:pt-52 lg:pt-44 md:pt-32 sm:pt-20 pt-16 justify-end relative min-h-screen'>
                <h1 className=' mt-10 text-green-550 lg:text-8xl sm:text-6xl text-4xl font-bold tracking-[0.96px] lg:leading-[1.14] md:leading-tight uppercase text-center'>
                    Empowering
                    <br />
                    Farmers
                </h1>
                <img className='absolute inset-x-0' src={produce} alt='' />

                <div className='text-center relative xl:pt-[101px] xl:pb-[282px] lg:py-40 md:py-28 sm:py-20 py-5   bg-cover bg-no-repeat'>
                    <p className='font-bold text-white lg:text-[32px] sm:text-2xl lg:leading-normal md:leading-relaxed'>
                        Predicting Ideal Planting & Harvest <br />
                        Times for Optimal Yield!
                    </p>

                    <Link
                        to='/create-account'
                        className='bg-white text-green-850 font-semibold md:text-2xl sm:text-xl leading-normal px-6 py-3 rounded-lg border border-white sm:mt-10 mt-5 inline-block hover:bg-green-550 hover:text-white hover:border-green-550 active:bg-green-550 active:text-white active:border-green-550 focus:bg-green-550 focus:text-white focus:border-green-550 duration-500'>
                        Get Your Predictions Now!
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Home;
