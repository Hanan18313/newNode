'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('all_user', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      user_name: STRING,
      phone: STRING,
      company: STRING,
      unionid: STRING,
      openid: STRING,
      avatar: STRING,
      address: STRING,
      first_log_time: DATE,
      latest_log_time: DATE,
      status: INTEGER(1),
      attend_type: STRING,
      is_eat: INTEGER(1),
      lottery_number: INTEGER(11),
      is_check: INTEGER(1),
      sign_up_time: DATE,
      sign_in_time: DATE,
      active_id: INTEGER(11),
    });
  },

  down: async queryInterface => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('all_user');
  },
};