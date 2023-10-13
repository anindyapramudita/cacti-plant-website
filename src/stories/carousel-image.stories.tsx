import type { Meta, StoryObj } from "@storybook/react";

import { CarouselImage } from "@/components/carousel-image";
import { carouselImageMock } from "@/components/carousel-image/__tests__/carousel-image.mock";

const meta = {
  title: "Components/CarouselImage",
  component: CarouselImage,
  parameters: carouselImageMock,
  decorators: [
    (Story) => (
      <div style={{ display: "flex", justifyContent: "start" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof CarouselImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: carouselImageMock,
};
