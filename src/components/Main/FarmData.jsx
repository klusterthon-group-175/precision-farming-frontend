import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { enqueueSnackbar } from 'notistack';
import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';

const FarmData = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const handleSubmit = async (values, { resetForm }) => {
        try {
            // eslint-disable-next-line no-unused-vars
            const response = await axios.post(
                'http://127.0.0.1:8000/api/v1/farm/create-farm/',
                values
            );

            enqueueSnackbar('Farm added successfully!', {
                variant: 'success',
            });
            navigate(`/add-crop-data`);
            resetForm(); // Reset form after successful submission if needed
        } catch (error) {
            enqueueSnackbar(`${error.response.data.data.detail}`, {
                variant: 'error',
            });
        }
    };

    return (
        <section className='py-10 sm:px-0 px-4 text-center max-w-[560px] mx-auto text-neutral-gray-900'>
            <h2 className='text-5xl leading-[1.2] font-semibold mb-4'>
                Field your farm data
            </h2>
            <p className='text-neutral-gray-800 text-lg leading-6 mb-6'>
                Help Us Help You Achieve Your Best Harvest Yet!
            </p>
            <Formik
                initialValues={{
                    name: '',
                    location: '',
                    size: '',
                    owner: '',
                    comments: '',
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .min(1, 'Farm name is too short!')
                        .max(255, 'Farm name is too long!')
                        .required("Please enter your farm's name."),
                    location: Yup.string()
                        .min(1, 'Location is too short!')
                        .max(70, 'Location is too long!')
                        .required("Please enter your farm's location."),
                    size: Yup.number().required(
                        "Please enter your farm's size."
                    ),
                })}
                onSubmit={handleSubmit}>
                <Form className='mt-6 text-start'>
                    <article className='grid sm:grid-cols-2 grid-cols-1 auto-rows-auto gap-6 mb-6'>
                        <Field type='hidden' name='id' value={id} />
                        <div>
                            <label
                                htmlFor='farm-name'
                                className='mb-2 font-medium'>
                                Farm name
                            </label>
                            <br />
                            <Field
                                id='farm-name'
                                name='name'
                                type='text'
                                className='w-full px-3.5 py-2.5 rounded-lg bg-white border border-gray-350 shadow-sm shadow-[#101828]/[0.05] placeholder:text-gray-550'
                                required
                                placeholder="Enter your farm's name"
                            />

                            <ErrorMessage
                                name='name'
                                component='p'
                                className='text-red-500 text-xs my-2'
                            />
                        </div>

                        <div>
                            <label
                                htmlFor='farm-location'
                                className='mb-2 font-medium'>
                                Farm location
                            </label>
                            <br />
                            <Field
                                id='farm-location'
                                name='location'
                                type='text'
                                className='w-full px-3.5 py-2.5 rounded-lg bg-white border border-gray-350 shadow-sm shadow-[#101828]/[0.05] placeholder:text-gray-550'
                                required
                                placeholder="Enter your farm's location"
                            />

                            <ErrorMessage
                                name='location'
                                component='p'
                                className='text-red-500 text-xs my-2'
                            />
                        </div>

                        <div className='sm:col-span-2'>
                            <label
                                htmlFor='farm-size'
                                className='mb-2 font-medium'>
                                Farm size (in hectares)
                            </label>
                            <br />
                            <Field
                                id='farm-size'
                                name='size'
                                type='number'
                                required
                                className='w-full px-3.5 py-2.5 rounded-lg bg-white border border-gray-350 shadow-sm shadow-[#101828]/[0.05] placeholder:text-gray-550'
                                placeholder="Write your farm's size (in hectares)"
                            />
                            <ErrorMessage
                                name='size'
                                component='p'
                                className='text-red-500 text-xs my-2'
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
                                name='comments'
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
                </Form>
            </Formik>
        </section>
    );
};

export default FarmData;
