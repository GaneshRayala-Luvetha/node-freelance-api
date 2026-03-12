const express = require("express");
const upload = require("../utils/upload");
const router = express.Router();
const serviceController = require("../controllers/serviceController");

router.get("/", serviceController.getServices);

router.get("/:id", serviceController.getServiceById);

router.post("/create", upload.single("image"), async (req, res, next) => {

    /* 
    #swagger.consumes = ['multipart/form-data']
    #swagger.parameters['title'] = {
        in: 'formData',
        type: 'string',
        required: true
    }
    #swagger.parameters['description'] = {
        in: 'formData',
        type: 'string'
    }
    #swagger.parameters['base_price'] = {
        in: 'formData',
        type: 'number'
    }
    #swagger.parameters['rating'] = {
        in: 'formData',
        type: 'number'
    }
    #swagger.parameters['image'] = {
        in: 'formData',
        type: 'file',
        required: true
    }
    */

    next();

}, serviceController.createService);

module.exports = router;