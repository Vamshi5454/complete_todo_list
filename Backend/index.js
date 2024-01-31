import express from "express";
import cors from "cors";
import fs from "fs";
// const cors = require("cors");
import bodyParser from "body-parser";

const app = express();
const port = 3004;
app.use(cors());
app.use(express.json());

// app.use(bodyParser.urlencoded({ extended: true }));
app.post("/", (req, res) => {
  console.log(req.body);
  fs.writeFile("database.json", JSON.stringify(req.body), (err) => {
    if (err) {
      console.error("Error writing to JSON file:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    console.log("Data written to data.json");
    res.json({ message: "Data written successfully" });
  });
});

app.listen(port, () => {
  console.log("server started");
});
