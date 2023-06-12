export const groupOut=[
    {
        path: 'group-out/student',
        component: () => import('@/views/groupout/GroupOutStudent.vue')
    },
    {
        path: 'group-out/employee',
        component: () => import('@/views/groupout/GroupOutEmployee.vue')
    },
    {
        path: 'group-out/category',
        component: () => import('@/views/groupout/GroupOutCategory.vue')
    },
]