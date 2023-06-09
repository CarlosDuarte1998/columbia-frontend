<script>
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

export default {
  setup() {
    return {};
  },
  data() {
    return {
      v$: useVuelidate(),
      email: "",
      name: "",
      country: "",
    };
  },
  validations() {
    return {
      email: { required, email },
      name: { required },
      country: { required },
    };
  },
  methods: {
    submitForm() {
      this.v$.$validate();
      if (this.v$.$error) {
        console.log("error");
      } else {
        console.log("success");
      }
    },
  },
};
</script>
<template>
  <div>
    <form @submit.prevent="" action="" class="form-discount">
      <input
        type="text"
        placeholder="Nombre"
        v-model="name"
        class="input-name"
      />
      <input
        type="email"
        placeholder="Correo"
        v-model="email"
        class="input-email"
      />
      <select name="" id="" class="input-select" v-model="country">
        <option value="" disabled selected>País</option>
        <option value="CR">Costa Rica</option>
        <option value="SV">El Salvador</option>
        <option value="GT">Guatemala</option>
        <option value="HN">Honduras</option>
        <option value="PA">Panamá</option>
        <option value="NI">Nicaragua</option>
        <option value="DO">República Dominicana</option>
        <option value="VE">Venezuela</option>
      </select>
      <div v-if="v$.$error" class="error">
        <p>Los campos no deben quedar vacíos</p>
      </div>
      <div style="display:none">Datos enviados correctamente</div>
      <input type="submit" value="Obtener descuento" @click="submitForm" />
    </form>
  </div>
</template>
<style scoped>
.error {
  color: red;
  font-size: 12px;
  font-family: "GerTT-medium";
  margin-bottom: 10px;
}
.form-discount {
  display: flex;
  flex-direction: column;
  transition: all 0.5s ease;
}
.form-discount input {
  padding: 10px 10px 10px 10px;
  margin-bottom: 10px;
  border: 1px solid #000000;
  font-family: "GerTT-medium";
  font-size: 20px;
  text-transform: uppercase;
}
.form-discount select {
  padding: 10px 10px 10px 10px;
  margin-bottom: 10px;
  border: 1px solid #000000;
  font-family: "GerTT-medium";
  font-size: 20px;
  text-transform: uppercase;
}
.form-discount input[type="submit"] {
  background-color: #000000;
  color: #ffffff;
  cursor: pointer;
}

/* Mobile */
@media (max-width: 767px) {
  .form-discount input[type="submit"] {
    background-color: #000000;
    color: #ffffff;
    cursor: pointer;
  }
}
</style>
