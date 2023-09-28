import express from "express";
import morgan from "morgan";

const PORT = 5000;

const app = express();
const logger = morgan("dev");

const privateMiddleware = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    return res.send("<h1>Not Allowed</h1>");
  }
  console.log("Allowed, you may continue. ");
  next();
};

const FirstHome = (tomato, potato) => {
  return potato.send("<html><body><h1>가자</h1></body></html>");
};

const SecondHome = (spicy, noodle) => {
  return noodle.send("<html><body><h1>해내는 거야</h1></body></html>");
};

const ThirdHome = (love, you) => {
  return you.send("<html><body><h1>포기는</h1></body></html>");
};

const FourthHome = (footBall, basketBall) => {
  return basketBall.send("<html><body><h1>없어</h1></body></html>");
};

app.use(logger);
app.use(privateMiddleware);
app.get("/", FirstHome);
app.get("/about.html", SecondHome);
app.get("/protected.html", ThirdHome);
app.get("/login.html", FourthHome);

const handleListening = () => {
  console.log(`server on port http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);
