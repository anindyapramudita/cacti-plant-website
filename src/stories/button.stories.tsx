import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/button";
import {
  buttonMockMonochrome,
  buttonMockPrimary,
  buttonMockSecondary,
} from "@/components/button/__tests__/button.mock";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {},
  decorators: [
    (Story) => (
      <div style={{ display: "flex", justifyContent: "start" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: buttonMockPrimary,
};

export const Secondary: Story = {
  args: buttonMockSecondary,
};

export const Monochrome: Story = {
  args: buttonMockMonochrome,
};
