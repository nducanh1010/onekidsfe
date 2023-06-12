export const parent= [
    {
        path: 'parent/notify',
        component: () => import('@/parent/NotifyParent.vue')
    },
    {
        path: 'parent/news',
        component: () => import('@/parent/NewsSchoolParent.vue')
    },
    {
        path: 'parent/album',
        component: () => import('@/parent/album/Album.vue')
    },
    {
        path: 'parent/album-detail/:id',
        props: true,
        component: () => import('@/parent/album/AlbumDetail.vue')
    },
    {
        path: 'parent/video',
        props: true,
        component: () => import('@/parent/video/VideoParent.vue')
    },
    {
        path: 'parent/video/other',
        props: true,
        component: () => import('@/parent/video/VideoParentOther.vue')
    },
]