"use strict"

// 모듈
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const dotenv = require("dotenv");
const morgan = require("morgan");
const accessLogStream = require("./src/config/log");
dotenv.config();

// 라우팅   
const home = require("./src/routes/home");
 
//앱세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
// url을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함되는 경우 제대로 인식되지 않는 문제 해결 
app.use(bodyParser.urlencoded({extended : true}));

app.use(morgan('dev')); // 개발시 콘솔로 바로 확인할 수 있도록 
app.use(morgan('common', { stream: accessLogStream})); // 개발 후에는 tiny정도가 적정 


app.use("/", home); // use -> 미들 웨어를 등록해주는 메소드 

module.exports = app;