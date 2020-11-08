const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lodgingSchema = new Schema({
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
});

module.exports = mongoose.model("Posts", lodgingSchema);

// {
//   city: {
//     name: `Dusseldorf`,
//     location: {latitude: 51.225402, longitude: 6.776314, zoom: 13}
//   },
//   preview_image: `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/9.jpg`,
//   images: [
//     `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/5.jpg`,
//   ],
//   title: `Canal View Prinsengracht`,
//   is_favorite: false,
//   is_premium: false,
//   rating: 3.1,
//   type: `room`,
//   bedrooms: 1,
//   max_adults: 2,
//   price: 101,
//   goods: [`Breakfast`, `Laptop friendly workspace`],
//   host: {
//     id: 25,
//     name: `Angelina`,
//     is_pro: true,
//     avatar_url: `img/avatar-angelina.jpg`
//   },
//   description: `This is a place for dreamers to reset, reflect, and create. Designed with a 'slow' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.`,
//   location: {latitude: 51.248402000000006, longitude: 6.763314, zoom: 16},
//   id: 1
// },

// module.exports = mongoose.model("Lodging", lodgingSchema);
