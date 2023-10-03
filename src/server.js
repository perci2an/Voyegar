import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";

const PORT = 5000;

const app = express();
const logger = morgan("dev");
app.use(logger);

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use("/", globalRouter);
app.use("/user", userRouter);
app.use("/video", videoRouter);

const handleListening = () => {
  console.log(`server on port http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);
