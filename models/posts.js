const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  host: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  city: {
    name: { type: String, required: true },
    location: {
      latitude: { type: Number, required: true },
      longitude: { type: Number, required: true },
      zoom: { type: Number, required: true },
    },
  },
  preview_image: {
    type: String,
    required: true,
  },
  images: [String],
  title: { type: String, required: true },
  is_favorite: { type: Boolean, required: true },
  is_premium: { type: Boolean, required: true },
  rating: { type: Number, required: true },
  type: { type: String, required: true },
  bedrooms: { type: Number, required: true },
  max_adults: { type: Number, required: true },
  price: { type: String, required: true },
  goods: [String],
  description: { type: String, required: true },
  location: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    zoom: { type: Number, required: true },
  },
});

module.exports = mongoose.model("Posts", postSchema);
