import AboutPage from "@/views/AboutPage.vue";
import CareersPage from "@/views/CareersPage.vue";
import HomePage from "@/views/HomePage.vue";
import LocationPage from "@/views/LocationPage.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomePage
        },
        {
            path: "/about",
            name: "About",
            component: AboutPage
        },
        
        {
            path: "/careers",
            name: "Careers",
            component: CareersPage
        },
        {
            path: "/location",
            name: "Location",
            component: LocationPage
        },
    ]
})


export default router;
