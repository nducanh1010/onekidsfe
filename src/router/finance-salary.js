export const financeSalary=[
    {
        path: 'finace/salary/institute',
        component: () => import('@/views/employeeSalary/SalaryInstitute.vue')
    },
    {
        path: 'finace/salary/attendance-config',
        component: () => import('@/views/employeeSalary/ConfigEmployeeAttendance.vue')
    },
    {
        path: 'finace/salary/sample',
        component: () => import('@/views/employeeSalary/SalarySample.vue')
    },
    {
        path: 'finace/salary/approved',
        component: () => import('@/views/employeeSalary/SalaryApproved.vue')
    },
    {
        path: 'finace/salary/paid',
        component: () => import('@/views/employeeSalary/SalaryPaid.vue')
    },
    {
        path: 'finace/salary/attendance',
        component: () => import('@/views/attendanceEmployee/AttendanceEmployee.vue')
    },
    {
        path: 'finace/salary/absent',
        component: () => import('@/views/attendanceEmployee/AbsentTeacher.vue')
    }
]