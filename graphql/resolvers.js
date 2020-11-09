const Posts = require("../models/posts");
const User = require("../models/user");

module.exports = {
  hello() {
    return {
      text: "Hello World",
      views: 33,
    };
  },

  posts: async function (args, req) {
    const posts = await Posts.find({});
    return posts;
  },

  users: async function (args, req) {
    const users = await User.find({});
    return users;
  },

  createPost: async function ({ postInput }, req) {
    console.log(postInput);
  },
};
