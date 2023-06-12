export const birthday=[
    {
        path: 'birthday/kids',
        component: () => import('@/views/birthdaymanagement/KidsBirthday.vue')
    },
    {
        path: 'birthday/parent',
        component: () => import('@/views/birthdaymanagement/ParentBirthday.vue')
    },
    {
        path: 'birthday/employee',
        component: () => import('@/views/birthdaymanagement/TeacherBirthday.vue')
    },
]