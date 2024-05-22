// let { print } = require("./test");

// print();
console.log(__dirname);

let http = require("http");
let express = require("express");
const bodyParser = require("body-parser");
let connectDB = require("./db/dbConnect");

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");
// app.listen(3001, () => {
//   console.log("server started");
// });

app.get("/", (req, res) => {
  res.render("index");
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

    let { name } = req.body;
    console.log(name);

    res.render("index", { name });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

//db connection
connectDB();

//https server
http.createServer(app).listen(3001, () => {
  console.log("server started");
});
