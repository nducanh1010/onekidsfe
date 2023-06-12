export const chartStatistic=[
    {
        path: 'chart/statistical/chart-status',
        component: () => import('@/views/chartStatistical/StudentChartStatus.vue')
    },
    {
        path: 'chart/statistical/attendance',
        component: () => import('@/views/chartStatistical/StudentChartAttendance.vue')
    },
    {
        path: 'chart/statistical/evaluate',
        component: () => import('@/views/chartStatistical/StudentChartEvaluate.vue')
    },
    {
        path: 'chart/statistical/album',
        component: () => import('@/views/chartStatistical/StudentChartAlbum.vue')
    },
    {
        path: 'chart/statistical/fees',
        component: () => import('@/views/chartStatistical/StudentChartFees.vue')
    },
    {
        path: 'chart/statistical/chart-status-employee',
        component: () => import('@/views/chartStatistical/EmployeeChartStatus.vue')
    },
    {
        path: 'chart/statistical/attendance-employee',
        component: () => import('@/views/chartStatistical/EmployeeChartAttendance.vue')
    },
    {
        path: 'chart/statistical/finace',
        component: () => import('@/views/chartStatistical/EmployeeChartFinace.vue')
    },
    {
        path: 'chart/statistical/cashinternal-paymoney',
        component: () => import('@/views/chartStatistical/CashinternalPayMoney.vue')
    },
    {
        path: 'chart/statistical/cashinternal-cashbook',
        component: () => import('@/views/chartStatistical/CashinternalCashbook.vue')
    },
    {
        path: 'chart/statistical/wallet-parent',
        component: () => import('@/views/chartStatistical/WalletParentChart.vue')
    },
]