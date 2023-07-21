// @/stores/history
import { defineStore } from "pinia";
import axios from "axios";

export const useHistoryStore = defineStore("histories", {
    state: () => ({
        hist: [],
    }),
    actions: {
        getHistory() {
            axios.get("/history")
                .then(response => {
                    this.hist = response.data.data;
                })
                .catch(error => {
                    console.error(error);
                });
        },
    },
});
