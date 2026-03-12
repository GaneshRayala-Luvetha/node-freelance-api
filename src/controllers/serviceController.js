const serviceService = require("../services/serviceService");
const uploadToCloudinary = require("../utils/cloudinaryUpload");


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

exports.createService = async (req, res) => {

  try {

    const { title, description, base_price, rating } = req.body;

    let imageUrl = null;

    if (req.file) {
      const result = await uploadToCloudinary(req.file.buffer);
      imageUrl = result.secure_url;
    }

    const service = await serviceService.createService({
      title,
      image_url: imageUrl,
      description,
      base_price,
      rating,
      created_at: new Date()
    });

    res.status(200).json(service);

  } catch (err) {

    console.error("CREATE SERVICE ERROR:", err);
    res.status(500).json({ error: err.message });

  }

};