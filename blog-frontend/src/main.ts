import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "vuetify/styles";

import '@/styles/global.css';
import '@mdi/font/css/materialdesignicons.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: "customDarkTheme",
        themes: {
            customDarkTheme: {
                dark: true,
                colors: {
                    background: "#010101",
                    surface: "#1E1E1E",
                    primary: "#FFFFFF",
                    secondary: "#BDBDBD",
                },
            },
        },
    },
});


createApp(App).use(store).use(router).use(vuetify).mount('#app')
