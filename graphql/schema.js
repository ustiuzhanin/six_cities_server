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
