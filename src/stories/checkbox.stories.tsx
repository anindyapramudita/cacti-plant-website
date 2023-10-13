import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "@/components/checklist-input";
import { checkboxPropsMock } from "@/components/checklist-input/checkbox/__tests__/checkbox.mock";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: checkboxPropsMock,
  decorators: [
    (Story) => (
      <div style={{ display: "flex", justifyContent: "start" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: checkboxPropsMock,
};
