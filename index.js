require("dotenv").config();
const express = require("express");
const http = require("http");

const app = express();
app.use(express.static("./public"));
const server = http.createServer(app);

// set up express routes
app.get("/", (_, res) => {
  res.sendFile("public/pages/index.html", { root: "." });
});

app.get("/papers/yarrowia-tag-mfa-gsm", (_, res) => {
  res.sendFile("public/papers/yarrowia-tag-mfa-gsm.pdf", { root: "." });
});

app.get("/papers/gpt4-knowledge-mining", (_, res) => {
  res.sendFile("public/papers/gpt4-knowledge-mining.pdf", { root: "." });
});

app.get("/papers/r-opacus-genome-scale-model", (_, res) => {
  res.sendFile("public/papers/r-opacus-genome-scale-model.pdf", { root: "." });
});

app.get("/papers/syngas-machine-learning", (_, res) => {
  res.sendFile("public/papers/syngas-machine-learning.pdf", { root: "." });
});

app.get("/papers/system-biology-r-opacus", (_, res) => {
  res.sendFile("public/papers/system-biology-r-opacus.pdf", { root: "." });
});

app.get("/papers/division-of-labor-review", (_, res) => {
  res.sendFile("public/papers/division-of-labor-review.pdf", { root: "." });
});

app.get("*", (_, res) => {
  res.status(404);
  res.sendFile("public/pages/404.html", { root: "." });
});

server.listen(process.env.PORT, () => {
  console.log(`Listening on at http://localhost:${process.env.PORT}`);
});
