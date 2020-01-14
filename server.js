/**
 * @using es6 syntaxes
 */

import express from "express";
import dotenv from "dotenv";
import Route from "./routes/Route";

const app = express();
const PORT = process.env.PORT || 3001;

dotenv.config({ path: "./config.env" });

app.use("/", Route);
app.set("view engine", "ejs");

app.listen(PORT, () => console.log(`Listening in ${PORT}`));
