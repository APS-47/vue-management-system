import Mock from 'mockjs'
export default {
  getMenu: config => {
    const { username, password } = JSON.parse(config.body)
    // 根据用户账号和密码展示不同的菜单栏
    if (username === 'admin' && password === '1') {
      return {
        code: 20000,
        data: {
          menu: [
            {
              path: '/home',
              name: 'home',
              label: '首页',
              icon: 's-home',
              url: 'Home/Home'
            },
            {
              path: '/user',
              name: 'user',
              label: '用户管理',
              icon: 'user',
              url: 'User/User'
            },
            {
              label: '商品详情',
              icon: 'goods',
              children: [
                {
                  path: '/iphone',
                  name: 'iphone',
                  label: '苹果手机',
                  url: 'mall/iphone'
                },
                {
                  path: '/vivo',
                  name: 'vivo',
                  label: 'vivo手机',
                  url: 'mall/vivo'
                },
                {
                  path: '/oppo',
                  name: 'oppo',
                  label: 'oppo手机',
                  url: 'mall/oppo'
                },
                {
                  path: '/meizu',
                  name: 'meizu',
                  label: '魅族手机',
                  url: 'mall/meizu'
                },
                {
                  path: '/samsung',
                  name: 'samsung',
                  label: '三星手机',
                  url: 'mall/samsung'
                },
                {
                  path: '/xiaomi',
                  name: 'xiaomi',
                  label: '小米手机',
                  url: 'mall/xiaomi'
                }
              ]
            },
          ],
          token: Mock.Random.guid(),
          message: '获取成功'
        }
      }
    } 
    else if (username === 'user' && password === '1') {
      return {
        code: 20000,
        data: {
          menu: [
            {
              path: '/',
              name: 'home',
              label: '首页',
              icon: 's-home',
              url: 'Home/Home'
            },
            {
              label: '商品详情',
              icon: 'goods',
              children: [
                {
                  path: '/iphone',
                  name: 'iphone',
                  label: '苹果手机',
                  url: 'mall/iphone'
                },
                {
                  path: '/meizu',
                  name: 'meizu',
                  label: '魅族手机',
                  url: 'mall/meizu'
                },
                {
                  path: '/oppo',
                  name: 'oppo',
                  label: 'oppo手机',
                  url: 'mall/oppo'
                },
                {
                  path: '/samsung',
                  name: 'samsung',
                  label: '三星手机',
                  url: 'mall/samsung'
                },
                {
                  path: '/vivo',
                  name: 'vivo',
                  label: 'vivo手机',
                  url: 'mall/vivo'
                },
                {
                  path: '/xiaomi',
                  name: 'xiaomi',
                  label: '小米手机',
                  url: 'mall/xiaomi'
                }
              ]
            },

          ],
          username:'李四',
          token: Mock.Random.guid(),
          message: '获取成功'
        }
      }
    } else {
      return {
        code: -999,
        data: {
          message: '密码错误'
        }
      }
    }

  }
}
