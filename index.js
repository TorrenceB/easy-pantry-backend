import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import "dotenv/config";

import recipesRoutes from "./routes/recipes.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());
app.use("/recipes", recipesRoutes);

app.get("/", (req, res) => res.send("Hello from Homepage"));

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
