import express from "express";
import cors from "cors";
import slidesRoutes from "./routes/slides.routes";

const app = express();

app.use(cors());
app.use("/assets", express.static("assets"));

app.use("/slides", slidesRoutes);

export default app;
