
#  Feedback Collector – Backend API

This is the **Express.js + MongoDB** backend for the [Feedback Collector App](https://feedbackcollector1.netlify.app/), responsible for handling feedback submission and retrieval.

> Live API hosted at: [https://feedback-collector-jb6m.onrender.com/](https://feedback-collector-jb6m.onrender.com/)

---

## Features

-  RESTful API built with Express
- MongoDB database for persistent storage
-  Submit and fetch feedback entries
-  **Rate Limiting** to prevent abuse
-  **Timestamps** for each feedback entry
-  Validation using Express middleware
-  Secured with Helmet HTTP headers

---

##  Technologies Used

[![Node.js](https://img.shields.io/badge/Runtime-Node.js-green?logo=node.js)](https://nodejs.org/)  
[![Express](https://img.shields.io/badge/API-Express.js-black?logo=express)](https://expressjs.com/)  
[![MongoDB](https://img.shields.io/badge/Database-MongoDB-4ea94b?logo=mongodb)](https://mongodb.com/)  
[![Rate Limit](https://img.shields.io/badge/Security-Rate_Limiting-orange)](https://www.npmjs.com/package/express-rate-limit)  
---

---

##  API Endpoints

### `POST /submit-feedback`
Accepts a new feedback submission.

#### Request Body
```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "description": "This app is awesome!"
}
```

#### Response
```json
{
  "message": "Feedback submitted successfully",
  "feedback": {
    "_id": "...",
    "fullName": "...",
    "email": "...",
    "description": "...",
    "createdAt": "..."
  }
}
```

---

### `GET /feedbacks`
Returns a list of all submitted feedback entries.

#### Response
```json
[
  {
    "_id": "...",
    "fullName": "...",
    "email": "...",
    "message": "...",
    "createdAt": "..."
  },
  ...
]
```

---

##  Environment Variables

Create a `.env` file in the root of the `server/` directory:

```env
PORT=5000
MONGO_URI=your-mongodb-connection-string
```

---

##  Run Locally

```bash
# Navigate to backend folder
cd backend

# Install dependencies
npm install

# Start server
node app.js
```

---

##  Security

- **Rate Limiting:** Limits repeated requests to public APIs.
- **CORS policy** Address requests from Only allowed domains
---

## 📬 Contact

Developed with ❤️ by **Rajeswari Machina**  
🔗 [Frontend Repo](https://github.com/Rajeswari-Machina/Feedback_Collector)
