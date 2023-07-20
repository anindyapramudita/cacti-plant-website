import ProtectedRoute from "@/components/protected-route/protected-route";
import { getPlants } from "@/sanity/get-plants";

export default function CollectionPage() {
  return (
    <ProtectedRoute>
      <p>Collection Page</p>
    </ProtectedRoute>
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
