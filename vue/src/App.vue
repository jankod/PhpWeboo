<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import {createApp, reactive} from "vue";
import Dialog from 'primevue/dialog';
import 'primeicons/primeicons.css';
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primevue/resources/themes/saga-blue/theme.css'

import Checkbox from 'primevue/checkbox';


import PrimeVue from 'primevue/config';

import { ref } from 'vue'

let app = createApp(this);
app.component('Dialog', Dialog);

app.use(PrimeVue)


const state = reactive({
  count: 0
})

const check = ref(false)

</script>

<template>
  <header>
    Ovo je header
  </header>
  <br>
  <Checkbox v-model="check" :binary="true"/>
  <i class="pi pi-spin pi-spinner" style="font-size: 1rem"></i>


  <p>Check {{check}}</p>
  <main>
    <p>Count {{ state.count }}</p>
  </main>
</template>

