const express = require('express');
const authMiddleware = require('../middleware/auth.middleware');
const { getCart, addToCart, removeFromCart } = require('../controllers/cart.controller');
const cartRouter = express.Router();

cartRouter.get('/', authMiddleware, getCart);
cartRouter.post('/add', authMiddleware, addToCart);
cartRouter.post('/remove', authMiddleware, removeFromCart);

module.exports = cartRouter;