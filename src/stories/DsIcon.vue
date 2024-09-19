<template>
  <CopyButton class="icon-wrapper" :iconName="iconName">
    
      <span class="icon-inner">
        <i
          class="ds"
          :class="'ds-' + iconName"
          :style="style"
        />
      </span>
      <span class='label'>
        {{ iconName }}
      </span>
    
  </CopyButton>
</template>

<script lang="ts" setup>
import '../../ds-icons/ds-dist/icons.css';
import { computed } from 'vue';
import CopyButton from './CopyButton.vue';

// Types
interface Props {
  /**
   * Nome do ícone
   */
  iconName?: string,
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
  iconName: 'whatsapp',
  size: 32
})

// Refs

// Computed
const style = computed(() => ({
  color: props.color,
  fontSize: `${props.size}px`
}));

//Methods

// Hooks
</script>
<style scoped>
.icon-wrapper {
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	gap: 1em;
  padding: 1.5em 0.75em 1em;
	border-radius: 0.5em;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
}

.icon-wrapper:hover {
	cursor: pointer;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
}

.icon-inner {
	min-height: 2em;
}

i.ds {
	font-size: xx-large;
}

.label {
	text-align: center;
	color: #343434;
	display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}
</style>