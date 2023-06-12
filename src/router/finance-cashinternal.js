export const financeCashinternal=[
    {
        path: 'finace/cashinternal/paymoney',
        component: () => import('@/views/cashinternal/CashInternalOut.vue')
    },
    {
        path: 'finace/cashinternal/collectmoney',
        component: () => import('@/views/cashinternal/CashInternalIn.vue')
    },
    {
        path: 'finace/cashinternal/peopletype',
        component: () => import('@/views/cashinternal/PeopleType.vue')
    },
    {
        path: 'finace/cashinternal/bankinfo',
        component: () => import('@/views/cashinternal/FnBank.vue')
    },
    {
        path: 'finace/cashinternal/cashbook',
        component: () => import('@/views/cashinternal/CashBook.vue')
    },
]