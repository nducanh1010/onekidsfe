export const student=[
    {
        path: 'student/grade',
        component: () => import('@/views/student/Grade.vue')
    },
    {
        path: 'student/students',
        component: () => import('@/views/student/Student.vue')
    },
    {
        path: 'student/class',
        component: () => import('@/views/student/MaClass.vue')
    },
    {
        path: 'student/students-group',
        component: () => import('@/views/student/StudentGroup.vue')
    },
    {
        path: 'student/students-transfer',
        component: () => import('@/views/student/StudentTransfer.vue')
    },
]