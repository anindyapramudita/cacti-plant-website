/* eslint-disable no-undef */
import { Input } from "@/components/input";
import {
  passwordInputMock,
  textInputMock,
} from "@/components/input/__tests__/input.mock";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Input",
  component: Input,
  parameters: passwordInputMock,
  decorators: [
    (Story) => (
      <div style={{ width: "30rem" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextInput: Story = {
  args: textInputMock,
};
export const PasswordInput: Story = {
  args: passwordInputMock,
};
