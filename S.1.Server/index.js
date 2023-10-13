import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import authRoutes from "./routes/auth.js";
import User from "./models/User.js";

/* CONFIGURATIONS */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

/* ROUTES */
app.use("/auth", authRoutes);




/* MONGOOSE SETUP */
const PORT = process.env.PORT || 6001;
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server started at the Port: ${PORT}`));

    /* ADD DATA ON THE TIME SERVER START */
    // User.insertMany(user);
  })
  .catch((error) => console.log(`${error} did not connect`));


// const user = {
//   "firstName": "Daniel",
//   "lastName": "Anderson",
//   "email": "danielanderson@example.com",
//   "password": "daniel456",
//   "interests": ["cooking", "gardening"],
//   "location": "Melbourne",
//   "occupation": "Chef"
// }; 