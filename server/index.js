import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import studentRoutes from "./routes/student.js";



const app = express();

app.use("/", studentRoutes);

app.use(bodyParser.json({ limit: "20mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));

app.use(cors());

const CONNECTION_URL =
  "mongodb+srv://mongodbuser:mongodbpassword@cluster0.dbv79.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true, // to avoid errors in the console
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Connection is established and running on port: ${PORT}`)
    )
  )
  .catch((err) => console.log(err.message));

  mongoose.set("useFindAndModify", false);