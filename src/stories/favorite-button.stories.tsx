import type { Meta, StoryObj } from "@storybook/react";

import { FavoriteButton } from "@/components/favorite-button";
import { favoriteButtonMock } from "@/components/favorite-button/__tests__/favorite-button.mock";

const meta = {
  title: "Components/FavoriteButton",
  component: FavoriteButton,
  parameters: favoriteButtonMock,
  decorators: [
    (Story) => (
      <div style={{ display: "flex", justifyContent: "start" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof FavoriteButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: favoriteButtonMock,
};
