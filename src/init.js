import "dotenv/config";
import "./db";
import "./models/video";
import "./models/User";
import app from "./server";

const PORT = 5000;

const handleListening = () => {
  console.log(`✅ server on port http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);
