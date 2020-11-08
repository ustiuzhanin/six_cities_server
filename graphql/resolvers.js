const Posts = require("../models/posts");

module.exports = {
  hello() {
    return {
      text: "Hello World",
      views: 33,
    };
  },

  posts: async function (args, req) {
    const posts = await Posts.find({});
    console.log(posts[0].preview_image);
    return {
      postData: posts,
    };
  },

  createPost: async function ({ postInput }, req) {
    console.log(postInput);
  },
};
