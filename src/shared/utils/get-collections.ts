export const getCollections = async (userId: string) => {
  const response = await fetch("/api/get-collections", {
    method: "POST",
    body: JSON.stringify({ userId }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch liked plants");
  }

  const data = await response.json();
  return data;
};
