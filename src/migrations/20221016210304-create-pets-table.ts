import { columns } from "models/animal";
import { QueryInterface } from "sequelize";

module.exports = {
  up: async (queryInterface: QueryInterface): Promise<void> =>
    await queryInterface.sequelize.transaction(async () => {
      await queryInterface.createTable("pets", columns);
    }),

  down: async (queryInterface: QueryInterface): Promise<void> =>
    await queryInterface.sequelize.transaction(async () => {
      await queryInterface.dropTable("pets");
    }),
};
