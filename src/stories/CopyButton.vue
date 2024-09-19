<template>
  <button @click="copyToClipboard">
    <slot>Copiar</slot>
  </button>
</template>

<script lang="ts" setup>
// Types
interface Props {
  /**
   * Nome do ícone
   */
  iconName?: string
}
// Props
const props = withDefaults(defineProps<Props>(), {
  iconName: 'icone-com-nome',
})
// Refs

// Computed
const toPascalCase = (str: string) : string => {
	return str
		.split('-') // Divide a string pelo hifen
		.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Converte a primeira letra para maiúscula e o restante para minúscula
		.join(''); // Junta as palavras sem separadores
};

// Methods
const copyToClipboard = async () => {
  const prefix = "$ds";
  const name = prefix + toPascalCase(props.iconName);

  try {
    await navigator.clipboard.writeText(`<v-icon>${name}</v-icon>`);
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
};

// Hooks
</script>

<style scoped>
button {
  border: 0;
  background: transparent;
  font-size: 20px;
}
</style>