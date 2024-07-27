const express = require("express");
const app = express();
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const sessionOption = {
  secret: "Aadutkarsha",
  resave: false,
  saveUninitialized: true,
};

app.use(session(sessionOption));
app.use(flash());

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});

app.get("/register", (req, res) => {
  let { name = "anonymous" } = req.query;
  if (name === "anonymous") {
    req.flash("error", "user is not registered ");
  } else {
    req.session.name = name;
    req.flash("success", "user registered successfuly");
  }
  res.redirect("/hello");
});

app.get("/hello", (req, res) => {
  // console.log(req.flash("success"));
  res.render("user.ejs", { name: req.session.name });
});

app.listen(3000, (req, res) => {
  console.log("Listining at port 3000");
});

// app.get("/count", (req, res) => {
//   if (req.session.count) {
//     req.session.count++;
//   } else {
//     req.session.count = 1;
//   }
//   res.send(`You send the rquest for ${req.session.count} time`);
// });

// app.get("/test", (req, res) => {
//   res.send("Successful");
// });
