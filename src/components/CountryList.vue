<template>
    <div>
        <v-row>
            <v-col
                xs="12"
                sm="6"
                md="4"
                lg="3"
                xl="2"
                v-for="{name, capital, population, flag, region, alpha2Code} in countries"
                :key="name"
            >
                
                    <Country
                        :name="name"
                        :capital="capital"
                        :population="population"
                        :flag="flag"
                        :region="region"
                        :alpha2Code="alpha2Code"
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
        ...mapState([
            "countryList",
            "countryListByName",
            "countryFilteredByRegion",
            "filterByRegion",
        ]),
        countries() {
            const countryListByName = this.countryListByName;

            if (this.filterByRegion !== "" && countryListByName.length === 0) {
                return this.countryFilteredByRegion;
            }

            if (countryListByName.length > 0) {
                return countryListByName;
            }

            return this.countryList;
        }
    },
    methods: {
        ...mapMutations(["setCountryList"])
    },
    beforeMount() {
        fetch("https://restcountries.eu/rest/v2/all")
            .then(response => response.json())
            .then(list => {
                this.setCountryList(list);
            });
    }
};
</script>

<style lang="scss" scoped>
</style>