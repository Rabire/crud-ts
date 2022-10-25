import { Express, Request, Response } from "express";
import { json, urlencoded } from "body-parser";

import userRoutes from "routes/user";
import petsRoutes from "routes/pets";

const api = (app: Express) => {
  app.use(json());
  app.use(urlencoded({ extended: false }));

  app.use("/user", userRoutes);
  app.use("/pets", petsRoutes);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  app.use((err: any, req: Request, res: Response) =>
    res.json({ status: 500, error: err?.parent?.text || err.message })
  );
};

export default api;
