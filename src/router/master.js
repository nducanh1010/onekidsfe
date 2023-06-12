import Master from "@/layout/components/Master.vue";

export const master=[
    {
        path: 'master/admin',
        component: Master,
        children: [
            {
                path: 'list',
                component: () => import('@/views/master/admin/Admin.vue')
            },
            {
                path: 'school',
                component: () => import('@/views/master/admin/AdminAccount.vue')
            },
        ]
    },
    {
        path: 'master/agent',
        component: Master,
        children: [
            {
                path: 'list',
                component: () => import('@/views/master/agent/Agent.vue')
            },
            {
                path: 'account',
                component: () => import('@/views/master/agent/AccountAgent.vue')
            },
            {
                path: 'add',
                component: () => import('@/views/master/agent/CreateAgent.vue')
            }
        ]
    },
    {
        path: 'master/school-agent',
        component: Master,
        children: [
            {
                path: 'list',
                component: () => import('@/views/master/school/School.vue')
            },
            {
                path: 'account-school',
                component: () => import('@/views/master/school/AccountSchool.vue')
            },
            {
                path: 'student-in-school',
                component: () => import('@/views/master/school/StudentInSchool.vue')
            },
            {
                path: 'employee-in-school',
                component: () => import('@/views/master/school/EmployeeInSchool.vue')
            },
        ]
    },
    {
        path: 'master/notify',
        component: Master,
        children: [
            {
                path: 'news-onekids',
                component: () => import('@/views/master/notify/News.vue')
            },
            {
                path: 'notify-onekids',
                component: () => import('@/views/master/notify/AppSendNotify.vue')
            },
            {
                path: 'history-sms',
                component: () => import('@/views/master/notify/HistorySms.vue')
            },
            {
                path: 'feedback-onekids',
                component: () => import('@/views/master/notify/FeedBackOnekids.vue')
            }
        ]
    },
    // {
    //   path: 'notification',
    //   component: Master,
    //   children: [
    //     {
    //       path: 'notify',
    //       component: () => import('@/views/master/notification/ViewContentNotification.vue')
    //     },
    //     {
    //       path: 'internal-notification',
    //       component: () => import('@/views/master/notification/AppSendNotification.vue')
    //     }
    //   ]
    // },
    {
        path: 'master/user',
        component: Master,
        children: [
            {
                path: 'account',
                component: () => import('@/views/master/account/AccountManage.vue')
            },
        ]
    },
    {
        path: 'master/system-config',
        component: Master,
        children: [
            {
                path: 'attendance-sample',
                component: () => import('@/views/master/systemconfig/AttendanceSampleConfig.vue')
            },
            {
                path: 'evaluate-sample',
                component: () => import('@/views/master/systemconfig/EvaluateSampleConfig.vue')
            },
            {
                path: 'web-system-title',
                component: () => import('@/views/master/systemconfig/WebSystemTitleConfig.vue')
            },
            {
                path: 'system-setting',
                component: () => import('@/views/master/systemconfig/SystemSettingConfig.vue')
            },
            {
                path: 'school',
                component: () => import('@/views/master/systemconfig/SchoolSystemConfig.vue')
            },
            {
                path: 'api',
                component: () => import('@/views/master/systemconfig/ApiData.vue')
            },
            {
                path: 'support',
                component: () => import('@/views/master/systemconfig/Support.vue')
            },
            {
                path: 'orther',
                component: () => import('@/views/master/systemconfig/BirthdaySampleConfig.vue')
            }
        ]
    },
    {
        path: 'master/other',
        component: Master,
        children: [
            {
                path: 'create-data-system',
                component: () => import('@/views/master/other/CreateDataSystem.vue')
            },
        ]
    },
]