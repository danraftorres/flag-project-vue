<template>
    <div>
        <v-text-field
            v-model="inputValue"
            @keyup="filterByName"
            label="Search for a country"
            clear-icon="backspace"
            clearable
            @click:clear="clearInput()"
        ></v-text-field>
    </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
    name: "SearchByName",
    data: () => ({
        inputValue: ""
    }),
    methods: {
        ...mapMutations(["setCountryListByName"]),
        filterByName() {
            this.setCountryListByName(this.inputValue);
        },
        clearInput() {
            this.setCountryListByName("");
        }
    }
};
</script>

<style lang="scss" scoped>
</style>