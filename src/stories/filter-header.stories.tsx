import { FilterHeader } from "@/components/filter-header";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/FilterHeader",
  component: FilterHeader,
} satisfies Meta<typeof FilterHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSaveSearch: () => {},
    onClearFilter: () => {},
    onSaveFilter: () => {},
  },
};
