import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        countryList: [],
        countryListByName: [],
        countryFilteredByRegion: [],
        searchByName: "",
        filterByRegion: "",
    },
    mutations: {
        setCountryList(state, list) {
            state.countryList = list;
        },
        setCountryListByName(state, name) {
            state.searchByName = name;

            if (name === "") {
                state.countryListByName = [];
            } else {
                let list;

                list =
                    state.filterByRegion === ""
                        ? state.countryList
                        : state.countryFilteredByRegion;

                const countryListByName = list.filter((country) => country.name.toLowerCase().includes(name.toLowerCase()));
                state.countryListByName = countryListByName;
            }
        },
        setCountryFilteredByRegion(state, region) {
            state.filterByRegion = region;

            if (region === "") {
                state.countryFilteredByRegion = [];
            } else {
                const countryFilteredByRegion = state.countryList.filter((country) => country.region === region);
                state.countryFilteredByRegion = countryFilteredByRegion;
            }
        },
    },
    actions: {},
    modules: {},
});
