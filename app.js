const express = require("express");
const app = express();

const homePage = require("./home.js");
const aboutPage = require("./about.js");
const contactusPage = require("./contactus.js");
const servicePage = require("./service.js");
app.get("/", (request, response) => {
    response.send("hello");
});

app.use("/homepage", homePage);
app.use("/aboutpage", aboutPage);
app.use("/contact", contactusPage);
app.use("/servicepage", servicePage);

app.listen(3600, () => {
    console.log("port is running");
});
