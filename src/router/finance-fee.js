export const financeFee=[
    {
        path: 'finace/fees/package',
        component: () => import('@/views/finance/Package.vue')
    },
    {
        path: 'finace/fees/package-kids',
        component: () => import('@/views/finance/PackageDefaultKids.vue')
    },
    {
        path: 'finace/fees/approved',
        component: () => import('@/views/finance/PackageKidsApproved.vue')
    },
    {
        path: 'finace/fees/approved/advance',
        component: () => import('@/views/finance/PackageKidsApprovedAdvance.vue')
    },
    {
        path: 'finace/fees/order',
        component: () => import('@/views/finance/OrderKids.vue')
    },
    {
        path: 'finace/fees/wallet',
        component: () => import('@/views/finance/WalletParent.vue')
    }
]