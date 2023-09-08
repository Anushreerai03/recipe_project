const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");
const port=process.env.PORT||3001;
// const { URI, PORT } = process.env;

// mongoose
//   .connect(URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("MongoDB is  connected successfully"))
//   .catch((err) => console.error(err));

// app.listen(PORT, () => {
//   console.log(`Server is listening on port ${PORT}`);
// });

// app.use(
//   cors({
//     origin: ["http://localhost:3000"],
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true,
//   })
// );
// app.use(cookieParser());

// app.use(express.json());

// app.use("/", authRoute);

mongoose.connect('mongodb://localhost:27017/anu', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const menuSchema = new mongoose.Schema({
  // Define your schema fields here
  // For example:
    recipe: String,
    price: int,
});

const Menu = mongoose.model('Menu', menuSchema);

// Define routes for your API
app.use(express.json());

// Example API endpoints for Menu and AboutUs
app.get('/api/menu', async (req, res) => {
  try {
    const menuItems = await Menu.find();
    res.json(menuItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});
// Add similar routes for AboutUs and any other data you need

// Serve static files (your React frontend)
app.use(express.static('build')); // Replace 'build' with your frontend build folder

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});