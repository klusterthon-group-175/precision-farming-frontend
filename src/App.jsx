import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Main/Home';
import Signup from './components/Main/Signup';
// import FarmData from './components/Main/FarmData';
import ProtectedRoute from './components/routes/ProtectedRoute';
import { useState } from 'react';
import Modal from './components/Modal/Modal';
// import CropData from './components/Main/CropData';
import { useAuth } from './components/provider/AuthProvider';
import Login from './components/Main/Login';
import CropData from './components/Main/CropData';
import FarmData from './components/Main/FarmData';
import Results from './components/Main/Results';

function App() {
    const location = useLocation();
    // const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const { accessToken } = useAuth();

    return (
        <div className='font-inter relative'>
            <Header path={location.pathname} />
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/create-account' element={<Signup />} />
                    {accessToken && (
                        <Route element={<ProtectedRoute />}>
                            <Route
                                path='/add-farm-data/:id'
                                element={<FarmData />}
                            />
                            <Route
                                path='/add-crop-data'
                                element={<CropData setShow={setShowModal} />}
                            />
                            <Route path='/results' element={<Results />} />
                        </Route>
                    )}
                    <Route path='/login' element={<Login />} />
                </Routes>
            </main>

            {showModal && <Modal setShow={setShowModal} />}
        </div>
    );
}

export default App;
