const serviceService = require("../services/serviceService");

exports.createService = async (req, res) => {

    try {

        const service = await serviceService.createService(req.body);

        res.status(200).json(service);

    } catch (err) {

        res.status(500).json({ error: err.message });

    }

};

exports.getServices = async (req, res) => {

    try {

        const services = await serviceService.getServices();

        res.status(200).json(services);

    } catch (err) {

        res.status(500).json({ error: err.message });

    }

};

exports.getServiceById = async (req, res) => {

    try {

        const id = req.params.id;

        const service = await serviceService.getServiceById(id);

        res.status(200).json(service);

    } catch (err) {

        res.status(500).json({ error: err.message });

    }

};