import type { Meta, StoryObj } from '@storybook/vue3';
import InputSearch from './InputSearch.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof InputSearch> = {
  title: 'Franq/InputSearch',
  component: InputSearch,
  tags: ['autodocs']
} satisfies Meta<typeof InputSearch>;

export default meta;
type Story = StoryObj<typeof InputSearch>;

export const Default: Story = {
  args: {}
}