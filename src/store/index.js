import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        countryList: [],
        countryListByName: [],
        countryFilteredByRegion: [],
        filterByRegion: "",
    },
    mutations: {
        load(state, action) {
            switch (action.type) {
                case "SET_COUNTRY_LIST": {
                    state.countryList = action.payload;
                }

            }
        },
    },
    actions: {},
    modules: {},
});
