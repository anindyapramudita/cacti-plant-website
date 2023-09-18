export const likePlant = async (email: string, id: string) => {
  const response = await fetch("/api/like-plant", {
    method: "POST",
    body: JSON.stringify({ email, id }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};
