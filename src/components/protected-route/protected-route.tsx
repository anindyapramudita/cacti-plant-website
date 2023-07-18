import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import { Loading } from "../loading-page";

const ProtectedRoute = ({ children }: { children: ReactElement }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <Loading />;
  }

  if (!session) {
    router.replace("/");
    return null;
  }

  return children;
};

export default ProtectedRoute;
