import { Pagination } from "@/components/pagination";
import { paginationMock } from "@/components/pagination/__tests__/pagination.mock";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Pagination",
  component: Pagination,
  parameters: paginationMock,
  decorators: [
    (Story) => (
      <div style={{ display: "flex", justifyContent: "start" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: paginationMock,
};
