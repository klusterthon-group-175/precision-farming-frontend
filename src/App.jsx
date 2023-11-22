import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Main/Home';
import Signup from './components/Main/Signup';

function App() {
    const location = useLocation();

    return (
        <div className='font-inter bg-green-80_'>
            <Header path={location.pathname} />
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/create-account' element={<Signup />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
