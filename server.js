const express = require("express");

const app = express();
const PORT = 5000;
app.use(express.json());
app.get("/createblog", (req, res) => {
  const { title, body } = req.body;
  //   const title = req.body.title;
  //   const body = req.body.body;
  console.log(title, body);
  res.send({ id: 500 });
});

app.listen(PORT, () => console.log(`Backend Hosted at ${PORT}`));
