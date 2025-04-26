#  Feedback Collector
[![React](https://img.shields.io/badge/Frontend-React-blue?logo=react)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/Styled_with-TailwindCSS-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Backend-Node.js-green?logo=node.js)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/API-Express.js-black?logo=express)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB-4ea94b?logo=mongodb)](https://mongodb.com/)
[![Netlify](https://img.shields.io/badge/Hosted_on-Netlify-00C7B7?logo=netlify)](https://netlify.com/)
[![Render](https://img.shields.io/badge/API_Hosted_on-Render-46e3b7?logo=render)](https://render.com/)

A sleek, responsive, full-stack Feedback Collector app where users can submit their thoughts seamlessly—and admins can view all feedback in a clean, intuitive interface. Built with **React (Vite + TailwindCSS)** for the frontend and **Express.js + MongoDB** for the backend.

>  Designed to be simple, elegant, and deployment-ready.

##  Live Demo

- **Frontend (Netlify):** [feedbackcollector1.netlify.app](https://feedbackcollector1.netlify.app/)
- **Backend API (Render):** [feedback-collector-jb6m.onrender.com](https://feedback-collector-jb6m.onrender.com/)

---

##  Features

###  Frontend (React + TailwindCSS)
-  **Vite-powered** for blazing-fast performance
-  **Responsive** and mobile-friendly layout
-  **Light/Dark Theme Toggle**
-  Form with:
  - Full Name (with validation)
  - Email (validated input)
  - Feedback message
  - Submit button with loading state
- **Admin View** to toggle and see submitted feedbacks
-  Smooth transitions & minimalistic design
- **Watermark** with developer credit in the footer

###  Backend (Express + MongoDB)
-  `POST /submit-feedback`: Accepts feedback and stores it in MongoDB
-  `GET /feedbacks`: Fetches all submitted feedback
-  Timestamps included for every submission
-  **Rate Limiting** added for protection against abuse
### others
- MVC Architecture
- REST API

---

##  Tech Stack

| Layer       | Technology                     |
|------------|---------------------------------|
| Frontend   | React (Vite), Tailwind CSS      |
| Backend    | Express.js, Node.js, MongoDB    |
| Hosting    | Netlify (Frontend), Render (API)|
| Extras     | Axios, React Icons, dotenv, Helmet, Express-rate-limit |

---

## 🚀 Getting Started

### 📦 Clone & Install
```bash
git clone https://github.com/Rajeswari-Machina/Feedback_Collector.git
cd Feedback_Collector

### Frontend Setup
```bash
cd client
npm install
npm run dev

## Backend Setup

```bash
cd server
npm install
node index.js

⚠️ Ensure your .env has correct MongoDB URI:
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/feedbackCollector?retryWrites=true&w=majority

## Improvements
✅ Light/Dark theme switcher

✅ Form validation and transitions

✅ Admin view toggle

✅ API rate limiting

✅ Deployed on Netlify & Render

## Future scope:
Email notifications, search & pagination for feedback list, better auth for admin panel

🙋‍♀️ Developer
Made with ❤️ by Rajeswari Machina

