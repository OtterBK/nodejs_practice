"use strict";

const express = require("express");
const bodyParser = require("body-parser")
const jquery = require("jquery");
const app = express();

app.set("views", "src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`))
app.use(express.static(`${__dirname}/node_modules`))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const home = require("./src/routes/home");
app.use("/", home); //use -> 미들 웨어를 등록해주는 메서드

module.exports = app;