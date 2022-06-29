const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();
const morgan = require('morgan')
var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));

// app.use(...);
const db = require("./models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

app.use(cors());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(morgan('combined'))

// var bodyParser = require("body-parser");
const { upload } = require('./uploadFiles');
app.use(bodyParser.urlencoded({ extended: false }));


// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// simple route 
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});
// set port, listen for requests

require("./routes/UserRoute.js")(app);
require("./routes/CategoryRoute.js")(app);

app.post("/", upload.single('lee'), (req, res) => {
  // console.log(req.body);
 res.status(200).send(req.body)
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

module.exports = app





