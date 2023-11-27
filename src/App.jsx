import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Main/Home';
import Signup from './components/Main/Signup';
import ProtectedRoute from './components/routes/ProtectedRoute';
import { useState } from 'react';
import Modal from './components/Modal/Modal';
import Login from './components/Main/Login';
import CropData from './components/Main/CropData';
import FarmData from './components/Main/FarmData';
import Results from './components/Main/Results';

function App() {
    const location = useLocation();
    const baseURL = 'https://precisionfarming.onrender.com'; //backend base url
    const [showModal, setShowModal] = useState(false);

    return (
        <div className='font-inter relative'>
            <Header path={location.pathname} />
            <main>
                <Routes>
                    {/* Home Page */}
                    <Route path='/' element={<Home />} />
                    {/* Signup Page */}
                    <Route
                        path='/create-account'
                        element={<Signup url={baseURL} />}
                    />
                    {/* Login Page */}
                    <Route path='/login' element={<Login url={baseURL} />} />

                    <Route element={<ProtectedRoute />}>
                        {/* Farm Data Form */}
                        <Route
                            path='/add-farm-data/:id'
                            element={<FarmData url={baseURL} />}
                        />
                        {/* Crop Data Form */}

                        <Route
                            path='/add-crop-data'
                            element={
                                <CropData
                                    setShow={setShowModal}
                                    url={baseURL}
                                />
                            }
                        />
                        {/* Results page */}
                        <Route
                            path='/results'
                            element={<Results url={baseURL} />}
                        />
                    </Route>
                </Routes>
            </main>

            {showModal && <Modal setShow={setShowModal} />}
        </div>
    );
}

export default App;
