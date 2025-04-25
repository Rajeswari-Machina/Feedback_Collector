require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { urlencoded } = bodyParser;
const connectDB = require('./config/db.js');
const feedbackRoutes = require('./routes/feedbackRoutes');
const rateLimit = require('express-rate-limit');
const app = express();
connectDB();

app.use(rateLimit({
  windowMs: 1 * 60 * 1000, 
  max: 50, 
}));

app.use(urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173/', 
}));
app.use('/api/', feedbackRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});