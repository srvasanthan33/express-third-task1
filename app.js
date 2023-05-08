const express = require("express");
const app = express();

const home = require("./home.js");
const about = require("./about.js");
const contactus = require("./contactus.js");
app.get("/", (request, response) => {
    response.send("hello");
});

app.use("/homepage", home);
app.use("/aboutpage", about);
app.use("/contact", contactus);

app.listen(3600);
