const db = require("../models");
const Tutorial = db.category;

exports.create = (req, res) => {
    console.log(req.files)
    if (!req.body.firstName) {
        res.status(400).send({ message: "firstName can not be empty!" });
        return;
    }

  else{
    const tutorial = new Tutorial({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
        city: req.body.city,
        userId: req.body.userId,
        image: req.files.image[0].path,
        video: req.files.video[0].path,
        place: req.body.place,
        company: req.body.company
    });

    tutorial
        .save(tutorial).then(data => {
            res.send({
                "message": "Category added Successfully",
                result: data
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the category."
            });
        });
console.log("first")
  }
};

exports.Finduser =  (req, res) => {

    let data =  Tutorial.find()
    .populate('userId')
    // res.send(data);

    console.log("data ===", data)
    Tutorial.find(data)
        .then(data => { res.send({
            "message": " Show All Category Successfully",
            result: data}) })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving category."
            });
        });
};


