export const employee= [

    {
        path: 'employee/department',
        component: () => import('@/views/employee/Department.vue')
    },
    {
        path: 'employee/employees',
        component: () => import('@/views/employee/Employee.vue')
    },
    {
        path: 'employee/subjects',
        component: () => import('@/views/employee/Subject.vue')
    },
    {
        path: 'employee/employees-plus',
        component: () => import('@/views/employee/EmployeeAppPlus.vue')
    },
]