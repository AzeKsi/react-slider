import * as express from "express";
import { SlidesData } from "../constants/slides.const";
import { Router, Request, Response } from "express";

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
  try {
    res.json(SlidesData);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
