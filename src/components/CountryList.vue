<template>
    <div>
        <v-row>
            <v-col
                xs="12" md="3"
                v-for="{name, capital, population, flag, region} in countryList"
                :key="name"
            >
                <Country
                    :name="name"
                    :capital="capital"
                    :population="population"
                    :flag="flag"
                    :region="region"
                />
            </v-col>
        </v-row>
    </div>
</template>

<script>
import Country from "@/components/Country";
import { mapMutations, mapState } from "vuex";

export default {
    name: "CountryList",
    components: {
        Country
    },
    computed: {
        ...mapState(["countryList"])
    },
    methods: {
        ...mapMutations(["load"])
    },
    mounted() {
        fetch("https://restcountries.eu/rest/v2/all")
            .then(response => response.json())
            .then(list => {
                this.load({ type: "SET_COUNTRY_LIST", payload: list });
            });
    }
};
</script>

<style lang="scss" scoped>
</style>