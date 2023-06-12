export const studentQuality=  [
    {
        path: 'student-quality/attendance',
        component: () => import('@/views/studentquality/Attendance.vue')
    },
    {
        path: 'student-quality/evaluate',
        component: () => import('@/views/studentquality/Evaluate.vue')
    },
    {
        path: 'student-quality/height-weight',
        component: () => import('@/views/studentquality/KidsHeightWeight.vue')
    },
    {
        path: 'student-quality/schedule',
        component: () => import('@/views/studentquality/Schedule.vue')
    },
    {
        path: 'student-quality/class-menu',
        component: () => import('@/views/studentquality/ClassMenu.vue')
    },
    {
        path: 'student-quality/album',
        component: () => import('@/views/album/Album.vue')
    },
    {
        path: 'student-quality/album-detail/:id',
        props: true,
        component: () => import('@/views/album/AlbumDetail.vue')
    },
    {
        path: 'student-quality/album/add',
        props: true,
        component: () => import('@/views/album/AddAlbum.vue')
    }
]