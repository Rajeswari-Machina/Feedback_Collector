import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';

export default function Login({ handleLogin, isDarkTheme }) {
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:7000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (response.ok) {
          setRole('admin');
          handleLogin(true);
          navigate('/admin');
        } else {
          throw new Error("Invalid email or password");
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <>
      {!role && (
        <div
          className={`min-h-screen flex items-center justify-center p-4 ${
            isDarkTheme ? 'bg-gray-900 text-white' : 'bg-white text-black'
          }`}
        >
          <div
            className={`feedback p-6 rounded-lg shadow-md w-full max-w-md ${
              isDarkTheme ? 'bg-gray-800 text-white' : 'bg-white text-black'
            }`}
          >
            <div>
              <h2
                className={`text-2xl font-bold text-center mb-4 animate-typing ${
                  isDarkTheme ? 'text-green-300' : 'text-green-600'
                }`}
              >
                Login
              </h2>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <label className="block font-medium text-lg sm:text-xl">
                Email:
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className={`w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 ${
                    isDarkTheme
                      ? 'border-gray-600 bg-gray-700 text-white focus:ring-green-500'
                      : 'border-black focus:ring-blue-500'
                  } text-base sm:text-lg`}
                />
              </label>
              <label className="block font-medium text-lg sm:text-xl">
                Password:
                <input
                  type="password"
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 ${
                    isDarkTheme
                      ? 'border-gray-600 bg-gray-700 text-white focus:ring-green-500'
                      : 'border-black focus:ring-blue-500'
                  } text-base sm:text-lg`}
                />
              </label>
              <button
                type="submit"
                className={`w-full py-2 rounded transition text-base sm:text-lg ${
                  isDarkTheme
                    ? 'bg-green-600 hover:bg-green-500 text-white'
                    : 'bg-black hover:bg-gray-800 text-white'
                }`}
              >
                Login
              </button>
              <p className="text-red-500 text-lg sm:text-xl animate-pulse">
                {error && error}
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}