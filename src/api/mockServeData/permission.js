import Mock from 'mockjs'
export default {
    getMenu: config => {
        const { username, password } = JSON.parse(config.body)

        if (username === 'admin' && password === 'admin') {
            return {
                code: 20000,
                data: {
                    menu: [
                        {
                            path: '/',
                            name: 'home',
                            label: '首页',
                            icon: 's-home',
                            url: 'home/index'
                        },
                        {
                            path: '/mall',
                            name: 'mall',
                            label: '商品管理',
                            icon: 'video-play',
                            url: 'mall/index'
                        },
                        {
                            path: '/user',
                            name: 'user',
                            label: '用户管理',
                            icon: 'user',
                            url: 'User/index'
                        },
                        {
                            label: '其他',
                            icon: 'location',
                            children: [
                                {
                                    path: "/page1",
                                    name: "page1",
                                    label: "页面1",
                                    icon: "setting",
                                    url: "Other/PageOne",
                                },
                                {
                                    path: "/page2",
                                    name: "page2",
                                    label: "页面2",
                                    icon: "setting",
                                    url: "Other/PageTwo",
                                },
                            ]
                        },
                    ],
                    token: Mock.Random.guid(),
                    message: '获取成功'
                }
            }
        } else if (username === '123456' && password === '123456') {
            return {
                code: 20000,
                data: {
                    menu: [
                        {
                            path: '/',
                            name: 'home',
                            label: '首页',
                            icon: 's-home',
                            url: 'home/index'
                        },
                        {
                            path: '/mall',
                            name: 'mall',
                            label: '商品管理',
                            icon: 'video-play',
                            url: 'mall/index'
                        }
                    ],
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