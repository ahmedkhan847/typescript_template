import * as express from "express";
import { Request, Response } from "express";

const HomeRouter = express.Router();

HomeRouter.get("/", (req: Request, res: Response) => {
  res.send("The sedulous hyena ate the antelope!");
});

export default HomeRouter;
