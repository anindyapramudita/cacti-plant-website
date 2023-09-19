/* eslint-disable no-undef */

module.exports = {
  sendResetPassword: jest.fn().mockImplementation(async (email) => {
    if (email === "test@example.com") {
      return Promise.resolve({ status: 250 });
    } else {
      return Promise.reject(new Error("Email not found"));
    }
  }),
};
