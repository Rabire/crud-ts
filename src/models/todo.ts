import { Model, DataTypes } from "sequelize";
import database from "config/database";

type TodoAttributes = {
  id: string;
  title: string;
  isCompleted: boolean;
};

export class TodoInstance extends Model<TodoAttributes> {}

TodoInstance.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isCompleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    sequelize: database,
    tableName: "todos",
  }
);
