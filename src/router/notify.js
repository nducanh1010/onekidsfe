export const notify=[
    {
        path: 'notifihis/schedulesms',
        component: () => import('@/views/notifihistory/Schedulesms.vue')
    },
    {
        path: 'notifihis/custom',
        component: () => import('@/views/notifihistory/SmsCustom.vue')
    },
    {
        path: 'notifihis/historysms',
        component: () => import('@/views/notifihistory/SmsSendHistory.vue')
    },
    {
        path: 'notifihis/historyapp',
        component: () => import('@/views/notifihistory/SmsApp.vue')
    },
    {
        path: 'notifihis/notify-school',
        component: () => import('@/views/notifySchool/NotifySchool.vue')
    },

]