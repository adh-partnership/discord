import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import Home from "./Home.vue";
import Privacy from './Privacy.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/privacy', component: Privacy },
  ],
});

createApp(App).use(router).mount('#app')
