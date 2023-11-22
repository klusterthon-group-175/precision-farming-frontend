import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Main/Home';

function App() {
    return (
        <div className='font-inter'>
            <Header />
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
