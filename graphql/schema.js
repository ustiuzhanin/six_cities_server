const { buildSchema } = require("graphql");

module.exports = buildSchema(`
  type TestData {
    text: String!
    views: Int!
  }

  type Location {
    latitude: Float!
    longitude: Float!
    zoom: Int!
  }

  type City {
    name: String!
    location: Location!
  }

  type Post {
    city: City!
    preview_image: String!
    images: [String]
    title: String!
    is_favorite: Boolean!
    is_premium: Boolean!
    rating: Float!
    type: String!
    bedrooms: Int!
    max_adults: Int!
    price: Int!
    goods: [String]
    description: String!
    location: Location!
  }
  
  type PostData {
    postData: [Post!]!
  }

  type RootQuery {
    hello: TestData!
    posts: PostData
  }

  schema {
    query: RootQuery
  }
`);
