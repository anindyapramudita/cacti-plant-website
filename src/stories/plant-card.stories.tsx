import { PlantCard } from "@/components/refactor-card";
import { plantCardMock } from "@/components/refactor-card/__tests__/plant-card.mock";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/PlantCard",
  component: PlantCard,
  parameters: plantCardMock,
  decorators: [(Story) => (
    <div style={{ width: '30rem'}}>
      <Story />
    </div>
  )]
} satisfies Meta<typeof PlantCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: plantCardMock,
};
