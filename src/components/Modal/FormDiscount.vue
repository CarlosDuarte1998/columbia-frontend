<script >
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

export default {
  components: {
  },
  setup(){

    return {
      v$: useVuelidate(),
    }
  }
}

</script>
<template>
  <div>
    <form action="" class="form-discount">
      <input type="text" placeholder="Nombre" class="input-name" />
      <input type="email" placeholder="Correo" class="input-email" />
      <select name="" id="" class="input-select">
        <option value="" disabled>País</option>
        <option value="sv">El Salvador</option>
        <option value="hn">Honduras</option>
        <option value="gt">Guatemala</option>
        <option value="cr">Costa Rica</option>
        <option value="pa">Panama</option>
        <option value="ni">Nicaragua</option>
        <option value="bz">Republica Dominicana</option>
        <option value="bz">Venezuela</option>
      </select>
      <input type="submit" value="Obtener descuento" />
    </form>
  </div>
</template>
<style scoped>

.form-discount{
  display: flex;
  flex-direction: column;
  transition: all 0.5s ease;
}
.form-discount input{
  padding: 10px 10px 10px 10px;
  margin-bottom: 10px;
  border: 1px solid #000000;
  font-family: "GerTT-medium";
  font-size: 20px;
  text-transform: uppercase;
}
.form-discount select{
  padding: 10px 10px 10px 10px;
  margin-bottom: 10px;
  border: 1px solid #000000;
  font-family: "GerTT-medium";
  font-size: 20px;
  text-transform: uppercase;
}
.form-discount input[type="submit"]{
  background-color: #000000;
  color: #ffffff;
  cursor: pointer;
}

/* Mobile */
@media (max-width: 767px) {
    .form-discount input[type="submit"]{
  background-color: #000000;
  color: #ffffff;
  cursor: pointer;
}
}

</style>
