import FeedbackForm from '../components/FeedbackForm';
import image from '../assets/images/feedback.jpg';
import '../index.css';

export default function User({ isDarkTheme }) {
  return (
    <div className={`${isDarkTheme ? 'bg-gray-900 text-white' : 'bg-white text-black'} min-h-screen flex flex-col md:flex-row`}>
      <div className="hidden md:flex md:w-1/2 justify-center items-center p-4 relative">
        <img src={image} alt="Feedback" className="w-full h-auto max-w-md" />
      </div>
      
      <div className="md:w-1/2 flex justify-center items-center p-4">
        <FeedbackForm  isDarkTheme={isDarkTheme}/>
      </div>
    </div>
  );
}
