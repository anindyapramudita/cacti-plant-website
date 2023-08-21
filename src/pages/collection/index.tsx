import { UserProtectedRoute } from "@/components/protected-route";
import { getPlants } from "@/sanity/get-plants";

export default function CollectionPage() {
  return (
    <UserProtectedRoute>
      <p>Collection Page</p>
    </UserProtectedRoute>
  );
}

export async function getServerSideProps() {
  const data = await getPlants(0);

  return {
    props: {
      plants: data,
    },
  };
}
