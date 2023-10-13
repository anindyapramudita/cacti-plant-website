import type { Meta, StoryObj } from "@storybook/react";

import { ConfirmationModal } from "@/components/confirmation-modal";
import { confirmationMocalMock } from "@/components/confirmation-modal/__tests__/confirmation-modal.mock";

const meta = {
  title: "Components/ConfirmationModal",
  component: ConfirmationModal,
  parameters: confirmationMocalMock,
  decorators: [
    (Story) => (
      <div style={{ display: "flex", justifyContent: "start" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ConfirmationModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: confirmationMocalMock,
};
