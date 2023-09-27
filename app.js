const express = require("express");
const mongoose = require("mongoose");

const app = express();

// conenction to mongodb
mongoose.connect("mongodb+srv://cforcoding:admin123@cluster0.dno8sxd.mongodb.net/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then( ()=>{
  console.log("DB Connected ")
}).catch( (e) =>{
  console.log(e)
})


// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");



// routes
app.use(require("./routes/index"))
app.use(require("./routes/todo"))


// server configurations....
app.listen(5000, () => console.log("Server started listening on port: 5000"));
