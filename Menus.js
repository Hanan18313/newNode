'use strict';

const Munes = [{
  id: 1,
  name: 'home',
  title: '首页',
},
{
  id: 2,
  name: 'navi1',
  title: '导航一',
  subMenus: [{
    id: 3,
    name: 'navi11',
    title: '导航一一',
    subMenus: [{
      id: 4,
      name: 'navi22',
      title: '导航二二',
    }],
  },
  {
    id: 5,
    name: 'navi12',
    title: '导航一二',
  }],
}];

module.exports = Munes;
