const mongoose = require('mongoose');
const dburl = "mongodb+srv://mdsiaofficial:ecom@ecom-webapp.pa5qk.mongodb.net/ecomdb?retryWrites=true&w=majority&appName=ecom-webapp"

const connectDB = async () => {
	mongoose.connect(process.env.MONGO_URI)
		.then(() => console.log('Database connected successfully!'))
		.catch(err => console.log('Database connection error:', err));
};

module.exports = connectDB;