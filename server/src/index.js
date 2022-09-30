// server.js
import bodyParser from "body-parser";
import express from "express";
// import './config/mongodb.config';
// import postRouter from './routes/post.router';

const app = express();
const PORT = 8080;

// Our DB Configuration
//require('./src/database');

// Routes
//const postRouter = require('./routes/post.router.js');
import indexRoutes from "./routes/index";
import webpayPlusRoutes from "./routes/webpay_plus";

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

// Server API's
// app.use('/api/posts', postRouter);

// app.get('/', (req, res) => {
//   res.status(200).send('API Gateway in development');
// })

app.use("/", indexRoutes);
app.use("/webpay_plus", webpayPlusRoutes);
app.get("/abc", function (req, res) {
  res.send("Hello abc!");
});

app.listen(PORT, function () {
  console.log(`Server Listening on ${PORT}`);
});

export default app;
