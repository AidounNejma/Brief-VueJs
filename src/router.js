
import {createRouter, createWebHistory} from 'vue-router';
import Home from '@/views/Home';
import Login from '@/views/Login';
import Sign from '@/views/Sign';
import Forgot from '@/views/Forgot';

const router = createRouter({
    history: createWebHistory(),
    routes : [
        {
            name: 'Home',
            path: '/',
            component : Home
        },
        {
            name: 'Login',
            path: '/connexion',
            component : Login
        },
        {
            name: 'Sign',
            path: '/inscription',
            component : Sign
        },
        {
            name: 'Forgot',
            path: '/mot-de-passe-oublie',
            component : Forgot
        },
    ]
    
})

export default router;

