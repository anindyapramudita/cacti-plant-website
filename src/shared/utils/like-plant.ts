export const likePlant = async (userId: string, id: string) => {
  const response = await fetch("/api/like-plant", {
    method: "POST",
    body: JSON.stringify({ userId, id }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};
