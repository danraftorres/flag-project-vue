<template>
    <div>
        <v-form>
            <v-row>
                <v-col>
                    <v-text-field
                        v-model="inputValue"
                        @keyup="filterByName"
                        label="Search for a country"
                        clear-icon="backspace"
                        clearable
                        @click:clear="clearInput()"
                    ></v-text-field>
                </v-col>
                <v-col>
                    <v-select
                        :items="items"
                        @change="filterByRegion"
                        v-model="selectValue"
                        label="Filter by region"
                        outlined
                    ></v-select>
                </v-col>
            </v-row>
        </v-form>
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
    name: "Actions",
    data: () => ({
        items: [
            {
                text: "Filter by region",
                value: ""
            },
            {
                text: "Africa",
                value: "Africa"
            },
            {
                text: "Americas",
                value: "Americas"
            },
            {
                text: "Asia",
                value: "Asia"
            },
            {
                text: "Europe",
                value: "Europe"
            },
            {
                text: "Oceania",
                value: "Oceania"
            }
        ],
        inputValue: "",
        selectValue: ""
    }),
    methods: {
        ...mapMutations(["setCountryListByName", "setCountryFilteredByRegion"]),
        filterByName() {
            this.setCountryListByName(this.inputValue);
        },
        filterByRegion() {
            this.setCountryFilteredByRegion(this.selectValue);
        },
        clearInput() {
            this.setCountryListByName("");
        }
    }
};
</script>

<style lang="scss" scoped>
</style>