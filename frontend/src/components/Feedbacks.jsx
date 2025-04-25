import { useEffect, useState } from "react";
import FeedbackCard from "./FeedbackCard";
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Feedbacks({ isDarkTheme }) {
  const [show, setShow] = useState(false);
  const [feedbacks, setFeedbacks] = useState([]);
  const [selectedFeedback, setSelectedFeedback] = useState(null);
  const smallScreen = useMediaQuery('(max-width: 600px)');
  const toggleShow = () => {
    setShow(!show);
  };

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await fetch('http://localhost:7000/api/feedbacks');
        const data = await response.json();
        setFeedbacks(data.data);
        console.log(feedbacks);
      } catch (error) {
        console.error('Error fetching feedbacks:', error);
      }
    };
    fetchFeedbacks();
  }, [show]);

  return (
    <div
      style={{
        backgroundColor: isDarkTheme ? '#121212' : '#f9f9f9',
        color: isDarkTheme ? '#ffffff' : '#000000',
        minHeight: '100vh',
        padding: '20px',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <button
          style={{
            color: "white",
            backgroundColor: isDarkTheme ? "#333" : "blue",
            borderRadius: "10px",
            fontWeight: "bold",
            padding: "10px 20px",
            border: "none",
            cursor: "pointer",
          }}
          onClick={toggleShow}
        >
          {show ? "Hide feedback" : "Show feedback"}
        </button>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: smallScreen ? 'repeat(1, 1fr)' : 'repeat(2, 1fr)',
          gap: '20px',
          justifyContent: 'center',
          alignItems: 'stretch',
        }}
      >
        {show && feedbacks.map((feedback) => (
          <div
            key={feedback._id}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: isDarkTheme ? '1px solid #444' : '1px solid #ccc',
              borderRadius: '10px',
              padding: '10px',
              cursor: 'pointer',
              backgroundColor: isDarkTheme ? '#1e1e1e' : '#ffffff',
              height: '100%',
            }}
            onClick={() => setSelectedFeedback(feedback)}
          >
            <FeedbackCard isDarkTheme={isDarkTheme} feedback={feedback} />
          </div>
        ))}
      </div>

      {selectedFeedback && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              backgroundColor: isDarkTheme ? '#1e1e1e' : 'white',
              color: isDarkTheme ? '#ffffff' : '#000000',
              padding: '20px',
              borderRadius: '10px',
              width: '50%',
              position: 'relative',
            }}
          >
            <button
              style={{
                position: 'absolute',
                color: 'red',
                top: '-10px',
                right: '0px',
                background: 'none',
                border: 'none',
                fontSize: '30px',
                cursor: 'pointer',
                zIndex: 1,
              }}
              onClick={() => setSelectedFeedback(null)}
            >
              &times;
            </button>
            <FeedbackCard isDarkTheme={isDarkTheme} feedback={selectedFeedback} />
          </div>
        </div>
      )}
    </div>
  );
}