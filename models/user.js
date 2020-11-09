const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  is_pro: { type: Boolean, required: true },
  avatar_url: { type: String, required: true },
});

module.exports = mongoose.model("User", userSchema);
// "host": {
//   "name": "Angelina",
//   "is_pro": true,
//   "avatar_url": "img/avatar-angelina.jpg"
// }
