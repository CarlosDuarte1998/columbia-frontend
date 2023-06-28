<script setup>
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";


</script>

<template>
  <div class=" lg:pr-14 lg:pl-14">
    <form  action="" class="form-discount">
      <input
        type="text"
        placeholder="Nombre completo"
        
        class="input-name"
      />
      <input
        type="email"
        placeholder="Correo Electrónico"
        
        class="input-email"
      />
      <select name="" id="" class="input-select" >
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
      
      <input type="submit" value="Obtener descuento" />
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
  .form-discount input {
  padding: 5px 5px 5px 5px;
  margin-bottom: 5px;
  font-family: "GerTT-medium";
  font-size: 20px;
  font-size: 17px;
}

}
</style>
