import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import UserDetails from './components/UserDetails.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: UserDetails
        }
    ]
});

const app = createApp(App);

app.use(router);

app.mount('#app');
