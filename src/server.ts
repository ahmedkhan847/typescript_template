import express, {Request, Response, NextFunction} from "express";
import SequelizeConnection from "./utl/database";
import helmet from "helmet";
import bodyParser from "body-parser";
import router from "./routes";
import cors from "cors";
import { env } from "process";

const app = express();
const port = env.NODE_PORT || 3000;

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use(router);

app.use(async function (req: Request, res: Response, next: NextFunction) {
  const sequelizeConnection = new SequelizeConnection();
  sequelizeConnection.init();
  await sequelizeConnection.connection.sync({ force: true });
  next()
});

app.listen(port);