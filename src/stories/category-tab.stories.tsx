import type { Meta, StoryObj } from "@storybook/react";

import { CategoryTab } from "@/components/category-tab";
import { categoryTabMock } from "@/components/category-tab/__tests__/category-tab.mock";

const meta = {
  title: "Components/CategoryTab",
  component: CategoryTab,
  parameters: categoryTabMock,
  decorators: [
    (Story) => (
      <div style={{ display: "flex", justifyContent: "start" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof CategoryTab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: categoryTabMock,
};
