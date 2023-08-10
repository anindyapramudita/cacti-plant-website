/* eslint-disable no-undef */
import { act, fireEvent, render, waitFor } from "@testing-library/react";
import { LoginContent } from "../login-content";
import { ILoginContentProps } from "../login-content.interface";
import {
  CREDENTIALS_INVALID,
  FORGOT_PASSWORD_HEADING,
  GOOGLE_SIGN_IN,
  LOGIN_HEADER,
  SIGN_IN,
  SOMETHING_WRONG,
} from "@/shared/utils/constants";

const LoginContentMock: ILoginContentProps = {
  onClose: jest.fn(),
  onForgotClick: jest.fn(),
  isForgotPassword: false,
};

const mockRouterPush = jest.fn();

jest.mock("next/router", () => ({
  useRouter: () => ({
    push: mockRouterPush,
  }),
}));

jest.mock("@/shared/utils/user-sign-in");

describe("Login Content Component", () => {
  beforeEach(() => {
    mockRouterPush.mockClear();
    LoginContentMock.onClose();
    LoginContentMock.onForgotClick();
  });

  test("Login Content should render with the right prop", () => {
    const { getByText, getByLabelText, container, getByRole } = render(
      <LoginContent {...LoginContentMock} />
    );

    const loginHeader = getByText(LOGIN_HEADER);
    expect(loginHeader).toBeInTheDocument();

    const emailInput = getByLabelText("Email");
    expect(emailInput).toBeInTheDocument();

    const passwordInput = getByLabelText("Password");
    expect(passwordInput).toBeInTheDocument();

    const errorMessage = container.querySelector(
      '[data-testid="error-message"]'
    );
    expect(errorMessage).not.toBeInTheDocument();

    const signInButton = getByRole("button", { name: SIGN_IN });
    expect(signInButton).toBeInTheDocument();

    const googleSignIn = getByRole("button", { name: GOOGLE_SIGN_IN });
    expect(googleSignIn).toBeInTheDocument();
  });

  test("Should be able to sign in with the right credentials", async () => {
    const { getByLabelText, getByRole } = render(
      <LoginContent {...LoginContentMock} />
    );

    const mockUserSignIn = require("@/shared/utils/user-sign-in").userSignIn;

    const emailInput = getByLabelText("Email");
    const passwordInput = getByLabelText("Password");
    const signInButton = getByRole("button", { name: SIGN_IN });

    await act(async () => {
      fireEvent.input(emailInput, {
        target: { value: "test@example.com" },
      });
    });
    await act(async () => {
      fireEvent.input(passwordInput, {
        target: { value: "password123" },
      });
    });

    await act(async () => {
      fireEvent.click(signInButton);
    });

    await waitFor(() => {
      expect(mockUserSignIn).toHaveBeenCalledWith(
        "test@example.com",
        "password123"
      );
      expect(LoginContentMock.onClose).toHaveBeenCalled();
      expect(mockRouterPush).toHaveBeenCalledWith("/");
    });
  });

  test("Should not be able to sign in with the wrong credentials and show error message", async () => {
    const { getByLabelText, getByRole, getByText, container } = render(
      <LoginContent {...LoginContentMock} />
    );

    const mockUserSignIn = require("@/shared/utils/user-sign-in").userSignIn;

    const emailInput = getByLabelText("Email");
    const passwordInput = getByLabelText("Password");
    const signInButton = getByRole("button", { name: SIGN_IN });
    const errorMessage = container.querySelector(
      '[data-testid="error-message"]'
    );
    expect(errorMessage).not.toBeInTheDocument();

    await act(async () => {
      fireEvent.input(emailInput, {
        target: { value: "wrongtest@example.com" },
      });
    });
    await act(async () => {
      fireEvent.input(passwordInput, {
        target: { value: "password12345" },
      });
    });

    await act(async () => {
      fireEvent.click(signInButton);
    });

    await waitFor(() => {
      expect(mockUserSignIn).toHaveBeenCalledWith(
        "test@example.com",
        "password123"
      );
      expect(mockRouterPush).not.toHaveBeenCalled();
    });

    const newErrorMessage = container.querySelector(
      '[data-testid="error-message"]'
    );
    expect(newErrorMessage).toBeInTheDocument();
    expect(getByText(CREDENTIALS_INVALID)).toBeInTheDocument();
  });

  test("Error message should show is email and/or password is undefined or null", async () => {
    const { getByLabelText, getByRole, getByText, container } = render(
      <LoginContent {...LoginContentMock} />
    );

    const mockUserSignIn = require("@/shared/utils/user-sign-in").userSignIn;

    const emailInput = getByLabelText("Email");
    const passwordInput = getByLabelText("Password");
    const signInButton = getByRole("button", { name: SIGN_IN });
    const errorMessage = container.querySelector(
      '[data-testid="error-message"]'
    );
    expect(errorMessage).not.toBeInTheDocument();

    await act(async () => {
      fireEvent.input(emailInput, {
        target: { value: null },
      });
    });
    await act(async () => {
      fireEvent.input(passwordInput, {
        target: { value: null },
      });
    });

    await act(async () => {
      fireEvent.click(signInButton);
    });

    await waitFor(() => {
      expect(mockUserSignIn).toHaveBeenCalledWith("", "");
      expect(mockRouterPush).not.toHaveBeenCalled();
    });

    expect(getByText(SOMETHING_WRONG)).toBeInTheDocument();
  });

  test("Should call onForgotClick when forgot button is triggered", async () => {
    const { getByRole } = render(<LoginContent {...LoginContentMock} />);
    const forgotPasswordButton = getByRole("button", {
      name: FORGOT_PASSWORD_HEADING,
    });
    expect(forgotPasswordButton).toBeInTheDocument();

    await act(async () => {
      fireEvent.click(forgotPasswordButton);
    });

    await waitFor(() => {
      expect(LoginContentMock.onForgotClick).toHaveBeenCalled();
    });
  });
});
