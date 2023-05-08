const express = require("express");
const aboutRouter = express.Router();

aboutRouter.get("/", (request, response) => {
    response.send("hello from home ");
});

module.exports = aboutRouter;
