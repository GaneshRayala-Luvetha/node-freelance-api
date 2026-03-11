const pool = require("../config/db");

exports.createService = async (data) => {

    const { title, image_url,description, base_price,rating,created_at } = data;

    const result = await pool.query(
        "INSERT INTO services(title,image_url,description,base_price,rating,created_at) VALUES($1,$2,$3,$4,$5,$6) RETURNING *",
        [title, image_url, description,base_price,rating,created_at]
    );

    return result.rows[0];

};

exports.getServices = async () => {

    const result = await pool.query("SELECT * FROM services");

    return result.rows;

};

exports.getServiceById = async (id) => {

    const result = await pool.query(
        "SELECT * FROM services WHERE id = $1",
        [id]
    );

    return result.rows[0];

};