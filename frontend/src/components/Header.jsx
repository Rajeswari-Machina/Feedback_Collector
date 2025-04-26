import '../index.css';

export default function Header({ isDarkTheme, toggleTheme }) {
  return (
    <div
      className={`${
        isDarkTheme ? 'bg-gray-800 text-white' : 'bg-blue-500 text-white'
      } flex justify-between items-center p-4`}
    >
      <div className="text-xl font-bold md:text-2xl">
        <a href="/" className="no-underline">
          Feedback Collector
        </a>
      </div>
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleTheme}
          className={` sm:text-sm ${
            isDarkTheme ? 'bg-gray-600' : 'bg-gray-200'
          } text-black px-4 py-2 rounded`}
        >
          {isDarkTheme ? 'Light Mode' : 'Dark Mode'}
        </button>
        <div className="text-lg font-bold sm:text-sm">
          <a
            href="/Adminlogin"
            className="text-white font-bold hover:text-gray-300 transition duration-300 ease-in-out no-underline"
          >
            Admin Login
          </a>
        </div>
      </div>
    </div>
  );
}