const express = require('express');
const router = express.Router();

const {submitFeedbackController,getFeedbacksController} = require('../controllers/feedbackController');
router.post('/submit-feedback',submitFeedbackController);
router.get('/feedbacks',getFeedbacksController);

module.exports = router;