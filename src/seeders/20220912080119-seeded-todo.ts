import { QueryInterface } from "sequelize";
import { v4 as uuidv4 } from "uuid";

module.exports = {
  up: async (queryInterface: QueryInterface): Promise<void> =>
    await queryInterface.sequelize.transaction(async () => {
      /**
       * Add seed commands here.
       *
       * Example:
       * await queryInterface.bulkInsert('People', [{
       *   name: 'John Doe',
       *   isBetaMember: false
       * }], {});
       */
      await queryInterface.bulkInsert(
        "todos",
        [
          {
            id: uuidv4(),
            title: "Seeded todo",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
        {}
      );
    }),
};
