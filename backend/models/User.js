var mongoose = require("mongoose");

// Define our user schema
var UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  destination: { type: String, required: true },
  address: { type: String, required: true },
  time: { type: String, default: "" },
  volunteerEvents: { type: [String], default: [] },
  consumerEvents: { type: [String], default: [] },
  description: { type: String, default: "" }
});

// Export the Mongoose model
module.exports = mongoose.model("User", UserSchema);
