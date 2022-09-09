import { Request } from "express";

export const getPagination = (req: Request) => {
  const limit = Number.parseInt(req.query.limit as string) || 10;
  const offset = Number.parseInt(req.query.offset as string) || 0;

  return { limit, offset };
};
