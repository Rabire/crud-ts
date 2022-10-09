import { Express, Request, Response, NextFunction } from "express";
import { json, urlencoded } from "body-parser";
import { Error } from "sequelize";

import todoRoutes from "routes/todo";
import userRoutes from "routes/user";

const api = (app: Express) => {
  app.use(json());
  app.use(urlencoded({ extended: false }));

  app.use("/todo", todoRoutes);
  app.use("/user", userRoutes);

  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({ error: err.message });
    console.log(err?.parent?.text); // FIXME:
  });
};

export default api;
