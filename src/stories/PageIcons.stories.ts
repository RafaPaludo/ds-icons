import type { Meta, StoryObj } from '@storybook/vue3';
import iconsList from "../../ds-icons/ds-dist/icons.json";
import PageIcons from './PageIcons.vue';

// Recupera os nomes dos ícones
const iconNames = Object.keys(iconsList);

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof PageIcons> = {
  title: 'Franq/PageIcons',
  component: PageIcons,
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'color' },
    iconNames: { control: 'object' },
    size: { control: { type: 'range', min: 1, max: 100, step: 1 } }
  },
} satisfies Meta<typeof PageIcons>;

export default meta;
type Story = StoryObj<typeof PageIcons>;

export const Default: Story = {
  args: {
    iconNames,
    color: '#687BEA',
    size: 32
  }
}