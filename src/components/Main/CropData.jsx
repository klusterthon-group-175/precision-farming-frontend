import axios from 'axios';
import { ErrorMessage, Field, Formik, Form } from 'formik';
import { PropTypes } from 'prop-types';
import { useEffect, useState } from 'react';
import * as Yup from 'yup';
import arrow from '../../assets/images/chevron-down.png';
import { enqueueSnackbar } from 'notistack';

const CropData = ({ setShow }) => {
    const [optionList, setOptionList] = useState();

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(
                    'http://127.0.0.1:8000/api/v1/farm/farm-list/'
                );
                setOptionList(response.data.data);
            } catch (error) {
                console.log(error);
                setOptionList(["Couldn't load farms, check your network"]);
            }
        }

        fetchData();
    }, []);

    const handleSubmit = async (values, { resetForm }) => {
        try {
            // eslint-disable-next-line no-unused-vars
            const response = await axios.post(
                'http://127.0.0.1:8000/api/v1/farm/add-crop/',
                values
            );
            enqueueSnackbar('Crop added successfully!', {
                variant: 'success',
            });
            resetForm(); // Reset form after successful submission if needed
            setShow(true);
        } catch (error) {
            console.log(values);
            enqueueSnackbar(`${error.response.data.data.detail}`, {
                variant: 'error',
            });
        }
    };
    return (
        <section className='py-10 sm:px-0 px-4 text-center max-w-[560px] mx-auto text-neutral-gray-900'>
            <h2 className='text-5xl leading-[1.2] font-semibold mb-4'>
                Field your crop data
            </h2>
            <p className='text-neutral-gray-800 text-lg leading-6 mb-6'>
                Help Us Help You Achieve Your Best Harvest Yet!
            </p>

            <Formik
                initialValues={{
                    name: '',
                    variety: '',
                    farm: '',
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .min(1, 'Crop name is too short!')
                        .max(255, 'Crop name is too long!')
                        .required('Please enter crop name.'),
                    variety: Yup.string()
                        .min(1, 'Variety is too short!')
                        .max(70, 'Variety is too long!')
                        .required('Please enter your crop variety.'),
                    farm: Yup.string().required('Please choose farm.'),
                })}
                onSubmit={handleSubmit}>
                <Form className='mt-6 text-start'>
                    <article className='grid sm:grid-cols-2 grid-cols-1 auto-rows-auto gap-6 mb-6'>
                        <div>
                            <label
                                htmlFor='crop-name'
                                className='mb-2 font-medium'>
                                Crop name
                            </label>
                            <br />
                            <Field
                                id='crop-name'
                                name='name'
                                type='text'
                                className='w-full px-3.5 py-2.5 rounded-lg bg-white border border-gray-350 shadow-sm shadow-[#101828]/[0.05] placeholder:text-gray-550'
                                placeholder='Enter your crop name'
                                required
                            />

                            <ErrorMessage
                                name='name'
                                component='p'
                                className='text-red-500 text-xs my-2'
                            />
                        </div>

                        <div>
                            <label
                                htmlFor='crop-variety'
                                className='mb-2 font-medium'>
                                Crop variety
                            </label>
                            <br />
                            <Field
                                id='crop-variety'
                                name='variety'
                                type='text'
                                className='w-full px-3.5 py-2.5 rounded-lg bg-white border border-gray-350 shadow-sm shadow-[#101828]/[0.05] placeholder:text-gray-550'
                                required
                                placeholder='Enter your crop variety'
                            />
                            <ErrorMessage
                                name='variety'
                                component='p'
                                className='text-red-500 text-xs my-2'
                            />
                        </div>

                        <div className='sm:col-span-2'>
                            <label
                                htmlFor='farm-name'
                                className='mb-2 font-medium'>
                                Farm name
                            </label>
                            <br />
                            <Field
                                as='select'
                                id='farm-name'
                                name='farm'
                                required
                                placeholder='Choose a farm'
                                style={{
                                    backgroundImage: `url(${arrow})`,
                                    backgroundPosition:
                                        'calc(100% - 14px) center',
                                }}
                                className='bg-no-repeat appearance-none w-full px-3.5 py-2.5 rounded-lg bg-white border border-gray-350 shadow-sm shadow-[#101828]/[0.05] placeholder:text-gray-550'>
                                <option value='' disabled>
                                    Choose a farm
                                </option>
                                {optionList ? (
                                    optionList.map((farm) => (
                                        <option key={farm.id} value={farm.id}>
                                            {farm.name}
                                        </option>
                                    ))
                                ) : (
                                    <option value='Loading' disabled>
                                        Loading farms....
                                    </option>
                                )}
                            </Field>

                            <ErrorMessage
                                name='farm'
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

CropData.propTypes = {
    setShow: PropTypes.func,
};

export default CropData;
