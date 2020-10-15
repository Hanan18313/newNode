'use strict';

module.exports = app => {
  const { STRING, DATE, INTEGER } = app.Sequelize;
  const ActiveInfo = app.model.define('active_info', {
    id: { type: INTEGER(11), primaryKey: true, autoIncrement: true },
    start_date: DATE,
    end_date: DATE,
    active_status: {
      type: INTEGER(1),
      defaultValue: '未开始',
    },
    position: STRING,
  });
  return ActiveInfo;
};
