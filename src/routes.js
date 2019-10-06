const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController')
routes.get("/products", ProductController.index);
routes.get("/products/:id", ProductController.show);
routes.put("/products/:id", ProductController.update);
routes.delete("/products/:id", ProductController.delete);
routes.post("/products", ProductController.store);

const UserController = require('./controllers/UserController');
routes.post("/users", UserController.store);


const AuthController = require('./controllers/AuthController');
routes.post("/auth", AuthController.auth);

module.exports = routes;