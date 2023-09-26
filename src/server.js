import express from "express";

const PORT = 5000;

const app = express();

const FirstHome = (tomato, potato) => {
  return potato.send("<html><body><h1>끝까지</h1></body></html>");
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

app.get("/", FirstHome);
app.get("/about.html", SecondHome);
app.get("/contact.html", ThirdHome);
app.get("/login.html", FourthHome);

const handleListening = () => {
  console.log(`server on port http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);
