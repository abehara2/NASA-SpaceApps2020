const { User } = require("../models");

module.exports = function(router) {
  const usersRoute = router.route("/users");
  const userRoute = router.route("/users/:id");

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
  return router;
};
