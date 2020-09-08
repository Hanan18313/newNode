'use strict';

module.exports = app => {
  const { STRING, DATE, INTEGER } = app.Sequelize;
  const User = app.model.define('all_user', {
    id: { type: INTEGER(11), primaryKey: true, autoIncrement: true },
    user_name: STRING,
    phone: STRING,
    company: STRING,
    unionid: STRING,
    openid: STRING,
    avatar: STRING,
    address: STRING,
    status: {
      type: INTEGER(1),
      defaultValue: 0,
    },
    attend_type: {
      type: STRING,
      defaultValue: 'live',
    },
    is_eat: {
      type: INTEGER(1),
      defaultValue: 0,
    },
    lottery_number: INTEGER(11),
    is_win: INTEGER(1),
    is_check: {
      type: INTEGER(1),
      defaultValue: 0,
    },
    sign_up_time: DATE,
    sign_in_time: DATE,
    active_id: {
      type: INTEGER(11),
      defaultValue: 1,
    },
  });
  return User;
};
