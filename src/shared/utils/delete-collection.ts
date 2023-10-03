export const deleteCollection = async (
  userId: string,
  collectionId: string
) => {
  const response = await fetch("/api/delete-collection", {
    method: "POST",
    body: JSON.stringify({ userId, collectionId }),
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
