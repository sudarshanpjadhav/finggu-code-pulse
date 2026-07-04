const mongoose = require('mongoose');

const fingguCodeReviewSchema = new mongoose.Schema({
  code: { type: String, required: true },
  feedback: { type: [String], required: true },
  createdAt: { type: Date, default: Date.now }
});

const FingguCodeReview = mongoose.model('FingguCodeReview', fingguCodeReviewSchema);

module.exports = FingguCodeReview;