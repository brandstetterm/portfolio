import type { Meta, StoryObj } from "@storybook/svelte";

import Tag from "../components/Tag.svelte";

const meta: Meta<typeof Tag> = {
  component: Tag,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Storybook"
  }
}
