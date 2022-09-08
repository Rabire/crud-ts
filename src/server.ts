import express, { Request, Response, NextFunction } from "express";
import { json, urlencoded } from "body-parser";

import database from "config/database";
import config from "config/environment";
import todosRoutes from "routes/todos";

const PORT = config.port;

const app = express();

app.use(json());
app.use(urlencoded({ extended: false }));

app.use("/todos", todosRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

database
  .sync()
  .then(() => console.log("Database synced successfully"))
  .catch((err) => console.log("Err " + err));

app.listen(PORT, () => console.log("Listening on port " + PORT));
