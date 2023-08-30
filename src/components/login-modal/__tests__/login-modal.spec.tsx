/* eslint-disable no-undef */
import { act, fireEvent, render } from "@testing-library/react";
import { ILoginModalProps } from "../login-modal.interface";
import { LoginModal } from "../login-modal";
import { FORGOT_PASSWORD_LABEL } from "@/shared/utils/constants";

const LoginModalContentMock: ILoginModalProps = {
  open: true,
  onClose: jest.fn(),
};

const mockRouterPush = jest.fn();

jest.mock("next/router", () => ({
  useRouter: () => ({
    push: mockRouterPush,
  }),
}));

describe("Login Modal Component", () => {
  test("Login Content should render with the right prop with LoginContent by default", () => {
    const { getByTestId } = render(<LoginModal {...LoginModalContentMock} />);

    const forgotPasswordContent = getByTestId("forgot-password-content");
    expect(forgotPasswordContent).toBeInTheDocument();

    const loginContent = getByTestId("login-content");
    expect(loginContent).toBeInTheDocument();

    expect(loginContent).toHaveStyle("--login-left: 50%");
    expect(forgotPasswordContent).toHaveStyle("--content-left: 175%");
  });

  test("Forgot Password Content should show when forgot password button is triggered", () => {
    const { getByTestId, getByRole } = render(
      <LoginModal {...LoginModalContentMock} />
    );

    const forgotPasswordContent = getByTestId("forgot-password-content");
    const loginContent = getByTestId("login-content");
    const forgotPasswordButton = getByRole("button", {
      name: FORGOT_PASSWORD_LABEL,
    });
    expect(forgotPasswordButton).toBeInTheDocument();

    act(() => {
      fireEvent.click(forgotPasswordButton);
    });

    expect(loginContent).toHaveStyle("--login-left: -75%");
    expect(forgotPasswordContent).toHaveStyle("--content-left: 50%");
  });

  test("Should show Login Content after back button is clicked", () => {
    const { getByTestId, getByRole, container } = render(
      <LoginModal {...LoginModalContentMock} />
    );

    const forgotPasswordContent = getByTestId("forgot-password-content");
    const loginContent = getByTestId("login-content");
    const forgotPasswordButton = getByRole("button", {
      name: FORGOT_PASSWORD_LABEL,
    });
    const backButton = container.querySelector('[data-testid="back-button"]');
    expect(forgotPasswordButton).toBeInTheDocument();

    act(() => {
      fireEvent.click(forgotPasswordButton);
    });

    if (backButton) {
      act(() => {
        fireEvent.click(backButton);
      });

      expect(loginContent).toHaveStyle("--login-left: 50%");
      expect(forgotPasswordContent).toHaveStyle("--content-left: 175%");
    }
  });
});
