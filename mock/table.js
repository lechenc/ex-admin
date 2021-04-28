/*
 * @Author: your name
 * @Date: 2020-04-27 12:12:30
 * @LastEditTime: 2020-05-13 12:24:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mt4-statisticsd:\阿尔法项目\bitspot-bg\mock\table.js
 */
import Mock from 'mockjs'

const data = Mock.mock({
  'items|30': [{
    id: '@id',
    title: '@sentence(10, 20)',
    'status|1': ['published', 'draft', 'deleted'],
    author: 'name',
    display_time: '@datetime',
    pageviews: '@integer(300, 5000)'
  }]
})

export default [
  {
    url: '/vue-admin-template/table/list',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  },
  {
    url: '/vue-admin-template/app/version',
    type: 'get',
    response: config => {
      return {
        code: 200,
        result: {
          list: [{
            id: '10001',
            version: 'v1',
            app: 'ios',
            down_link: 'baidu.com',
            ver_con: '1.更新内容',
            is_update: false,
            create_time: '2010-01-15',
            is_top: false,
          }, {
            id: '10002',
            version: 'v1',
            app: 'and',
            down_link: 'tencen.com',
            ver_con: '1.更新内容1',
            is_update: true,
            create_time: '2010-01-16',
            is_top: true,
          }],
          current: 1,
          total: 2
        },
        msg: '成功'
      }
    }
  },
  {
    url: '/vue-admin-template/app/collection',
    type: 'get',
    response: config => {
      return {
        code: 200,
        result: {
          list: [{
            id: '10001',
            coin: 'ETH',
            addr: 'OJX123233'
          }, {
            id: '10002',
            coin: 'SALPT',
            addr: 'OJX123233'
          }, {
            id: '10003',
            coin: 'USDT',
            addr: 'OJX123233'
          }],
          current: 1,
          total: 2
        },
        msg: '成功'
      }
    }
  },
  {
    url: '/vue-admin-template/app/userlist',
    type: 'get',
    response: config => {
      return {
        code: 200,
        result: {
          list: [
            {
              uuid: '10001',
              userType3: 1,
              phone: '18649803360',
              email: '419436210@qq.com',
              user_name: 'cws',
              card_type: '身份证',
              acrd_num: '1223223232323235488',
              inviteCode: '1223',
              realNameAudit: 0,
              sysStatus: 0,
              status1: 0,
              status2: 0,
              status3: 0,
              registerTime: '2010-10-01',

            }
          ],
          current: 1,
          total: 2
        },
        msg: '成功'
      }
    }
  }
]
