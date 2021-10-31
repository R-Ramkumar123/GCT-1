const express = require("express");
// const profiles = require("./data/profiles");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const profileRoutes = require("./routes/profileRoutes");
const { notFound, errorHandler } = require("./middlewares/errormiddleware");
const path = require("path");

const app = express();
dotenv.config();
connectDB();

app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("API is running");
// });

// --------------------deployment------------------------

// __dirname = path.resolve();
// if(process.env.)

// --------------------deployment------------------------

// app.get("/api/profiles", (req, res) => {
//   res.json(profiles);
// });

app.use("/api/users", userRoutes);
app.use("/api/profiles", profileRoutes);
// app.use("/api/profiles", profileRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 7000;

app.listen(PORT, console.log(`server started on port ${PORT}`));
