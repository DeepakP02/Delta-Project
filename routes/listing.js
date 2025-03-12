const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer = require('multer');
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage });

// single dot(.) has to be added in the path
// app is replaced by router
// listings is replaced by /

router.route("/")
.get(wrapAsync (listingController.index))
.post(isLoggedIn, upload.single("listing[image]"), validateListing, wrapAsync(listingController.createListing));

//New Route
router.get("/new", isLoggedIn, listingController.renderNewForm);

// Update Route
router.route("/:id")
.get(wrapAsync(listingController.showListing))
.put(isLoggedIn, isOwner,  upload.single("listing[image]"), validateListing, wrapAsync(listingController.updateListing))
.delete(isLoggedIn, isOwner, wrapAsync (listingController.destroyListing));
  
//Edit Route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.renderEditForm));

module.exports = router;