import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "CountryListPage",
        component: () =>
            import(
                /* webpackChunkName: "home" */ "../views/CountryListPage.vue"
            ),
    },
    {
        path: "/country/:id",
        name: "CountryPage",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(
                /* webpackChunkName: "country" */ "../views/CountryPage.vue"
            ),
    },
    {
        path: "*",
        name: "NotFound",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(
                /* webpackChunkName: "country" */ "../views/NotFound.vue"
            ),
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
