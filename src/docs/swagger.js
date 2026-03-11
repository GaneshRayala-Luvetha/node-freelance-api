const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Freelance API',
        description: 'Freelance backend services'
    },
    host: 'localhost:5000',
    basePath: '/api/services',
    schemes: ['http']
};

const outputFile = '../swagger-output.json';
const endpointsFiles = ['../routes/serviceRoutes.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);