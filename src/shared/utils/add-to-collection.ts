export const addToCollection = async (
  userId: string,
  collectionId: string,
  plantId: string
) => {
  const response = await fetch("/api/add-to-collection", {
    method: "POST",
    body: JSON.stringify({
      userId,
      collectionId,
      plantId,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};
