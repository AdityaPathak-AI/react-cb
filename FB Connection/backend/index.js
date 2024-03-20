const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.send("hey its working");
});

app.post("/contact_us", (req, res) => {
  console.log("requested from frontend");
  //   const { name, email, password } = req.body;
  const data = req.body;

  const userData = {
    name: data.name,
    password: data.password,
  };
  console.log("formdata", userData);

  //   console.log(name);
});
app.listen(4000, () => {
  console.log("Servre listening on :", 4000);
});
