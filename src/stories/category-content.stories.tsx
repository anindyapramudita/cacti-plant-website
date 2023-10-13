import type { Meta, StoryObj } from "@storybook/react";

import { CategoryContent } from "@/components/category-content";
import { categoryContentMock } from "@/components/category-content/__tests__/category-content.mock";

const meta = {
  title: "Components/CategoryContent",
  component: CategoryContent,
  parameters: categoryContentMock,
  decorators: [
    (Story) => (
      <div style={{ display: "flex", justifyContent: "start" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof CategoryContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: categoryContentMock,
};
