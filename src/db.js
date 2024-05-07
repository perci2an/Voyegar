import mongoose, { mongo } from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/videoPackage", {});

const handleOpen = () => console.log("✅ Connection to DB");
const handleError = (error) => console.log("🔥 DB Error", error);

mongoose.connection.once("open", handleOpen);
mongoose.connection.on("error", handleError);
