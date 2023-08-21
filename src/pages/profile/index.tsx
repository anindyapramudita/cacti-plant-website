import { UserProtectedRoute } from "@/components/protected-route";

export default function ProfilePage() {
  return (
    <UserProtectedRoute>
      <p>Profile Page</p>
    </UserProtectedRoute>
  );
}

export async function getServerSideProps() {
  return {
    props: {},
  };
}
