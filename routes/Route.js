import { Router } from "express";
import { uploadFile } from "../controllers/Control";
const Route = Router();

Route.get("/", (req, res) => res.render("index"));
Route.post("/upload", uploadFile);

export default Route;
