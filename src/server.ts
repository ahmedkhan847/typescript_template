import express from "express";
import HomeRouter from "./routes";
import UserRouter from "./routes/user";
import SequelizeConnection from "./utl/database";

const app = express();
const port = 3000;

app.use("/", HomeRouter);
app.use("/user", UserRouter);

app.listen(port, async (err) => {
  if (err) {
    return console.error(err);
  }
  const sequelizeConnection = new SequelizeConnection();
  sequelizeConnection.init();
  await sequelizeConnection.connection.sync({ force: true });
  return console.log(`server is listening on ${port}`);
});
