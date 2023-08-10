import { LoginModal } from "@/components/login-modal";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/LoginModal",
  component: LoginModal,
  parameters: {
    open: true,
    onClose: () => {},
  },
  decorators: [
    (Story) => (
      <div style={{ width: "30rem" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof LoginModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: true,
    onClose: () => {},
  },
};
