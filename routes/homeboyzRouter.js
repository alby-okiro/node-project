const express = require('express');
const homeboyzRouter = express.Router();

homeboyzRouter.route('/')
.all((req,res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res) =>{
    res.end('See all the homeboyz Team information here');
})
.post((req,res) => {
    res.end(`All the homeboyz info added: ${req.body.name} with description: ${req.body.description}`);
})
.put((req,res) =>{
    res.statusCode = 403;
    res.end('PUT operation not supported on /homeboyz');
})
.delete((req,res) =>{
    res.end('Deleting all homeboyz Information');
});

module.exports = homeboyzRouter;