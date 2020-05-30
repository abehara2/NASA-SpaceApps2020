var mongoose = require("mongoose");
import FarmPost from "./FarmPost"
// Define our user schema
var UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  destination: { type: String, required: true },
  time: {type: String, required: true},
  volunteerEvents: {type: [String], required: true},
  consumerEvents: {type: [String], required: true},
  description: {type:String, required: false}
});

// Export the Mongoose model
module.exports = mongoose.model("User", UserSchema);