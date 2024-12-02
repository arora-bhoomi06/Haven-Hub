const express = require("express");
const router = express.Router();
const wrapAsync= require("../utils/wrapAsync.js");
const {listingSchema,reviewSchema}= require("../schema.js");
const ExpressError= require("../utils/ExpressError.js");
const Listing = require("../models/listing.js");
const{isLoggedIn,isValidate,isOwner}=require("../middleware.js");
const listingController = require("../controllers/listing.js");
const multer = require('multer');
const {storage} = require("../cloudConfig.js");
const upload = multer({storage});
router.route("/")
//index route for listing
.get( wrapAsync(listingController.index))
//create route
.post( isLoggedIn,upload.single('listing[image]'),isValidate,
  wrapAsync(listingController.createListing)  
 );


 //new route
router.get("/new",isLoggedIn,listingController.renderNewForm);
 router.route("/:id")
 .get(wrapAsync(listingController.  showListings))
 .put(
  isLoggedIn,isOwner,upload.single('listing[image]'),isValidate,wrapAsync(listingController.updateListing))
  .delete(isLoggedIn,isOwner,wrapAsync(listingController.destroyListing));


router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(listingController.renderEditForm));



module.exports = router;