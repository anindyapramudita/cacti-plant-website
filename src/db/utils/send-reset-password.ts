export const sendResetPassword = async (email: string) => {
  const response = await fetch("/api/send-reset", {
    method: "POST",
    body: JSON.stringify({ email }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};
