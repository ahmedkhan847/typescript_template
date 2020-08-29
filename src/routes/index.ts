import * as express from "express";
import { Request, Response } from "express";
import UserRouter from "./user";

const HomeRouter = express.Router();

HomeRouter.get("/", (req: Request, res: Response) => {
  res.send("The sedulous hyena ate the antelope!");
});

const routes = [
  {
    path: "/",
    route: HomeRouter,
  },
  {
    path: "/user",
    route: UserRouter,
  },
];
const router = express.Router();

routes.forEach((route) => router.use(route.path, route.route));

export default express.Router().use("/", router);
