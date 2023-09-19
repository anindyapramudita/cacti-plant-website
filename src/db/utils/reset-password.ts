export const resetPassword = async (
  password: string,
  token: string | string[] | undefined
) => {
  const response = await fetch("/api/reset-password", {
    method: "POST",
    body: JSON.stringify({ password }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};
