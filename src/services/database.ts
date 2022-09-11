import database from "config/database";

const startDatabase = () => {
  database
    .sync()
    .then(() => console.log("Database synced successfully"))
    .catch((err) => console.log("Err " + err));
};

export default startDatabase;
