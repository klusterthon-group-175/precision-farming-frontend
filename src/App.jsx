import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Main/Home';
import Signup from './components/Main/Signup';

function App() {
    return (
        <div className='font-inter'>
            <Header />
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
