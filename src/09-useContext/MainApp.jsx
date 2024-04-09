import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
import { AboutPage } from './AboutPage';
import { Navbar } from './Navbar';
import { UserProvider } from './context/UserProvider';

export const MainApp = () => {
    return (
        <UserProvider>
            <h1>Main App</h1>
            <Navbar />
            <hr />

            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/login' element={<LoginPage />} />

                {/* Se usa /* para obtener un wildcard de cualquier ruta */}
                <Route path='/*' element={<Navigate to={'/about'} />} />
            </Routes>
        </UserProvider>
    );
};
