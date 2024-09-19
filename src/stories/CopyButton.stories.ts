import type { Meta, StoryObj } from '@storybook/vue3';
import CopyButton from './CopyButton.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof CopyButton> = {
  title: 'Franq/CopyButton',
  component: CopyButton,
  tags: ['autodocs'],
  argTypes: {
    iconName: { control: 'text' },
  },
} satisfies Meta<typeof CopyButton>;

export default meta;
type Story = StoryObj<typeof CopyButton>;

export const Default: Story = {
  args: {
    iconName: 'whatsapp'
  }
}