export const  school = [
    {
        path: 'school/infor',
        component: () => import('@/views/schoolconfig/SchoolInfor.vue')
    },
    {
        path: 'school/config',
        component: () => import('@/views/schoolconfig/SchoolConfiguration.vue')
    },
    {
        path: 'school/config-class',
        component: () => import('@/views/schoolconfig/AbsentConfigClass.vue')
    },
    {
        path: 'school/config-common',
        component: () => import('@/views/schoolconfig/ConfigCommon.vue')
    },
    {
        path: 'school/config-employee',
        component: () => import('@/views/schoolconfig/SchoolConfigAttendanceEmployee.vue')
    },
    {
        path: 'school/camera',
        component: () => import('@/views/schoolconfig/CameraConfig.vue')
    },
    {
        path: 'school/media',
        component: () => import('@/views/schoolconfig/MediaConfig.vue')
    },
    {
        path: 'school/subject',
        component: () => import('@/views/schoolconfig/SubjectManagement.vue')
    },
    {
        path: 'school/notification-manage',
        component: () => import('@/views/schoolconfig/notification/ViewContentNotification.vue')
    },
    {
        path: 'school/birthday-sample',
        component: () => import('@/views/schoolconfig/BirthdaySampleConfig.vue')
    },
    {
        path: 'school/evaluate-sample',
        component: () => import('@/views/schoolconfig/EvaluateSampleConfig.vue')
    },
    {
        path: 'school/attendance-sample',
        component: () => import('@/views/schoolconfig/AttendanceSampleConfig.vue')
    },
    {
        path: 'school/wish-sample',
        component: () => import('@/views/schoolconfig/WishSampleConfig.vue')
    },
    {
        path: 'school/account-type',
        component: () => import('@/views/schoolconfig/AccountType.vue')
    },
    {
        path: 'school/permission-manage',
        component: () => import('@/views/schoolconfig/UserRoleConfig.vue')
    },
    {
        path: 'school/config-fuction',
        component: () => import('@/views/schoolconfig/ConfigFunction.vue')
    }
]