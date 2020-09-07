'use strict';

module.exports = app => {
  const { STRING, DATE, INTEGER } = app.Sequelize;
  const User = app.model.define('all_user', {
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
  return User;
};
