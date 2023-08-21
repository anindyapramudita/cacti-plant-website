/* eslint-disable no-undef */

module.exports = {
  userSignIn: jest.fn().mockImplementation(async (email, password) => {
    if (email && password) {
      if (email === "test@example.com" && password === "password123") {
        return Promise.resolve({ ok: true });
      } else {
        return Promise.resolve({ ok: false });
      }
    } else {
      return Promise.reject(new Error("Email not found"));
    }
  }),
};
