const express = require("express");
const homeRouter = express.Router();

homeRouter.get("/", (request, response) => {
    response.send("hello from home ");
});
module.exports = homeRouter;
