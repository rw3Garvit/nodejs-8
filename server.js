// let { print } = require("./test");

// print();
console.log(__dirname);

let http = require("http");
let express = require("express");
const bodyParser = require("body-parser");

let app = express();

app.use(bodyParser.json());

// app.listen(3001, () => {
//   console.log("server started");
// });

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/getuser", (req, res) => {
  let arr = [
    {
      name: "garvit",
      password: "123",
    },
    {
      name: "user",
      password: "123",
    },
  ];

  res.status(200).json({
    messsage: "get user successfully",
    user: arr,
  });
});

app.post("/create-user", (req, res) => {
  try {
    console.log(req.body);

    let body = req.body;

    if (body.firstname == "" || body.lastname == "") {
      throw new Error("please fill the data");
    }
    res.status(201).json({
      message: "user created successfully",
      user: body,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

http.createServer(app).listen(3001, () => {
  console.log("server started");
});
