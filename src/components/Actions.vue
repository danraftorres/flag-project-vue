<template>
    <div>
        <v-form>
            <v-row>
                <v-col>
                    <v-text-field label="Search for a country"></v-text-field>
                </v-col>
                <v-col>
                    <v-select :items="items" label="Filter by region" outlined></v-select>
                </v-col>
            </v-row>
        </v-form>
    </div>
</template>

<script>
export default {
    name: "Actions",
    data: () => ({
        items: [
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
        ]
    })
};
</script>

<style lang="scss" scoped>
</style>