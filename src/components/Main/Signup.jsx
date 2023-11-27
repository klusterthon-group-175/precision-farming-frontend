import basket from '../../assets/images/basket.png';
import corn from '../../assets/images/corn.png';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { enqueueSnackbar } from 'notistack';
import { useAuth } from '../provider/AuthProvider';
import { PropTypes } from 'prop-types';
import { Helmet } from 'react-helmet';

const Signup = ({ url }) => {
    // Fetches token functions from authentication provider
    const { setAccessToken, setRefreshToken } = useAuth();

    // Deletes Authentication Token
    setAccessToken(null);
    setRefreshToken(null);

    // Submit function
    const handleSubmit = async (values, { resetForm }) => {
        try {
            // eslint-disable-next-line no-unused-vars
            const response = await axios.post(`${url}/auth/sign-up/`, values); // Posts user data to api endpoint

            // Displays success notification
            enqueueSnackbar('Sign up successful', {
                variant: 'success',
            });

            resetForm(); // Reset form after successful submission if needed
        } catch (error) {
            // Displays error notification
            enqueueSnackbar(
                `${
                    error.response.data.data.email &&
                    error.response.data.data.email[0]
                }`,
                {
                    variant: 'error',
                }
            );
        }
    };

    return (
        <>
            {/* Meta Information */}
            <Helmet>
                <meta charSet='utf-8' />
                <title>
                    Create Account | Precision Farming Model - Group 175
                </title>
            </Helmet>
            {/* Main Section */}
            <section
                className='bg-no-repeat min-h-screen animate-fadeIn duration-500 px-8 pb-12 pt-6 bg-white text-neutral-gray-900'
                style={{
                    backgroundImage: `url(${corn}), url(${basket})`,
                    backgroundPosition: '66.2% 23%, 36% 87%',
                }}>
                <div className='min-h-screen max-w-[360px] animate-slideIn duration-500 delay-700 mx-auto px-4 pt-10 text-center bg-white/[0.42] backdrop-blur'>
                    <h2 className='mb-3 text-3xl leading-tight font-semibold'>
                        Set up your account
                    </h2>
                    <p className='mb-8 text-neutral-gray-600'>
                        Let’s start by personalizing your farming experience
                    </p>

                    {/* Form Handling */}
                    <Formik
                        // Form Values
                        initialValues={{
                            first_name: '',
                            last_name: '',
                            email: '',
                            password: '',
                            password2: '',
                            update: false,
                        }}
                        // Form Validation
                        validationSchema={Yup.object({
                            first_name: Yup.string()
                                .min(1, 'First name is too short!')
                                .max(70, 'First name is too long!')
                                .required('Please enter your first name.'),
                            last_name: Yup.string()
                                .min(1, 'Last name is too short!')
                                .max(70, 'Last name is too long!')
                                .required('Please enter your last name.'),
                            email: Yup.string()
                                .email('Please enter a valid email address.')
                                .required('Please enter your email.'),
                            password: Yup.string().required(
                                'Please enter a password.'
                            ),
                            password2: Yup.string()
                                .oneOf(
                                    [Yup.ref('password'), null],
                                    "Passwords don't match"
                                )
                                .required('Please confirm your password.'),
                            update: Yup.boolean(),
                        })}
                        // Submit Function
                        onSubmit={handleSubmit}>
                        <Form className='flex flex-col gap-y-5 text-start'>
                            <div>
                                <label
                                    htmlFor='firstName'
                                    className='mb-1.5 text-sm font-medium'>
                                    First name
                                </label>
                                <br />
                                <Field
                                    id='firstName'
                                    type='text'
                                    name='first_name'
                                    className='w-full px-3.5 py-2.5 rounded-lg bg-white border border-gray-350 shadow-sm shadow-[#101828]/[0.05]  placeholder:text-gray-550'
                                    required
                                    placeholder='Enter your first name'
                                />
                                {/* Display validation errors */}
                                <ErrorMessage
                                    name='first_name'
                                    component='p'
                                    className='text-red-500 text-xs my-2'
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor='lastName'
                                    className='mb-1.5 text-sm font-medium'>
                                    Last name
                                </label>
                                <br />
                                <Field
                                    id='lastName'
                                    name='last_name'
                                    type='text'
                                    className='w-full px-3.5 py-2.5 rounded-lg bg-white border border-gray-350 shadow-sm shadow-[#101828]/[0.05]  placeholder:text-gray-550'
                                    required
                                    placeholder='Enter your last name'
                                />
                                {/* Display validation errors */}
                                <ErrorMessage
                                    name='last_name'
                                    component='p'
                                    className='text-red-500 text-xs my-2'
                                />
                            </div>

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

                            <div>
                                <label
                                    htmlFor='confirmPassword'
                                    className='mb-1.5 text-sm font-medium'>
                                    Confirm Password
                                </label>
                                <br />
                                <Field
                                    id='confirmPassword'
                                    name='password2'
                                    type='password'
                                    className='w-full px-3.5 py-2.5 rounded-lg bg-white border border-gray-350 shadow-sm shadow-[#101828]/[0.05]  placeholder:text-gray-550'
                                    required
                                    placeholder='••••••••'
                                />
                                {/* Display validation errors */}
                                <ErrorMessage
                                    name='password2'
                                    component='p'
                                    className='text-red-500 text-xs my-2'
                                />
                            </div>

                            <div className='text-center my-1 flex justify-center items-center gap-x-2'>
                                <Field
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

                                <Link
                                    to='/login'
                                    className='flex items-center justify-center gap-x-3 py-2.5 px-4 rounded-lg border border-gray-350 shadow-sm shadow-[#101828]/[0.05] text-gray-750 font-semibold'>
                                    <span>Log In</span>
                                </Link>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </section>
        </>
    );
};

// Props handling
Signup.propTypes = {
    url: PropTypes.string,
};

export default Signup;
