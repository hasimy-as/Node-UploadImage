import express from "express";

const app = express();
const PORT = 3001 || process.env.PORT;

app
  .get("/", (req, res) => res.end("halo from serverrr"))
  .listen(PORT, err => {
    if (err) throw err;
    console.log(`Runs in ${PORT}`);
  });
