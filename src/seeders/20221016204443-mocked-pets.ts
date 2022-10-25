import { QueryInterface } from "sequelize";
import { v4 as uuidv4 } from "uuid";
import { PetAttributes, PetSpecies } from "models/animal";

const mockedPets: PetAttributes[] = [
  {
    id: uuidv4(),
    species: PetSpecies.Cat,
    ownerId: null,
    name: "Garfield",
    birthDate: null,
    chipNumber: null,
    deletedAt: null,
  },
  {
    id: uuidv4(),
    species: PetSpecies.Dog,
    ownerId: null,
    name: "Pepper",
    birthDate: new Date("2014-12-17T03:00:00"),
    chipNumber: 250541256987454,
    deletedAt: null,
  },
  {
    id: uuidv4(),
    species: PetSpecies.Turtle,
    ownerId: null,
    name: null,
    birthDate: new Date("1995-12-17T03:00:00"),
    chipNumber: null,
    deletedAt: null,
  },
  {
    id: uuidv4(),
    species: PetSpecies.Bird,
    ownerId: null,
    name: "Bavardo",
    birthDate: null,
    chipNumber: 250541254789654,
    deletedAt: null,
  },
];

module.exports = {
  up: async (queryInterface: QueryInterface): Promise<void> =>
    await queryInterface.sequelize.transaction(async () => {
      await queryInterface.bulkInsert("pets", mockedPets, {});
    }),

  down: async (queryInterface: QueryInterface): Promise<void> =>
    await queryInterface.sequelize.transaction(async () => {
      await queryInterface.bulkDelete("pets", mockedPets, {});
    }),
};
