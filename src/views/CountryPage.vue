<template>
    <div>
        <!-- <v-row class="NotFound" justify="center" align="center" style="min-height: 90vh"> -->
        <v-row>
            <v-col class="text-left" cols="12">
                <div class="my-2">
                    <v-btn color="primary">
                        <v-icon left dark>arrow_back_ios</v-icon>Back
                    </v-btn>
                </div>
            </v-col>
        </v-row>
        <CountrySelected :country="country"></CountrySelected>
        <!-- <v-container>
                <h1>CountryPage {{ id }}</h1>
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-card height="400" color="transparent" flat>
                            <div class="display-3 mt-5">Page not found.</div>
                            <div class="grey--text lighten-5">
                                The page you are trying to get to never existed in this reality,
                                or has migrated to a parallel universe.
                            </div>
                            <div class="paragraph-text mt-2">
                                <br />
                                <br />Try going back to home page and repeating your action. Or,
                                contact helpdesk for support.
                            </div>
                        </v-card>
                    </v-flex>
                </v-layout>
        </v-container>-->
        <!-- </v-row> -->
    </div>
</template>

<script>
import { mapState } from "vuex";
import CountrySelected from "@/components/CountrySelected";

export default {
    name: "ContryPage",
    components: {
        CountrySelected
    },
    data() {
        return {
            country: {
                topLevelDomain: [],
                currencies: [],
                languages: [],
                borders: []
            }
        };
    },
    computed: { 
        ...mapState(["countryList"]) 
    },
    beforeMount() {
        fetch(`https://restcountries.eu/rest/v2/alpha/${this.$route.params.id.toLowerCase()}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.country = data;
            })
            .catch(error => {
                console.log(error);
            });
    }
};
</script>

<style lang="scss" scoped>
.paragraph-text {
    font-size: 18px;
}
</style>