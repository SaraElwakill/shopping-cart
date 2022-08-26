require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDb = require("./database/connect");

const app = express();
const port = process.env.PORT || 5005;
const Product = require("./models/Product");
const User = require("./models/User");

app.use(cors());
app.use(express.json());
app.use(express.static("../client/build"));

app.get("/", async (req, res) => {
	const myTest = await Test.find();
	res.json(myTest);
});

app.delete("/deleteAll", async (req, res) => {
	try {
		const result = await Product.deleteMany({});
		res.status(200).json(result);
	} catch (err) {
		console.log(err);
		res.status(500).json({ msg: err.message });
	}
});
app.get("/users", async (req, res) => {
	console.log(req);
	const users = await User.find();
	res.json(users);
});

// app.post("/users", async (req, res) => {
//     try{

//         const users = await User.create({...req.body})
//         res.json(users)
//     }catch(err){
//         res.status(402).json(err.message)
//     }
// })

// const data = require('./data.json')
// Product.create(data)

app.get("/products", async (req, res) => {
	const products = await Product.find();
	res.json(products);
});
console.group("test");
console.log("line 1");
console.log("line 2");
console.log("line 3");
console.groupEnd();

const start = async () => {
	try {
		await connectDb(process.env.MONGO_URI);
		app.listen(port, () => {
			console.log("listening on port " + port);
		});
	} catch (err) {
		console.log(err);
	}
};
start();
