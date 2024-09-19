<template>
  <SearchButton v-model="search" />

  <main>
    <DsIcon
      v-for="iconName in filteresNames"
      :key="iconName"
      :iconName="iconName"
      :color="color"
      :size="size"  
    />
  </main>
</template>

<script lang="ts" setup>
import DsIcon from './DsIcon.vue';
import SearchButton from './InputSearch.vue';
import '../../ds-icons/ds-dist/icons.css';
import { computed, ref } from 'vue';

// Types
interface Props {
  /**
   * Lista com os nomes dos ícones
   */
  iconNames?: string[],
  /**
   * Cor do ícone
   */
   color?: string,
  /**
   * Tamanho do ícone
   */
  size?: number,
}

// Props
const props = withDefaults(defineProps<Props>(), {
  color: '#687BEA',
  iconNames: () => [],
  size: 32
})

// Refs
const search = ref('');

// Computed
const filteresNames = computed(() => {
  if (search.value === "") {
    return props.iconNames;
  }

  return props.iconNames?.filter(icon => icon.includes(search.value));
});

//Methods

// Hooks
</script>

<style scoped>
main {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(125px, 1fr));
	gap: 1em;
	font-family: Verdana, Geneva, Tahoma, sans-serif;
  margin-top: 1em;
}
</style>