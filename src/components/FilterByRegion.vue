<template>
    <div>
        <v-select
            :items="regions"
            @change="filterByRegion"
            v-model="selectValue"
            label="Filter by region"
            outlined
        ></v-select>
    </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
    name: "FilterByRegion",
    data: () => ({
        regions: [
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
        selectValue: ""
    }),
    methods: {
        ...mapMutations(["setCountryFilteredByRegion"]),
        filterByRegion() {
            this.setCountryFilteredByRegion(this.selectValue);
        }
    }
};
</script>

<style lang="scss" scoped>
</style>