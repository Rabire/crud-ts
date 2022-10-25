import { Model, DataTypes } from "sequelize";
import database from "config/database";
import { UserInstance } from "./user";

export enum PetSpecies {
  Dog = "dog",
  Cat = "cat",
  Turtle = "turtle",
  Rabbit = "rabbit",
  Bird = "bird",
}

const speciesValues = Object.keys(PetSpecies).map((v) => v.toLowerCase());

export type PetAttributes = {
  id: string;
  species: PetSpecies;
  ownerId: string | null;
  name: string | null;
  birthDate: Date | null;
  chipNumber: number | null;
  deletedAt: Date | null;
};

export class PetInstance extends Model<PetAttributes> {
  declare id: string;
  declare species: PetSpecies;
  declare ownerId: string | null;
  declare name: string | null;
  declare birthDate: Date | null;
  declare chipNumber: number | null;
  declare deletedAt: Date | null;
}

export const columns = {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  species: {
    type: DataTypes.ENUM(...speciesValues),
    allowNull: false,
  },
  ownerId: {
    type: DataTypes.UUID,
    references: {
      model: UserInstance,
      key: "id",
    },
  },
  name: DataTypes.STRING,
  birthDate: DataTypes.DATE,
  chipNumber: DataTypes.BIGINT,
  deletedAt: DataTypes.DATE,
  createdAt: { type: DataTypes.DATE, defaultValue: new Date() },
  updatedAt: { type: DataTypes.DATE, defaultValue: new Date() },
};

PetInstance.init(columns, {
  sequelize: database,
  tableName: "pets",
});
