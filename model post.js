const mongoose = require("mongoose");



const postSchema = new mongoose.Schema({
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
  actor: { type: String },
  imageUrl: String,
  caption: String,
  to: [String],
  activityId: String,
  inReplyTo: { type: String, default: null },
  likes: [{ type: String }],
  remote: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model("Post", postSchema);
