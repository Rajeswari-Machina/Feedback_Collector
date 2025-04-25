require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { urlencoded } = bodyParser;
const connectDB = require('./config/db.js');
const feedbackRoutes = require('./routes/feedbackRoutes');

const app = express();
connectDB();

app.use(urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use('/api/', feedbackRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});