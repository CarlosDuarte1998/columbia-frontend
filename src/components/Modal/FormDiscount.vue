<script setup>
import { useCountryStore } from "@/stores/countries";
import { useRegisterStore } from "@/stores/register";
import { ref, reactive, onMounted, defineEmits, defineProps } from "vue";
import Swal from "sweetalert2";

const props = defineProps({
  onClose: Function,
});

let showMessagesError = ref(false);


const countryStore = useCountryStore();
const countries = ref([]);

const registerStore = useRegisterStore();
const register = ref([]);

onMounted(async () => {
  await countryStore.getCountries();
  countries.value = countryStore.countries;
 
  const currentDate = new Date();
  const targetDate = new Date("2023-07-19");

  if (currentDate < targetDate) {
    countries.value.splice(2, 1);
  }

});

// Validacion de formulario
const formData = reactive({
  name: '',
  email: '',
  country_id: '',
  discountcode_id: 1,
});



const submitForm = async () => {

  try {
    const statusCode = await registerStore.addRegister(formData);
    if (statusCode === 201) {
      Swal.fire({
        icon: "success",
        title: "¡Gracias por registrarte!",
        text: "Tu descuento ha sido enviado a tu correo electrónico",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#000",
      });
      formData.name = '';
      formData.email = '';
      formData.country_id = '';
      props.onClose();
    } else {
      showMessagesError.value = true;
     //hacer que se cierre el modal  por medio de la funcion onClose
    }
  } catch (error) {
    console.error(error);
    showMessagesError.value = true;
   
  
  }
};
</script>


<template>
  <div class=" lg:pr-14 lg:pl-14">
    <form action="" class="form-discount" @submit.prevent="submitForm" >
      <input type="text" placeholder="Nombre completo" class="input-name"  v-model="formData.name" required/>
      <input type="email" placeholder="Correo Electrónico" class="input-email"  v-model="formData.email" required/>
      <select name="" id="" class="input-select"  v-model="formData.country_id" required>
        <option value="" disabled selected>País</option>
        
        <option class="item-country" v-for="country in countries" :key="country.id" :value="country.id">
  {{ country.name }}
</option>

      </select>
      <input type="submit" value="Obtener descuento" />
    </form>
    <span class="error" v-if="showMessagesError">
      Lo sentimos, el correo ya se encuentra registrado.
    </span>
  </div>
</template>
<style scoped>
.error {
  color: red;
  font-size: 12px;
  font-family: "GerTT-medium";
  margin-bottom: 10px;
}

.success {
  color: rgb(0, 161, 67);
  font-size: 13px;
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
