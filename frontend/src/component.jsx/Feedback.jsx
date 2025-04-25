import { useState } from "react";
import '../index.css';
function Feedback() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const feedbackData = {
      name: name,
      email: email,
      feedback: feedback,
    };
    setLoading(true);
    fetch("http://localhost:5000/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(feedbackData),
    })
      .then((response) => {
        if (response.ok) {
          setSubmitted(true);
          setError(false);
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setfeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      {loading ? (
        <p className="text-center text-gray-700 text-lg sm:text-xl animate-pulse">Loading...</p>
      ) : (
        <div className="feedback bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <div>
            <h2 className="text-2xl font-bold text-center text-green mb-4 animate-typing">We Value your opinion</h2>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4 bg-white">
            <label className="block text-black font-medium text-lg sm:text-xl">
              Name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full mt-1 p-2 border border-black rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-base sm:text-lg"
              />
            </label>
            <label className="block text-black font-medium text-lg sm:text-xl">
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-1 p-2 border border-black rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-base sm:text-lg"
              />
            </label>
            <label className="block text-black font-medium text-lg sm:text-xl">
              Feedback:
              <textarea
                value={feedback}
                onChange={(e) => setfeedback(e.target.value)}
                className="w-full mt-1 p-2 border border-black rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-base sm:text-lg"
              />
            </label>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition text-base sm:text-lg"
            >
              Submit
            </button>
          </form>
          {submitted && (
            <p className="text-green-600 mt-4 text-lg sm:text-xl animate-typing">
              Feedback submitted successfully!
            </p>
          )}
          {error && (
            <p className="text-red-600 mt-4 text-lg sm:text-xl animate-typing">
              Error submitting feedback. Please try again.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default Feedback;