const dbConfig = require("../config/dbconfig.js");
const mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.tutorials = require("./usermodel.js")(mongoose ,mongoosePaginate);
db.category = require("./categorymodel.js")(mongoose);
module.exports = db;




