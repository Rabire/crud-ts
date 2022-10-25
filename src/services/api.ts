import { Express, Request, Response } from "express";
import { json, urlencoded } from "body-parser";

import todoRoutes from "routes/todo"; // TODO: delete
import userRoutes from "routes/user";
import animalsRoutes from "routes/animals";

const api = (app: Express) => {
  app.use(json());
  app.use(urlencoded({ extended: false }));

  app.use("/todo", todoRoutes); // TODO: delete
  app.use("/user", userRoutes);
  app.use("/animals", animalsRoutes);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  app.use((err: any, req: Request, res: Response) =>
    res.json({ status: 500, error: err?.parent?.text || err.message })
  );
};

export default api;
