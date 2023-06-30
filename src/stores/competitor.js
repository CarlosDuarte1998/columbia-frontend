// stores/competitor.js
import { defineStore } from "pinia";
import axios from "axios";


export const useCompetitorStore = defineStore("competitors", {
    state: () => ({
        competitors: [],
    }),
    actions: {
        async getCompetitors() {
            try {
                const response = await axios.get("/competitors");
                this.competitors = response.data.data;
            } catch (error) {
                console.error(error);
            }
        },
        async showCompetitor(id) {
            console.log(id);
           if (id) {
                try {
                    const response = await axios.get(`/competitors/${id}`);
                    this.competitors = response.data.data;
                    console.log(response.data.data);
                } catch (error) {
                    console.error(error);
                }
            }
        },
    },
});
