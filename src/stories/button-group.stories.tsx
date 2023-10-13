import type { Meta, StoryObj } from "@storybook/react";

import { buttonGroupMock } from "@/components/button-group/__tests__/button-group.mock";
import { ButtonGroup } from "@/components/button-group";

const meta = {
  title: "Components/ButtonGroup",
  component: ButtonGroup,
  parameters: buttonGroupMock,
  decorators: [
    (Story) => (
      <div style={{ display: "flex", justifyContent: "start" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: buttonGroupMock,
};
