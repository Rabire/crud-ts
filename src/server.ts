import express, { Request, Response } from "express";

const PORT = 3040;

const app = express();

app.get("/", (req: Request, res: Response) => {
  return res.send("hello world");
});

app.listen(PORT, () => console.log("server is running on port " + PORT));
