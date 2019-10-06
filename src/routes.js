const express = require('express');
const authMiddle = require('./midllewares/auth');

const routes = express.Router();

routes.use(authMiddle);

const ProductController = require('./controllers/ProductController')
routes.get("/products", ProductController.index);
routes.get("/products/:id", ProductController.show);
routes.put("/products/:id", ProductController.update);
routes.delete("/products/:id", ProductController.delete);
routes.post("/products", ProductController.store);


module.exports = routes;