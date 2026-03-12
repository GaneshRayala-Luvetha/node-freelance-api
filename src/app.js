const express = require("express");
const cors = require("cors");

const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger-output.json");

const serviceRoutes = require("./routes/serviceRoutes");

const app = express();

// const allowedOrigins = [
//   "http://localhost:3000",
//   "http://localhost:3001",
//   "http://localhost:3002",
//   "http://localhost:5173",
//   "http://localhost:5000",
// ];

// app.use(
//   cors({
//     origin: function (origin, callback) {
//       if (!origin || allowedOrigins.includes(origin)) {
//         callback(null, true);
//       } else {
//         callback(new Error("Not allowed by CORS"));
//       }
//     },
//     credentials: true,
//   })
// );


app.use(cors({
    origin:'*',
    methods:['GET','PUT','PATCH','DELETE','UPDATE','OPTIONS'],
    allowedHeaders:['content-type','Authorization']
}))

app.use(express.json());

app.use("/api/services", serviceRoutes);

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerFile));

module.exports = app;