import express from "express";
import api from "services/api";
import database from "services/database";

const PORT = 3041;

const app = express();

// services
api(app);
database();

app.listen(PORT, () => console.log("Listening on port " + PORT));
