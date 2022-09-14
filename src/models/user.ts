import { Model, DataTypes } from "sequelize";
import database from "config/database";

type UserAttributes = {
  id: string;
  email: string;
  password: string;
};

export class UserInstance extends Model<UserAttributes> {
  declare id: string;
  declare email: string;
  declare password: string;
}

UserInstance.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: database,
    tableName: "users",
  }
);

// https://www.youtube.com/watch?v=UcwT1SAvxG0
