import * as express from "express";
import * as cors from "cors";
import { SlidesData } from "./constants/slides";

const app = express();
const port = 3300;
app.use(cors());
app.use("/assets", express.static("assets"));

app.get("/slides", (req, res) => {
  res.send(SlidesData);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
