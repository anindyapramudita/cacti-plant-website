/* eslint-disable no-undef */
import { render } from "@testing-library/react";
import { ImageCard } from "../image-card";
import { EmptyImageMock, ImageCardMock } from "./image-card.mock";
import { NO_IMAGE, NO_IMAGE_ALT } from "../image-card.constants";

describe("Image Component", () => {
  test("Image should render with the right properties", () => {
    const expectSrc = expect.stringMatching(
      ImageCardMock.src.split("://").join("%3A%2F%2F").split("/").join("%2F")
    );

    const { getByAltText } = render(<ImageCard {...ImageCardMock} />);

    const imageElement = getByAltText(ImageCardMock.alt);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", expectSrc);
  });

  test("Image should render with the default image and alt if src and alt doesn't exist", () => {
    const expectSrc = expect.stringMatching(
      NO_IMAGE.split("://").join("%3A%2F%2F").split("/").join("%2F")
    );
    const { getByAltText } = render(<ImageCard {...EmptyImageMock} />);

    const imageElement = getByAltText(NO_IMAGE_ALT);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", expectSrc);
  });

  test("Image should render with custom width and height", () => {
    const { container } = render(<ImageCard {...ImageCardMock} />);
    const imageElement = container.querySelector("img");
    expect(imageElement).toHaveAttribute(
      "width",
      ImageCardMock.width.toString()
    );
    expect(imageElement).toHaveAttribute(
      "height",
      ImageCardMock.height.toString()
    );
  });

  test("Image should apply carousel class when carousel prop is true", () => {
    const { container } = render(<ImageCard {...ImageCardMock} carousel />);
    const imageElement = container.querySelector("img");
    expect(imageElement).toHaveClass("carousel");
  });

  test("Image should apply additional className", () => {
    const customClassName = "custom-class";
    const { container } = render(
      <ImageCard {...ImageCardMock} className={customClassName} />
    );
    const imageElement = container.querySelector("img");
    expect(imageElement).toHaveClass(customClassName);
  });
});
