<template>
  <div class="input-container">
    <input type="text" placeholder="Filtrar" v-model="search" />
	<button v-if="search" @click="clear">x</button>
  </div>
</template>

<script lang="ts" setup>
import { defineModel } from 'vue';

// Types

// Props

// Refs
const search = defineModel();

// Computed

// Methods
const clear = () => search.value = "";

// Hooks
</script>
<style scoped>
input {
	font-size: 1.25em;
	border: none;
	border-radius: 0.4em;
	padding: 0.8em;
	box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1),0 1px 2px 0 rgba(0,0,0,0.06);
	outline-color: #687BEA;
	width: 25%;
	min-width: 300px;
}

button {
	position: absolute;
	font-size: 1.25em;
	border: none;
	background-color: #687BEA;
	color: #fff;
	border-radius: 0 0.4em 0.4em 0;
	top: 0;
	right: 0;
	height: 100%;
	width: 40px;
	cursor: pointer;
}

.input-container {
	position: relative;
	display: inline-block;
}
</style>