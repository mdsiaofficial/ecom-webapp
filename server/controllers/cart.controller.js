const Cart = require("../models/cart.model");

exports.getCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.user.id }).populate('products.productId');
        res.json(cart);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

exports.addToCart = async (req, res) => {
    const { productId } = req.body;
    try {
        let cart = await Cart.findOne({ userId: req.user.id });
        if (cart) {
            const productIndex = cart.products.findIndex(p => p.productId.toString() === productId);
            if (productIndex > -1) {
                cart.products[productIndex].quantity += 1;
            } else {
                cart.products.push({ productId });
            }
        } else {
            cart = new Cart({ userId: req.user.id, products: [{ productId }] });
        }
        await cart.save();
        res.json(cart);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

exports.removeFromCart = async (req, res) => {
    const { productId } = req.body;
    try {
        const cart = await Cart.findOne({ userId: req.user.id });
        cart.products = cart.products.filter(p => p.productId.toString() !== productId);
        await cart.save();
        res.json(cart);
    } catch (err) {
        res.status(500).send('Server error');
    }
};
