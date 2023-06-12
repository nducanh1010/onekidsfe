export const parentDiary=[
    {
        path: 'parentdiary/message-parent',
        component: () => import('@/views/parentdiary/MessageParent.vue')
    },
    {
        path: 'parentdiary/medicine',
        component: () => import('@/views/parentdiary/MedicationAdviceParent.vue')
    },
    {
        path: 'parentdiary/take-leave',
        component: () => import('@/views/parentdiary/TakeLeaveParent.vue')
    },


]