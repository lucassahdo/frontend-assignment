// Layouts
import AuthLayout from './../components/layout/AuthLayout.vue';
import DashboardLayout from './../components/layout/DashboardLayout.vue';

// GeneralViews
import DashboardNotFound from './../components/dashboard/DashboardNotFound.vue'

// Page Headers
import DashboardHeader from './../components/dashboard/DashboardHeader.vue';

// Login
import Login from './../components/dashboard/Login.vue';

// Dashboard Components
import CompanyData from './../components/dashboard/CompanyData.vue';
import CompanyPage from './../components/dashboard/CompanyPage.vue';
import Extra from './../components/dashboard/Extra.vue';

let authPages = {
    path: '/',
    component: AuthLayout,
    name: 'Authentication',
    children: [
        {
            path: 'login',
            name: 'login',
            component: Login
        }
    ]
};

let dashboardPages = {
    path: '/dashboard',
    component: DashboardLayout,
    redirect: '/dashboard',
    name: 'Company Data',
    children: [
        {
            path: '/',
            name: 'dashboard',
            meta: {title: 'Company Data'},
            components: {
                default: CompanyData,
                header: DashboardHeader
            }
        },
        {
            path: 'company_data',
            name: 'company_data',
            meta: {title: 'Company Data'},
            components: {
                default: CompanyData,
                header: DashboardHeader
            }
        },
        {
            path: 'company_page',
            name: 'company_page',
            meta: {title: 'Company page'},
            components: {
                default: CompanyPage,
                header: DashboardHeader
            }
        },
        {
            path: 'extra',
            name: 'extra',
            meta: {title: 'Extra'},
            components: {
                default: Extra,
                header: DashboardHeader
            }
        }
    ]
};

const routes = [
    {
        path: '/',
        redirect: '/dashboard',
        name: 'Company Data'
    },
    authPages,
    dashboardPages,
    {
        path: '*',
        component: DashboardNotFound
    }
];

export default routes;
