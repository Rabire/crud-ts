import { Model, DataTypes } from "sequelize";
import database from "config/database";

type UserAttributes = {
  id: string;
  email: string;
  password: string;
  accessToken: string | null;
  refreshToken: string | null;
};

// TODO: replace instances by models
export class UserInstance extends Model<UserAttributes> {
  declare id: string;
  declare email: string;
  declare password: string;
  declare accessToken: string | null;
  declare refreshToken: string | null;
}

UserInstance.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    accessToken: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    refreshToken: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
  },
  {
    sequelize: database,
    tableName: "users",
  }
);

// https://www.youtube.com/watch?v=UcwT1SAvxG0
