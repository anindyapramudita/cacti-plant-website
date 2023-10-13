import type { Meta, StoryObj } from "@storybook/react";

import { CollectionCard } from "@/components/collection-card";
import { collectionCardMock } from "@/components/collection-card/__tests__/collection-card.mock";

const meta = {
  title: "Components/CollectionCard",
  component: CollectionCard,
  parameters: collectionCardMock,
  decorators: [
    (Story) => (
      <div style={{ display: "flex", justifyContent: "start" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof CollectionCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: collectionCardMock,
};
