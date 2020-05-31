const { User } = require("../models");
const { FarmPost } = require("../models");

module.exports = function(router) {
  const usersRouteMultiple = router.route("/users/many");
  const usersRoute = router.route("/users");
  const userRoute = router.route("/users/:id");
  const userVolunteerRoute = router.route("/users/:id/volunteer");
  const userConsumerRoute = router.route("/users/:id/consumer");

  const SUCCESS = 200;
  const NOT_FOUND = 404;
  const SERVER_ERR = 500;
  const SERVER_ERR_MSG = "Internal server error.";

  // create new User
  usersRoute.post(async (req, res) => {
    const {
      name,
      email,
      destination,
      time,
      volunteerEvents,
      consumerEvents,
      description
    } = req.body;
    const newUser = new User({
      name,
      email,
      destination,
      time,
      volunteerEvents,
      consumerEvents,
      description
    });
    try {
      const user = await newUser.save();
      if (user) {
        res.status(SUCCESS).send({
          message: "Successfully created new user."
        });
      } else {
        res.status(NOT_FOUND).send({
          message: "User not found."
        });
      }
    } catch (err) {
      res.status(SERVER_ERR).send({
        message: SERVER_ERR_MSG
      });
    }
  });

  //get specific User
  userRoute.get(async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id);
    try {
      if (user) {
        res.status(SUCCESS).send({
          message: `${user.name} Successfully retrieved`,
          data: user
        });
      } else {
        res.status(NOT_FOUND).send({
          message: `User not found.`
        });
      }
    } catch (err) {
      res.status(SERVER_ERR).send({
        message: SERVER_ERR_MSG
      });
    }
  });

  // update user volunteer events
  userVolunteerRoute.put(async (req, res) => {
    const { id } = req.params;
    const { farmPostToAdd, destination } = req.body;
    try {
      const farmPost = await FarmPost.findById(farmPostToAdd);
      if (!farmPost) {
        res.status(NOT_FOUND).send({
          message: "Post not found."
        });
      }
      const user = await User.findByIdAndUpdate(id, {
        $push: { volunteerEvents: farmPostToAdd },
        $set: { destination }
      });
      if (user) {
        await FarmPost.updateOne(
          { _id: farmPostToAdd },
          { $push: { volunteers: user._id } }
        );
        res.status(SUCCESS).send({
          message: "Added post to user's volunterEvents."
        });
      } else {
        res.status(NOT_FOUND).send({
          message: "User not found."
        });
      }
    } catch (err) {
      res.status(SERVER_ERR).send({
        message: SERVER_ERR_MSG
      });
    }
  });

  // update user consumer events
  userConsumerRoute.put(async (req, res) => {
    const { id } = req.params;
    const { farmPostToAdd } = req.body;
    try {
      const farmPost = await FarmPost.findById(farmPostToAdd);
      if (!farmPost) {
        res.status(NOT_FOUND).send({
          message: "Post not found."
        });
      }
      const user = await User.findByIdAndUpdate(id, {
        $push: { consumerEvents: farmPostToAdd }
      });
      if (user) {
        await FarmPost.updateOne(
          { _id: farmPostToAdd },
          { $push: { consumers: user._id } }
        );
        res.status(SUCCESS).send({
          message: "Added post to user's consumerEvents."
        });
      } else {
        res.status(NOT_FOUND).send({
          message: "User not found."
        });
      }
    } catch (err) {
      res.status(SERVER_ERR).send({
        message: SERVER_ERR_MSG
      });
    }
  });

  //post multiple documents
  usersRouteMultiple.post(async (req, res) => {
    for (let i = 0; i < req.body.data.length; i++) {
      const {
        name,
        email,
        destination,
        address,
        time,
        volunteerEvents,
        consumerEvents,
        description
      } = req.body.data[i];
      const newUser = new User({
        name,
        email,
        destination,
        address,
        time,
        volunteerEvents,
        consumerEvents,
        description
      });
      try {
        const user = await newUser.save();
        if (user) {
          res.status(SUCCESS).send({
            message: "Successfully created new user."
          });
        } else {
          res.status(NOT_FOUND).send({
            message: "User not found."
          });
        }
      } catch (err) {
        res.status(SERVER_ERR).send({
          message: SERVER_ERR_MSG
        });
      }
    }
    });
  

  return router;
};
