<template>
    <v-app>
        <Header></Header>
        <v-container>
            <router-view></router-view>
        </v-container>
       
    </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld';
import Header from "@/components/Header";

export default {
    name: "App",

    components: {
        //HelloWorld,
        Header
    },

    data: () => ({
        //
    })
};
</script>

<style lang="css" scoped>
    #v-application {
        font-family: "Nunito Sans",sans-serif;
    }
</style>
