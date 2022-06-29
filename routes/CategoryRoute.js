const { upload } = require("../uploadFiles.js");

module.exports = app => {

    const datas = require("../Controllers/CategoryController.js");
    var router = require("express").Router();

    // for image show public url
    const express = require('express');
    app.use(express.static(__dirname + '/public'));
    app.use('/uploads', express.static('uploads'));


    //  router.post("/form", upload.single('video'), datas.create);
    router.post("/createCategory", upload.fields([{ name: "image", maxCount: 1 }, { name: "video", maxCount: 1 }]), datas.create);
    router.get('/allCategory', datas.Finduser);
    router.get('/papulateCategory', datas.Finduser);
    app.use('/api/category', router);
};



