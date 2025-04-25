import Feedback from "./component.jsx/Feedback";
import image from './assets/images/feedback.jpg';
import './index.css'; 
function App() {
  

  return (
    <div className="bg-white min-h-screen flex flex-col md:flex-row">
      <div className="hidden md:flex md:w-1/2 justify-center items-center p-4 relative">
        <img src={image} alt="Feedback" className="w-full h-auto max-w-md" />
      </div>
      
      <div className=" md:w-1/2 flex justify-center items-center p-4">
        <Feedback />
      </div>
    </div>
  )
}
export default App;
