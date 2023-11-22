import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Main/Home';
import Signup from './components/Main/Signup';
import FarmData from './components/Main/FarmData';

function App() {
    const location = useLocation();

    return (
        <div className='font-inter'>
            <Header path={location.pathname} />
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/create-account' element={<Signup />} />
                    <Route path='/add-farm-data' element={<FarmData />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
