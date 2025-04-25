import { useState } from "react";
import '../index.css';

function FeedbackForm({ isDarkTheme }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const feedbackData = {
      name: name,
      email: email,
      description: feedback,
    };
    setLoading(true);
    fetch("http://localhost:7000/api/submit-feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(feedbackData),
    })
      .then((response) => {
        if (response.ok) {
          setSubmitted(true);
          setName("");
          setEmail("");
          setfeedback("");
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
    <div
      className={`min-h-screen w-full flex items-center justify-center p-4 ${
        isDarkTheme ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      {loading ? (
        <p className="text-center text-gray-700 text-lg sm:text-xl animate-pulse">Loading...</p>
      ) : (
        <div
          className={`feedback p-6 rounded-lg shadow-md w-full max-w-md ${
            isDarkTheme ? "bg-gray-800 text-white" : "bg-white text-black"
          }`}
        >
          <div>
            <h2 className="text-3xl font-bold text-center mb-4 animate-typing">
              We Value your opinion
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="block font-medium text-lg sm:text-xl">
              Name:
              <input
                type="text"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
                className={`w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 ${
                  isDarkTheme
                    ? "border-gray-600 bg-gray-700 text-white focus:ring-blue-500"
                    : "border-black focus:ring-blue-500"
                } text-base sm:text-lg`}
              />
            </label>
            <label className="block font-medium text-lg sm:text-xl">
              Email:
              <input
                type="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 ${
                  isDarkTheme
                    ? "border-gray-600 bg-gray-700 text-white focus:ring-blue-500"
                    : "border-black focus:ring-blue-500"
                } text-base sm:text-lg`}
              />
            </label>
            <label className="block font-medium text-lg sm:text-xl">
              Feedback:
              <textarea
                value={feedback}
                required
                onChange={(e) => setfeedback(e.target.value)}
                className={`w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 ${
                  isDarkTheme
                    ? "border-gray-600 bg-gray-700 text-white focus:ring-blue-500"
                    : "border-black focus:ring-blue-500"
                } text-base sm:text-lg`}
              />
            </label>
            <button
              type="submit"
              className={`w-full py-2 rounded hover:bg-gray-800 transition text-base sm:text-lg ${
                isDarkTheme ? "bg-gray-700 text-white" : "bg-black text-white"
              }`}
            >
              Submit
            </button>
          </form>
          {submitted && (
            <p className="mt-4 text-lg sm:text-xl animate-typing text-green-500">
              Feedback submitted successfully!
            </p>
          )}
          {error && (
            <p className="mt-4 text-lg sm:text-xl animate-typing text-red-500">
              Error submitting feedback. Please try again.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default FeedbackForm;