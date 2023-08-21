/* eslint-disable no-undef */
import { act, fireEvent, render, waitFor } from "@testing-library/react";
import {
  EMAIL_SENT_HEADING,
  EMAIL_SENT_SUBTITLE,
  FORGOT_PASSWORD_HEADING,
  FORGOT_PASSWORD_SUBTITLE,
  SUBMIT,
} from "@/shared/utils/constants";
import { ForgotPasswordContent } from "../forgot-password-content";
import { IForgotPasswordContentProps } from "../forgot-password-content.interface";

jest.mock("@/shared/utils/send-reset-password");

const ForgotPasswordContentMock: IForgotPasswordContentProps = {
  onBackClick: jest.fn(),
  isForgotPassword: true,
};

describe("Login Content Component", () => {
  beforeEach(() => {
    ForgotPasswordContentMock.onBackClick();
  });

  test("Login Content should render with the right prop", () => {
    const { getByText, getByLabelText, container, getByRole } = render(
      <ForgotPasswordContent {...ForgotPasswordContentMock} />
    );

    const forgotPasswordHeader = getByText(FORGOT_PASSWORD_HEADING);
    expect(forgotPasswordHeader).toBeInTheDocument();

    const forgotPasswordSubtitle = getByText(FORGOT_PASSWORD_SUBTITLE);
    expect(forgotPasswordSubtitle).toBeInTheDocument();

    const emailInput = getByLabelText("Email");
    expect(emailInput).toBeInTheDocument();

    const errorMessage = container.querySelector(
      '[data-testid="error-message"]'
    );
    expect(errorMessage).not.toBeInTheDocument();

    const submitButton = getByRole("button", { name: SUBMIT });
    expect(submitButton).toBeInTheDocument();
  });

  test("Should be able to send reset email if the credentials is right", async () => {
    const { getByText, getByLabelText, container, getByRole } = render(
      <ForgotPasswordContent {...ForgotPasswordContentMock} />
    );
    const mockSendResetPassword =
      require("@/shared/utils/send-reset-password").sendResetPassword;

    const emailInput = getByLabelText("Email");
    expect(emailInput).toBeInTheDocument();

    const submitButton = getByRole("button", { name: SUBMIT });
    expect(submitButton).toBeInTheDocument();

    await act(async () => {
      fireEvent.input(emailInput, {
        target: { value: "test@example.com" },
      });
    });

    await act(async () => {
      fireEvent.click(submitButton);
    });

    await waitFor(() => {
      expect(mockSendResetPassword).toBeCalledWith("test@example.com");
    });

    const errorMessage = container.querySelector(
      '[data-testid="error-message"]'
    );
    expect(errorMessage).not.toBeInTheDocument();

    const emailSentHeading = getByText(EMAIL_SENT_HEADING);
    const emailSentSubtitle = getByText(EMAIL_SENT_SUBTITLE);

    expect(emailSentHeading).toBeInTheDocument();
    expect(emailSentSubtitle).toBeInTheDocument();
  });

  test("Should not be able to send reset email if the credentials is wrong", async () => {
    const { getByLabelText, container, getByRole } = render(
      <ForgotPasswordContent {...ForgotPasswordContentMock} />
    );

    const emailInput = getByLabelText("Email");
    expect(emailInput).toBeInTheDocument();

    const submitButton = getByRole("button", { name: SUBMIT });
    expect(submitButton).toBeInTheDocument();

    await act(async () => {
      fireEvent.input(emailInput, {
        target: { value: "wrongtest@example.com" },
      });
    });

    await act(async () => {
      fireEvent.click(submitButton);
    });

    await waitFor(() => {
      const emailSentContent = container.querySelector(
        '[data-testid="email-sent-content"]'
      );
      expect(emailSentContent).not.toBeInTheDocument();
    });
  });

  test("Should call onBackClick if back button is triggered", () => {
    const { container } = render(
      <ForgotPasswordContent {...ForgotPasswordContentMock} />
    );

    const backButton = container.querySelector('[data-testid="back-button"]');
    expect(backButton).toBeInTheDocument();

    if (backButton) {
      act(() => {
        fireEvent.click(backButton);
      });

      expect(ForgotPasswordContentMock.onBackClick).toHaveBeenCalled();
    }
  });
});
