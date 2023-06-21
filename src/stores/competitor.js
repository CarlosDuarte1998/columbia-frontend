import { defineStore } from 'pinia'
import axios from 'axios';

export const useCompetitorStore = defineStore('competitor', {
    state: () => ({
        competitors: [],
        competitor: {},
        loading: false,
        error: null,
    }),
    actions: {
        async getCompetitors() {
            this.loading = true;
            try {
                const response = await axios.get('http://localhost:5000/api/competitors');
                this.competitors = response.data;
            } catch (error) {
                this.error = error;
            } finally {
                this.loading = false;
            }
        }
    }
})
