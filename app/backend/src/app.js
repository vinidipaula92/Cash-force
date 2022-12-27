require('dotenv').config();
const express = require('express');
const cors = require('cors');
require('express-async-errors');
const errorHandlerMiddleware = require('./middlewares/errorHandler');
const receiptRoute = require('./routes/receipt.route');
// const swaggerJSDoc = require('swagger-jsdoc');
// const swaggerConfig = require('./docs/swagger.config');
// const swaggerUi = require('swagger-ui-express');

const app = express();
app.use(cors());
app.use(express.json());

// const swaggerDoc = swaggerJSDoc(swaggerConfig);
// app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use('/receipt', receiptRoute);
app.use(errorHandlerMiddleware);

app.listen(process.env.API_PORT, () =>
  console.log('API rodando na porta 3001'));
