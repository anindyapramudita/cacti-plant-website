import type { Meta, StoryObj } from "@storybook/react";

import { CheckRadio } from "@/components/checklist-input";
import { checkRadioPropsMock } from "@/components/checklist-input/check-radio/__tests__/check-radio.mock";

const meta = {
  title: "Components/CheckRadio",
  component: CheckRadio,
  parameters: checkRadioPropsMock,
  decorators: [
    (Story) => (
      <div style={{ display: "flex", justifyContent: "start" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof CheckRadio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: checkRadioPropsMock,
};
