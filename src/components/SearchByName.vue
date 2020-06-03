<template>
    <div>
        <v-text-field
            v-model="inputValue"
            @keyup="filterByName"
            label="Search for a country"
            clear-icon="backspace"
            clearable
            value="jola"
            @click:clear="clearInput()"
        ></v-text-field>
    </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
    name: "SearchByName",
    data: () => ({
        inputValue: ""
    }),
    computed: { ...mapState(["searchByName"]) },
    methods: {
        ...mapMutations(["setCountryListByName"]),
        filterByName() {
            //this.inputValue = this.searchByName
            this.setCountryListByName(this.inputValue);
        },
        clearInput() {
            this.setCountryListByName("");
        }
    }, 
    beforeMount() {
        this.inputValue = this.searchByName ? this.searchByName : this.inputValue;
        console.log(`SearchByName beforeMount ${this.searchByName}`)
    }
    
};
</script>

<style lang="scss" scoped>
</style>