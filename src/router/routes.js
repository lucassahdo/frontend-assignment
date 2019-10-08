// import WebsiteLayout from 'src/componets/layout/WebsiteLayout.vue';
// import AuthLayout from 'src/pages/Dashboard/Login/AuthLayout.vue';
import DashboardLayout from './../components/layout/DashboardLayout.vue';


// GeneralViews
import DashboardNotFound from './../components/dashboard/DashboardNotFound.vue'

// Page Headers
// import WebsiteHeader from 'src/pages/Dashboard/WebsiteHeader';
import DashboardHeader from './../components/dashboard/DashboardHeader.vue';

// Login
// const Login = () => import('src/pages/Dashboard/Login/Login.vue');

// Dashboard Components
import Dashboard from './../components/dashboard/Dashboard.vue';
import CompanyData from './../components/dashboard/CompanyData.vue';
import CompanyPage from './../components/dashboard/CompanyPage.vue';
import Extra from './../components/dashboard/Extra.vue';

// let authPages = {
//     path: '/',
//     component: AuthLayout,
//     name: 'Authentication',
//     children: [
//         {
//             path: 'login',
//             name: 'login',
//             component: Login
//         }
//     ]
// };

// let websitePages = {
//     path: '/',
//     component: WebsiteLayout,
//     name: 'Website',
//     children: [
//         {
//             path: 'home',
//             name: 'home',
//             meta: {title: 'Home'},
//             components: {
//                 default: Home,
//                 header: DashboardHeader
//             }
//         },
//         {
//             path: 'about',
//             name: 'about',
//             meta: {title: 'About'},
//             components: {
//                 default: About,
//                 header: DefaultHeader
//             }
//         }
//     ]
// };

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

const routes = [{
    path: '/',
    redirect: '/',
    name: 'Home'
},
    // websitePages,
    // authPages,
    dashboardPages,
    {
        path: '*',
        component: DashboardNotFound
    }
];

export default routes;
