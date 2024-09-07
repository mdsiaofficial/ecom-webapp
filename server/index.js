const express = require('express');
const connectDB = require('./config/db');
const authRouter = require('./routes/auth.routes');
const productRouter = require('./routes/product.routes');
const cartRouter = require('./routes/cart.routes');
require('dotenv').config();

const app = express();
connectDB();
app.use(express.json());

app.get('/', (req, res)=> res.json({message:"homee"}))
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/products', productRouter);
app.use('/api/v1/cart', cartRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));