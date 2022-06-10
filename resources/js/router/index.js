import { createRouter, createWebHistory } from 'vue-router';

const Leads = () => import('../components/Leads.vue');
const Administracion = () => import('../components/Administracion.vue');
const User = () => import('../components/User.vue');

const Crear = () => import('../components/lead/CrearLead.vue');

export const routes = [
    {
        name: 'leads',
        path: '/',
        component: Leads
    },
    {
        name: 'Administracion',
        path: '/admin',
        component: Administracion
    },
    {
        name: 'user',
        path: '/user',
        component: User
    },
    {
        name: 'crearLead',
        path: '/crear',
        component: Crear
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;