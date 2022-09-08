import { RequestHandler } from "express";

// https://www.youtube.com/watch?v=s5YoXms0ECs

const catchHandler =
  (fn: RequestHandler): RequestHandler =>
  (req, res, next) =>
    Promise.resolve(fn(req, res, next)).catch(next);

export default catchHandler;
