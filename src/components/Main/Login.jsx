import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { enqueueSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import basket from '../../assets/images/basket.png';
import corn from '../../assets/images/corn.png';
import { useAuth } from '../provider/AuthProvider';

const Login = () => {
    const { setAccessToken, setRefreshToken } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (values, { resetForm }) => {
        try {
            // eslint-disable-next-line no-unused-vars
            const response = await axios.post(
                'http://127.0.0.1:8000/api/v1/auth/login/',
                values
            );

            setAccessToken(response.data.data.access);
            setRefreshToken(response.data.data.refresh);
            enqueueSnackbar(
                `Log in successful, Welcome ${response.data.data.first_name}`,
                {
                    variant: 'success',
                }
            );
            navigate(`/add-farm-data/${response.data.data.id}`);
            resetForm(); // Reset form after successful submission if needed
        } catch (error) {
            enqueueSnackbar(`${error.response.data.data.detail}!`, {
                variant: 'error',
            });
        }
    };

    return (
        <section
            className='bg-no-repeat min-h-screen px-8 pb-12 pt-6 bg-white text-neutral-gray-900'
            style={{
                backgroundImage: `url(${corn}), url(${basket})`,
                backgroundPosition: '66.2% 23%, 36% 87%',
            }}>
            <div className='max-w-[360px] mx-auto px-4 py-10 text-center bg-white/[0.42] backdrop-blur'>
                <h2 className='mb-3 text-3xl leading-tight font-semibold'>
                    Log In
                </h2>
                <p className='mb-8 text-neutral-gray-600'>
                    Let’s start by personalizing your farming experience
                </p>
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    validationSchema={Yup.object({
                        email: Yup.string()
                            .email('Please enter a valid email address.')
                            .required('Please enter your email.'),
                        password: Yup.string().required(
                            'Please enter a password.'
                        ),
                    })}
                    onSubmit={handleSubmit}>
                    <Form className='flex flex-col gap-y-5 text-start'>
                        <div>
                            <label
                                htmlFor='email'
                                className='mb-1.5 text-sm font-medium'>
                                Email address
                            </label>
                            <br />
                            <Field
                                id='email'
                                name='email'
                                type='email'
                                className='w-full px-3.5 py-2.5 rounded-lg bg-white border border-gray-350 shadow-sm shadow-[#101828]/[0.05]  placeholder:text-gray-550'
                                required
                                placeholder='Enter your email address'
                            />
                            {/* Display validation errors */}
                            <ErrorMessage
                                name='email'
                                component='p'
                                className='text-red-500 text-xs my-2'
                            />
                        </div>

                        <div>
                            <label
                                htmlFor='password'
                                className='mb-1.5 text-sm font-medium'>
                                Password
                            </label>
                            <br />
                            <Field
                                id='password'
                                name='password'
                                type='password'
                                className='w-full px-3.5 py-2.5 rounded-lg bg-white border border-gray-350 shadow-sm shadow-[#101828]/[0.05]  placeholder:text-gray-550'
                                required
                                placeholder='••••••••'
                            />
                            {/* Display validation errors */}
                            <ErrorMessage
                                name='password'
                                component='p'
                                className='text-red-500 text-xs my-2'
                            />
                        </div>

                        <div className='gap-y-4 flex flex-col'>
                            <button
                                type='submit'
                                className='block py-2.5 px-[18px] rounded-lg text-white bg-green-1000 shadow-sm shadow-[#101828]/[0.05]'>
                                Log in
                            </button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </section>
    );
};

export default Login;
