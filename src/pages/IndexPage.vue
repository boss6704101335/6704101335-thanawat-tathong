<template>
  <q-page>
    <q-form ref="formRef">
      <q-input v-model="form.name" label="Your name" />
      <q-input v-model="form.age" label="Your age" />
      <q-toggle v-model="form.acceptTerms" label="I accept" />
      <q-btn label="Submit" @click="submitForm" />
      <q-btn label="Reset" @click="resetForm" />
    </q-form>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  name: '',
  age: '',
  acceptTerms: false
})

const formRef = ref()

const submitForm = () => {
  // Logic submit
}

const resetForm = () => {
  form.value.name = ''
  form.value.age = ''
  form.value.acceptTerms = false
  formRef.value.resetValidation?.() // reset error messages
}
</script>
