<template>
    <div>
        <v-card>
            <v-img :src="flag" height="150"></v-img>

            <v-card-title class="pb-0">{{ name }}</v-card-title>

            <v-list>
                <v-list-item two-line>
                    <v-list-item-icon>
                        <v-icon color="indigo">timeline</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Population</v-list-item-title>
                        <v-list-item-subtitle>{{ population }}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item two-line>
                    <v-list-item-icon>
                        <v-icon color="indigo">location_on</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Region</v-list-item-title>
                        <v-list-item-subtitle>{{ region }}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item two-line>
                    <v-list-item-icon>
                        <v-icon color="indigo">gps_fixed</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Capital</v-list-item-title>
                        <v-list-item-subtitle>{{ capital }}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-card>
    </div>
</template>

<script>
export default {
    name: "Country",
    props: ["name", "capital", "population", "flag", "region"]
};
</script>

<style lang="scss" scoped>
.v-card {
    cursor: pointer;
    &:hover {
        border: 1px solid black;
    }
}
</style>