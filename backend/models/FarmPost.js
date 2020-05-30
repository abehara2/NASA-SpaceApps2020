// Load required packages
var mongoose = require("mongoose");
import User from "./User";
// Define our user schema
var FarmPostSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  address: { type: String, required: true},
  time: {type: String, required: true},
  volunteers: {type: [String], required: true},
  consumers: {type: [String], required: true}

});

// Export the Mongoose model
module.exports = mongoose.model("FarmPost", FarmPostSchema);
