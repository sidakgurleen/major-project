const express=require("express");
const router=express.Router({mergeParams: true});//router object
const wrapAsync=require("../utils/wrapAsync.js");
const ExpressErrors=require("../utils/ExpressErrors.js");
const Listing=require("../models/listing.js");
const Review=require("../models/review.js");
const {validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js");
const reviewController=require("../controllers/reviews.js");
const review=require("../models/review.js");
//const { destroyReview } = require("../controllers/reviews.js");
//Reviews
//post route
router.post(
    "/",
    isLoggedIn,
    validateReview,
 wrapAsync(reviewController.createReview));
//delete review route
router.delete(
    "/:reviewId",
    isLoggedIn,
    isReviewAuthor,
    wrapAsync(reviewController.destroyReview)
);
module.exports=router;