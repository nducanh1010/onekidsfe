export const brandName=[
    {
        path: 'brandname/brand',
        component: () => import('@/views/brandname/Brand.vue')
    },
    {
        path: 'brandname/agent',
        component: () => import('@/views/brandname/AgentBrand.vue')
    },
    {
        path: 'brandname/school-brand',
        component: () => import('@/views/brandname/SchoolBrand.vue')
    },
]