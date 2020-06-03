<template>
    <div>
        <v-row justify="center" align="center" style="min-height: 80vh">
            <v-col md="5">
                <v-img :src="country.flag"></v-img>
            </v-col>
            <v-col md="6" offset-md="1">
                <v-row>
                    <v-col md="12">
                        <h2>{{ country.name }}</h2>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col md="6">
                        <v-list>
                            <v-list-item two-line>
                                <v-list-item-icon>
                                    <v-icon color="primary">public</v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title>Native Name</v-list-item-title>
                                    <v-list-item-subtitle>{{country.nativeName}}</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                            <v-list-item two-line>
                                <v-list-item-icon>
                                    <v-icon color="primary">timeline</v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title>Population</v-list-item-title>
                                    <v-list-item-subtitle>{{ country.population }}</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                            <v-list-item two-line>
                                <v-list-item-icon>
                                    <v-icon color="primary">location_on</v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title>Region</v-list-item-title>
                                    <v-list-item-subtitle>{{ country.region }}</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                            <v-list-item two-line>
                                <v-list-item-icon>
                                    <v-icon color="primary">near_me</v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title>Sub Region</v-list-item-title>
                                    <v-list-item-subtitle>{{ country.subregion }}</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </v-col>
                    <v-col md="6">
                        <v-list>
                        <v-list-item two-line>
                            <v-list-item-icon>
                                <v-icon color="primary">gps_fixed</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title>Capital</v-list-item-title>
                                <v-list-item-subtitle>{{ country.capital }}</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item two-line>
                            <v-list-item-icon>
                                <v-icon color="primary">domain</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title>Top Level Domain</v-list-item-title>
                                <v-list-item-subtitle>{{ topLevelDomains }}</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item two-line>
                            <v-list-item-icon>
                                <v-icon color="primary">monetization_on</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title>Currencies</v-list-item-title>
                                <v-list-item-subtitle>{{ currencies }}</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item two-line>
                            <v-list-item-icon>
                                <v-icon color="primary">translate</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title>Languages</v-list-item-title>
                                <v-list-item-subtitle>{{ languages }}</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                        </v-list>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col md="12">
                        <v-list>
                            <v-list-item two-line>
                                <v-list-item-icon>
                                    <v-icon color="primary">flag</v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title>Border Countries</v-list-item-title>
                                    <v-list-item-subtitle>
                                        <v-chip
                                            class="ma-2"
                                            v-for="(border, i) in country.borders"
                                            :key="i"
                                            color="primary"
                                        >{{ border }}</v-chip>
                                    </v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: "CountrySelected",
    props: ["country"],
    computed: {
        topLevelDomains() {
            return this.country.topLevelDomain.join(", ");
        },
        currencies() {
            return this.country.currencies
                .map(currency => currency.name)
                .join(", ");
        },
        languages() {
            return this.country.languages
                .map(language => language.name)
                .join(", ");
        }
    }
};
</script>

<style lang="scss" scoped>
</style>