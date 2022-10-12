import { Model, DataTypes } from "sequelize";
import database from "config/database";

type TodoAttributes = {
  id: string;
  title: string;
  isCompleted: boolean;
  deletedAt: Date | null;
};

export class TodoInstance extends Model<TodoAttributes> {
  declare id: string;
  declare title: string;
  declare isCompleted: boolean;
  declare deletedAt: Date | null;
}

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
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
    },
  },
  {
    sequelize: database,
    tableName: "todos",
  }
);
