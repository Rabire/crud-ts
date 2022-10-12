import { Express, Request, Response } from "express";
import { json, urlencoded } from "body-parser";

import todoRoutes from "routes/todo";
import userRoutes from "routes/user";

const api = (app: Express) => {
  app.use(json());
  app.use(urlencoded({ extended: false }));

  app.use("/todo", todoRoutes);
  app.use("/user", userRoutes);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  app.use((err: any, req: Request, res: Response) => {
    res.status(500).json({ error: err?.parent?.text || err.message });
  });
};

export default api;
