const express = require("express");
const router = express.Router({mergeParams : true});
const wrapAsync = require("../utils/wrapAsync.js");
const {validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js");

const reviewController = require("../controllers/reviews.js");


// single dot(.) has to be added in the path
// app is replaced by router
// /listings/:id/reviews/ is replaced by /
  
//Reviews
//POST Review Route
router.post("/", isLoggedIn, validateReview, wrapAsync(reviewController.createReview));
  
// Delete Review Route
router.delete("/:reviewId", isLoggedIn, isReviewAuthor, wrapAsync(reviewController.destroyReview));

module.exports = router;