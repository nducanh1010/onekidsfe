export const financeStatistic=[
    {
        path: 'finace/statistical/kids/group',
        component: () => import('@/views/financeStatistical/PackageGroup.vue')
    },
    {
        path: 'finace/statistical/employee/group',
        component: () => import('@/views/financeStatistical/SalaryGroup.vue')
    },
    {
        path: 'finace/statistical/finance',
        component: () => import('@/views/financeStatistical/StatisitcalFeesSalary.vue'),

    },

    {
        path: 'finace/statistical/money',
        component: () => import('@/views/financeStatistical/StatisticalMoney.vue')
    },
]