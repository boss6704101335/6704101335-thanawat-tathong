<template>
  <q-page class="q-pa-md flex flex-center">
    <q-form @submit.prevent="onSubmit" @reset.prevent="onReset" class="q-gutter-md" style="width: 300px">
      <!-- Name input -->
      <q-input filled v-model="name" label="Your name" :rules="[val => !!val || 'Please type something']" />

      <!-- Age input -->
      <q-input filled v-model.number="age" label="Your age" type="number"
        :rules="[val => val > 0 || 'Please type a valid positive age']" />

      <!-- Terms switch -->
      <q-toggle v-model="accepted" label="I accept the terms" />

      <!-- Buttons -->
      <div class="row q-gutter-sm">
        <q-btn type="submit" label="Submit" color="primary" />
        <q-btn type="reset" label="Reset" color="secondary" flat />
      </div>
    </q-form>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const age = ref(null)
const accepted = ref(false)

const onSubmit = () => {
  console.log({ name: name.value, age: age.value, accepted: accepted.value })
  // สามารถเพิ่ม alert หรือ Notify ต่อได้
}

const onReset = () => {
  name.value = ''
  age.value = null
  accepted.value = false
}
</script>
