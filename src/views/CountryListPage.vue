<template>
    <div class="home">
        <Actions></Actions>
        <CountryList></CountryList>
    </div>
</template>

<script>
// @ is an alias to /src
import CountryList from "@/components/CountryList";
import Actions from "@/components/Actions"

export default {
    name: "Home",
    components: {
        CountryList,
        Actions
    },
};
</script>
