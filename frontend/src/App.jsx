import './index.css'
import { Routes, Route } from 'react-router-dom';
import User from './pages/user';
import Feedbacks from './components/Feedbacks';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import { useState } from 'react';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleLogin = (adminStatus) => {
    setIsAdmin(adminStatus);
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={`${isDarkTheme ? 'bg-gray-900 text-white' : 'bg-white text-black'} min-h-screen flex flex-col`}>
      <Header isAdmin={isAdmin} toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      <div className='flex-grow'>
        <Routes>
          <Route path='/' element={<User />} />
          <Route path='/Adminlogin' element={<Login isAdmin={isAdmin} handleLogin={handleLogin} />} />
          {isAdmin && <Route path='/admin' element={<Feedbacks />} />}
          <Route path='*' element={<h1 className='text-red-500 h-screen flex justify-center items-center'>NOT FOUND </h1>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
