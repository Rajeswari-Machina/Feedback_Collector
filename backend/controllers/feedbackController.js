const feedback = require('../models/feedback');

exports.submitFeedbackController = async (req,res)=>{
  const {name,email,description} = req.body;
  try{
    const feedbackData = await feedback.create({
      name,
      email,
      description
    });
    res.status(200).json({
      message:'Feedback submitted successfully',
      feedback:feedbackData
    })
  }catch(error){
    res.status(500).json({
      message:'Feedback submission failed',
      error:error.message
    })
  }
}

exports.getFeedbacksController = async(req,res)=>{
  try{
    const feedbacks = await feedback.find();
    res.status(200).json({
      message:"feedbacks fetched succesfully",
      data:feedbacks
    })
  }catch(error){
    res.status(500).json({
      message:'feedbacks fetching failed',
      error:error.message
    })
  }
}

