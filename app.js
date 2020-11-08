const express = require("express");
const mongoose = require("mongoose");
const { graphqlHTTP } = require("express-graphql");

const graphqlSchema = require("./graphql/schema");
const graphqlResolver = require("./graphql/resolvers");

// const Kitten = require("./models/posts");
const Posts = require("./models/posts");

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

app.use("/", (req, res, next) => {
  console.log("qqqq");
  const post = new Posts({
    city: {
      name: "Dusseldorf",
      location: { latitude: 51.225402, longitude: 6.776314, zoom: 13 },
    },
    preview_image:
      "https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/9",
  });

  post.save();
  Posts.find({}).then((result) => console.log(result));
  // return {
  //   postData: post,
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
