import Vue from 'vue'
import VueRouter from 'vue-router';
import Home from '../views/Home'
import {financeV2Route} from "@/router/financeV2";
import Layout from '@/layout'
import {appSend} from "@/router/app-send";
import {birthday} from "@/router/birthday";
import {brandName} from "@/router/brand-name";
import {chartStatistic} from "@/router/chart-statistic";
import {dashboard} from "@/router/dashboard";
import {employee} from "@/router/employee";
import {error} from "@/router/error";
import {financeCashinternal} from "@/router/finance-cashinternal";
import {financeFee} from "@/router/finance-fee";
import {financeSalary} from "@/router/finance-salary";
import {financeStatistic} from "@/router/finance-statistic";
import {groupOut} from "@/router/group-out";
import {master} from "@/router/master";
import {notify} from "@/router/notify";
import {parent} from "@/router/parent";
import {parentDiary} from "@/router/parent-diary";
import {school} from "@/router/school";
import {student} from "@/router/student";
import {studentQuality} from "@/router/student-quality";
import {teacher} from "@/router/teacher";
Vue.use(VueRouter)
let arrRoute=[];
arrRoute = arrRoute.concat(
    financeV2Route,
    birthday,
    appSend,
    brandName,
    chartStatistic,
    dashboard,
    employee,
     error,
    financeCashinternal,
     financeFee,
     financeSalary,
    financeStatistic,
    groupOut,
    master,
    notify,
    parent,
    parentDiary,
    school,
    student,
    studentQuality,
    teacher)

 export const constantRoutes = [
     {
         path: '/',
         component: Layout,
         children: arrRoute
     },

    {
        path: '*',
        component: () => import('@/views/error-page/NotFound.vue'),
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/login',
        component: () => import('@/views/login/index.vue'),
    },
    {
        path: '/404',
        component: () => import('@/views/error-page/404.vue')
    },
    {
        path: '/401',
        component: () => import('@/views/error-page/401.vue')
    },
    {
        path: '/axios',
        component: () => import('@/views/Axiostest.vue')
    },
    {
        path: '/change-language',
        component: () => import('@/views/ChangeLanguage.vue')
    },
    {
        path: '/test/vietlv1',
        component: () => import('@/views/test/VietLV1.vue')
    },
    {
        path: '/test',
        component: () => import('@/views/test/Test.vue')
    },
    {
        path: '/test/thanhnt',
        component: () => import('@/views/test/ThanhNT.vue')
    },
    {
        path: '/test/thangpn',
        component: () => import('@/views/test/ThangPN.vue')
    },
    {
        path: '/test/123',
        component: () => import('@/views/import-export/ExportCommon.vue')
    },

]
const router= new VueRouter({
        mode: 'history',
        routes:constantRoutes

    });
router.beforeEach((to, from, next) => {

    //url công khai có thể truy cập không cần xác thực
    const publicPages = ['/login'];
    //url yêu cầu xác thực
    const authRequired = !publicPages.includes(to.path);
    //check xem có token hay không, không có trả về null
    const loggedIn = localStorage.getItem('user');

    // truy cập page yêu cầu xác thực và không được công khai thì chuyển về page login
    if (authRequired && !loggedIn) {
        next('/login');
    } else {
        next();
    }
});

export default router
