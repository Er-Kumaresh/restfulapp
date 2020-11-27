var express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  freelancerRoutes = require("./routes/freelancer"),
  recruiterRoutes = require("./routes/recruiter");
  

//body parser
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

//View Engine setup - EJS
app.set("view engine", "ejs");

//Static folder(accesible  "/static/folder")
app.use("/public", express.static(__dirname + "/public"));

app.get("/", function (req, res) {
    res.render("index");
})

// freelancer Routes
app.use("/freelancer", freelancerRoutes);

// Recruiter Routes
app.use("/recruiter", recruiterRoutes);

//Other routes
app.use("*", function (req, res) {
  res.redirect("/");
});

//Server listening
app.listen(3000, function () {
  console.log("Server Started successfully");
});
