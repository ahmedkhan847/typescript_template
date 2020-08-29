import * as express from "express";
import { Request, Response } from "express";
import { User } from "../models/user";

const UserRouter = express.Router();

UserRouter.get("/", async (req: Request, res: Response) => {
  const user = await User.create({
    username: "ahmed",
    email: "ahmedkhan_847@hotmail.com",
    password: "123456",
  });
  res.json(user);
});

export default UserRouter;
