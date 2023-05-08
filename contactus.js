const express = require("express");
const contactusRouter = express.Router();

contactusRouter.get("/", (request, response) => {
    response.send("hello from contact ");
});

module.exports = contactusRouter;
