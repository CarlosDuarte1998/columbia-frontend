// estores/countries.js
import { defineStore } from "pinia";
import axios from "axios";


export const useCountryStore = defineStore("countries", {
    state: () => ({
        countries: [],
    }),
    actions: {
        async getCountries() {
            try {
                const response = await axios.get("/countries");
                this.countries = response.data.data;
            } catch (error) {
                console.error(error);
            }
        }
    },
});