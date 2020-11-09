const express = require("express");
const mongoose = require("mongoose");
const { graphqlHTTP } = require("express-graphql");

const graphqlSchema = require("./graphql/schema");
const graphqlResolver = require("./graphql/resolvers");

// const Kitten = require("./models/posts");
const Posts = require("./models/posts");
const User = require("./models/user");

const MONGODB_URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.l4nq1.mongodb.net/${process.env.MONGO_DEFAULT_DATABASE}?retryWrites=true&w=majority`;

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
    graphiql: true,
  })
);

app.use("/q", (req, res, next) => {
  console.log("qqqq");
  // const post = new Posts({
  //   city: {
  //     name: "Dusseldorf",
  //     location: { latitude: 51.225402, longitude: 6.776314, zoom: 13 },
  //   },
  //   preview_image:
  //     "https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/9",
  //   images: [
  //     "https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/5.jpg",
  //     "https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/5.jpg",
  //   ],
  //   title: "Canal View Prinsengracht",
  //   is_favorite: false,
  //   is_premium: false,
  //   rating: 3.1,
  //   type: "room",
  //   bedrooms: 1,
  //   max_adults: 2,
  //   price: 101,
  //   goods: ["Breakfast", "Laptop friendly workspace"],
  //   description:
  //     "This is a place for dreamers to reset, reflect, and create. Designed with a 'slow' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.",
  //   location: {
  //     latitude: 51.248402000000006,
  //     longitude: 6.763314,
  //     zoom: 16,
  //   },
  // });
  const user = new User({
    name: "Angelina",
    is_pro: true,
    avatar_url: "img/avatar-angelina.jpg",
  });

  user.save();
  User.find({}).then((result) => console.log("result"));
  // return {
  //   user: user,
  // };
});

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    app.listen(process.env.PORT || 8080);
  })
  .catch((err) => console.log(err));

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  // we're connected!
  console.log("connected");
});
