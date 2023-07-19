import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from '../views/Home.vue'
import User from '../views/User.vue'
import Main from '../views/Main.vue'
import Mall from '../views/Mall.vue'
import Page1 from '../views/Page1.vue'
import Page2 from '../views/Page2.vue'
import Login from '../views/Login.vue'

const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: Main,
            redirect: '/home', // 重定向
            children: [
                { path: 'home', name: 'home', component: Home },
                { path: 'user', name: 'user', component: User },
                { path: 'mall', name: 'mall', component: Mall },
                { path: 'page1', name: 'page1', component: Page1 },
                { path: 'page2', name: 'page2', component: Page2 }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
        }
    ]
})
export default router