<template>
    <div>
        <v-form>
            <v-row>
                <v-col xs="12" sm="12" md="6" lg="6" xl="6">
                    <SearchByName></SearchByName>
                </v-col>
                <v-col xs="12" sm="12" md="6" lg="6" xl="6">
                    <FilterByRegion></FilterByRegion>
                </v-col>
            </v-row>
        </v-form>
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import SearchByName from "@/components/SearchByName";
import FilterByRegion from "@/components/FilterByRegion";

export default {
    name: "Actions",
    components: {
        SearchByName,
        FilterByRegion
    }
};
</script>

<style lang="scss" scoped>
</style>