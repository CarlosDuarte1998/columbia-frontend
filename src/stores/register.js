// stores/register.js

import { defineStore } from "pinia";
import axios from "axios";

export const useRegisterStore = defineStore("register", {
  state: () => ({
    register: [],
  }),
  actions: {
    async addRegister(data) {
      try {
        const response = await axios.post("/registers", data);
        if (response.status === 201) {
          this.register.push(response.data); 
          return 201;
        } else {
          throw new Error("Error en la solicitud");
        }
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
  },
});
