import express, { Request, Response, NextFunction } from "express";
import { json, urlencoded } from "body-parser";
import database from "./database/config";
import todosRoutes from "./routes/todos";

const PORT = 3040;

const app = express();

app.use(json());
app.use(urlencoded({ extended: false }));

app.use("/totos", todosRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

database
  .sync()
  .then(() => console.log("Database synced successfully"))
  .catch((err) => console.log("Err " + err));

app.listen(PORT, () => console.log("Server is running on port " + PORT));
