module.exports = app => {

  const tutorials = require("../Controllers/usercontroller.js");
  var router = require("express").Router();

  // for image show public url
  router.post("/", tutorials.create);

  router.get("/", tutorials.findAll);

  router.get("/published", tutorials.findAllPublished);

  router.get("/:id", tutorials.findoneuser);

  router.put("/:id", tutorials.update);

  router.delete("/:id", tutorials.delete);

  router.delete("/", tutorials.deleteAll);

  app.use('/api/tutorials', router);


};


//2nd method 

  // app.post('/api/createusers',Users.createUser);
    // app.post('/api/signin',Users.signin)
    // app.get('/api/users/getuserslist',Users.getAllUsers);
    // app.put('/api/users/updateuser',authJwt.verfiyToken,Users.updateUser)
    // app.delete('/api/users/deleteuser',authJwt.verfiyToken,Users.deleteUser)

