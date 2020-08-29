import express from "express";
import SequelizeConnection from "./utl/database";
import helmet from "helmet";
import bodyParser from "body-parser";
import router from "./routes";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);

app.listen(port, async (err) => {
  if (err) {
    return console.error(err);
  }
  const sequelizeConnection = new SequelizeConnection();
  sequelizeConnection.init();
  await sequelizeConnection.connection.sync({ force: true });
  return console.log(`server is listening on ${port}`);
});
