// Load required packages
var mongoose = require("mongoose");
import User from "./User";
// Define our user schema
var FarmPostSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  location: { type: String, required: true},
  time: {type: String, required: true},
  volunteers: {type: [User], required: true},
  consumers: {type: [User], required: true}

});

// Export the Mongoose model
module.exports = mongoose.model("FarmPost", FarmPostSchema);
