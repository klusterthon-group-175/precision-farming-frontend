import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { enqueueSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import basket from '../../assets/images/basket.png';
import corn from '../../assets/images/corn.png';
import { useAuth } from '../provider/AuthProvider';
import { PropTypes } from 'prop-types';
import { Helmet } from 'react-helmet';

const Login = ({ url }) => {
    const { setAccessToken, setRefreshToken } = useAuth();
    const navigate = useNavigate();

    // Submit function
    const handleSubmit = async (values, { resetForm }) => {
        try {
            // eslint-disable-next-line no-unused-vars
            const response = await axios.post(`${url}/auth/login/`, values); // Posts user data to api endpoint

            setAccessToken(response.data.data.access); //sets access token
            setRefreshToken(response.data.data.refresh); // sets refresh token

            // Displays success notification
            enqueueSnackbar(
                `Log in successful, Welcome ${response.data.data.first_name}`,
                {
                    variant: 'success',
                }
            );
            // navigates to form data page when user logs in
            navigate(`/add-farm-data/${response.data.data.id}`);

            resetForm(); // Reset form after successful submission if needed
        } catch (error) {
            // Displays error notification
            enqueueSnackbar(`${error.response.data.data.detail}!`, {
                variant: 'error',
            });
        }
    };

    return (
        <>
            {/* Meta Information */}
            <Helmet>
                <meta charSet='utf-8' />
                <title>Log In | Precision Farming Model - Group 175</title>
            </Helmet>

            {/* Main Section */}
            <section
                className='bg-no-repeat min-h-screen animate-fadeIn duration-500 px-8 pb-12 pt-6 bg-white text-neutral-gray-900'
                style={{
                    backgroundImage: `url(${corn}), url(${basket})`,
                    backgroundPosition: '66.2% 23%, 36% 87%',
                }}>
                <div className='max-w-[360px] mx-auto px-4 py-10 text-center animate-slideIn duration-500 delay-700 bg-white/[0.42] backdrop-blur'>
                    <h2 className='mb-3 text-3xl leading-tight font-semibold'>
                        Log In
                    </h2>
                    <p className='mb-8 text-neutral-gray-600'>
                        Let’s start by personalizing your farming experience
                    </p>

                    {/* Form Handling */}
                    <Formik
                        // Form Values
                        initialValues={{
                            email: '',
                            password: '',
                        }}
                        // Form Validation
                        validationSchema={Yup.object({
                            email: Yup.string()
                                .email('Please enter a valid email address.')
                                .required('Please enter your email.'),
                            password: Yup.string().required(
                                'Please enter a password.'
                            ),
                        })}
                        // Submit Function
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
        </>
    );
};

Login.propTypes = {
    url: PropTypes.string,
};

export default Login;
