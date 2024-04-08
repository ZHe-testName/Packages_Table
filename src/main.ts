import './style.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { vueDebounce } from "vue-debounce";

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.directive("debounce", vueDebounce({ lock: true, trim: true }));

app.use(createPinia());
app.use(router);

app.mount('#app');
