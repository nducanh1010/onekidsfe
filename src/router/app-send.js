export const appSend=[
    {
        path: 'appsend/notification',
        component: () => import('@/views/news/AppSend.vue')
    },
    {
        path: 'appsend/parent-feedback',
        component: () => import('@/views/news/ParentsFeedback.vue')
    },
    {
        path: 'appsend/teacher-feedback',
        component: () => import('@/views/news/TeacherFeedback.vue')
    },
]