import ProtectedRoute from "@/components/protected-route/protected-route";

export default function ProfilePage() {
  return (
    <ProtectedRoute>
      <p>Profile Page</p>
    </ProtectedRoute>
  );
}

export async function getServerSideProps() {
  return {
    props: {},
  };
}
