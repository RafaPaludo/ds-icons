import type { Meta, StoryObj } from '@storybook/vue3';
import iconsList from "../../ds-icons/ds-dist/icons.json";
import DsIcon from './DsIcon.vue';

// Recupera os nomes dos ícones
const iconNames = Object.keys(iconsList);

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof DsIcon> = {
  title: 'Franq/DsIcon',
  component: DsIcon,
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'color' },
    iconName: { control: 'select', options: iconNames },
    size: { control: { type: 'range', min: 1, max: 100, step: 1 } }
  },
} satisfies Meta<typeof DsIcon>;

export default meta;
type Story = StoryObj<typeof DsIcon>;

export const Default: Story = {
  args: {
    iconName: 'whatsapp',
    color: '#687BEA',
    size: 32
  }
}