export const createNewCollections = async (
  userId: string,
  plantId: string,
  title: string
) => {
  const response = await fetch("/api/new-collection", {
    method: "POST",
    body: JSON.stringify({
      userId,
      plantId,
      title,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};
