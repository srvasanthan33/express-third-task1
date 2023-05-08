const express = require("express");
const serviceRouter = express.Router();

const SERVICES = [
    {
        name: "Poster designing"
    },
    {
        name: "video Editing"
    },
    {
        name: "Affliate Marketing"
    },
    {
        name: "web Developing"
    }
];
serviceRouter.get("/", (request, response) => {
    response.send("hello from service");
});
serviceRouter.get("/:id", (request, response) => {
    response.send(request.service.name);
    console.log(id);
});

serviceRouter.param("id", (request, response, next, id) => {
    request.service = SERVICES[id];
    next();
});

module.exports = serviceRouter;
