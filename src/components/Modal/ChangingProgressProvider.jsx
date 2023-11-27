import { useState, useEffect } from 'react';

const ChangingProgressProvider = ({
    interval = 1000,
    values,
    children,
    setShowModal1,
    setShowModal2,
}) => {
    const [valuesIndex, setValuesIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setValuesIndex((prevIndex) => (prevIndex + 1) % values.length);
        }, interval);

        return () => clearInterval(intervalId);
    }, [interval, values.length]);

    useEffect(() => {
        if (valuesIndex === values.length - 1) {
            setShowModal1(false); // Set showModal1 to false when reaching 100%
            setShowModal2(true);
        }
    }, [valuesIndex, values.length, setShowModal1, setShowModal2]);

    return children(values[valuesIndex]);
};

export default ChangingProgressProvider;
