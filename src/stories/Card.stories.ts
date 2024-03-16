import type { Meta, StoryObj } from "@storybook/svelte";

import Card from "../components/Card.svelte";

const meta: Meta<typeof Card> = {
  component: Card,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Storybook",
    description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum ",
    tags: ["Storybook.js", "React.js", "TypeScript"]
  }
}
