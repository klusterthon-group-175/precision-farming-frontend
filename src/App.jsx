import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Main/Home';
import Signup from './components/Main/Signup';
import FarmData from './components/Main/FarmData';
import ProtectedRoute from './components/Main/ProtectedRoute';
import { useState } from 'react';

function App() {
    const location = useLocation();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <div className='font-inter'>
            <Header path={location.pathname} />
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route
                        path='/create-account'
                        element={
                            <Signup
                                auth={isAuthenticated}
                                setAuth={setIsAuthenticated}
                            />
                        }
                    />
                    <Route element={<ProtectedRoute auth={isAuthenticated} />}>
                        <Route path='/add-farm-data' element={<FarmData />} />
                    </Route>
                </Routes>
            </main>
        </div>
    );
}

export default App;
