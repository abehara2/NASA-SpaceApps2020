const { FarmPost } = require("../models");
module.exports = function(router) {
  const farmRoutes = router.route("/farmPosts");
  const farmRoutesMultiple = router.route("/farmPosts/many");
  const farmRoute = router.route("/farmPosts/:id");
  const farmRouteVolunteer = router.route("/farmPosts/:id/volunteers");
  const farmRouteConsumer = router.route("/farmPosts/:id/consumers");

  const SUCCESS = 200;
  const NOT_FOUND = 404;
  const SERVER_ERR = 500;

  //get single farmPost
  farmRoute.get(async (req, res) => {
    const { id } = req.params;
    try {
      const post = await FarmPost.findById(id);
      if (!post) {
        res.status(NOT_FOUND).send({
          message: "Post not found."
        });
      }
      res.status(SUCCESS).send({
        message: "Post successfully retrieved.",
        data: post
      });
    } catch (err) {
      res.status(SERVER_ERR).send({
        message: "Internal server error."
      });
    }
  });

  //get all farmPosts
  farmRoutes.get(async (req, res) => {
    try {
      const posts = await FarmPost.find({});
      if (!posts) {
        res.status(NOT_FOUND).send({
          message: "Post not found."
        });
      }
      res.status(SUCCESS).send({
        message: "Posts successfully retrieved.",
        data: posts
      });
    } catch (err) {
      res.status(SERVER_ERR).send({
        message: "Internal server error."
      });
    }
  });

  //post farmRoutes
  farmRoutes.post(async (req, res) => {
    const {
      name,
      email,
      description,
      address,
      time,
      volunteers,
      consumers
    } = req.body;
    const newPost = new FarmPost({
      name,
      email,
      description,
      address,
      time,
      volunteers,
      consumers
    });
    try {
      const post = await newPost.save();
      if (!post) {
        res.status(NOT_FOUND).send({
          message: "Post not found."
        });
      }
      res.status(SUCCESS).send({
        message: `Successfully created new post with name: ${name}`
      });
    } catch (err) {
      res.status(SERVER_ERR).send({
        message: "Internal server error."
      });
    }
  });

  //update volunteers
  farmRouteVolunteer.put(async (req, res) => {
    const { id } = req.params;
    const { volunteers} = req.body;
    const fieldsToUpdate = {};
    if (volunteers) {
      fieldsToUpdate["volunteers"] = volunteers;
    }
    try {
      const post = await FarmPost.findByIdAndUpdate(
        id,
        { $set: fieldsToUpdate },
        { new: true }
      );
      if (!post) {
        res.status(NOT_FOUND).send({
          message: "Post not found."
        });
      }
      res.status(SUCCESS).send({
        message: "Post volunteers updated successfully."
      });
    } catch (err) {
      res.status(SERVER_ERR).send({
        message: "Internal server error."
      });
    }
  });

  //update volunteers
  farmRouteConsumer.put(async (req, res) => {
    const { id } = req.params;
    const { consumers } = req.body;
    const fieldsToUpdate = {};
    if (consumers) {
      fieldsToUpdate["consumers"] = consumer;
    }
    try {
      const post = await FarmPost.findByIdAndUpdate(
        id,
        { $set: fieldsToUpdate },
        { new: true }
      );
      if (!post) {
        res.status(NOT_FOUND).send({
          message: "Post not found."
        });
      }
      res.status(SUCCESS).send({
        message: "Post consumers updated successfully."
      });
    } catch (err) {
      res.status(SERVER_ERR).send({
        message: "Internal server error."
      });
    }
  });

  //post multiple farmRoutes
  farmRoutesMultiple.post(async (req, res) => {
    for (let i = 0; i < req.body.data.length; i++) {
    const {
      name,
      email,
      description,
      address,
      time,
      volunteers,
      consumers
    } = req.body.data[i];
    const newPost = new FarmPost({
      name,
      email,
      description,
      address,
      time,
      volunteers,
      consumers
    });
    try {
      const post = await newPost.save();
      if (!post) {
        res.status(NOT_FOUND).send({
          message: "Post not found."
        });
      }
      res.status(SUCCESS).send({
        message: `Successfully created new post with name: ${name}`
      });
    } catch (err) {
      res.status(SERVER_ERR).send({
        message: "Internal server error."
      });
    }
  }
  });
  return router;
};
