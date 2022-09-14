import { Express, Request, Response, NextFunction } from "express";
import { json, urlencoded } from "body-parser";

import todoRoutes from "routes/todo";
import userRoutes from "routes/user";

const api = (app: Express) => {
  app.use(json());
  app.use(urlencoded({ extended: false }));

  app.use("/todo", todoRoutes);
  app.use("/user", userRoutes);

  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({ error: err.message });
  });
};

export default api;
