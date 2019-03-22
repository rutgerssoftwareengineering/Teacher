const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const AnnouncementSchema = new Schema(
  {
    Author: String,
    id: Number,
    Message: String,
  },
  { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Announcement", AnnouncementSchema);