const express = require("express");
const User = require("../models/User");
const app = express();

app.post("/", (req, res) => {
    let body = req.body;
    let user = new User(
        {
            email: body.email,
            password:body.password
        }
    );
    user.save().then(result => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {
        res.end(JSON.stringify({ status: "failed", data: err }));
    });
});


app.get("/", (req, res) => {
    User.find().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {
        res.end(JSON.stringify({ status: "failed", data: err }));
    });
});


app.get("/:id", (req, res) => {
    User.findById(req.params.id).then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {
        res.end(JSON.stringify({ status: "failed", data: err }));
    });
});


app.put("/:id", (req, res) => {
    let body = req.body;
    User.findByIdAndUpdate(req.params.id, body).then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {
        res.end(JSON.stringify({ status: "failed", data: err }));
    });
});


app.delete("/:id",(req,res)=>{
    User.findByIdAndDelete(req.params.id).then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {
        res.end(JSON.stringify({ status: "failed", data: err }));
    });
})

module.exports = app;