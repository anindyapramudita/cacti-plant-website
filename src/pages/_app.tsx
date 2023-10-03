import { Header } from "@/components/header";
import { HomeLayout } from "@/components/layouts/home";
import { LoginModal } from "@/components/login-modal";
import { GlobalStyles } from "@/styles/globals";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/router";
import { Loading } from "@/components/loading-page/";
import { AddToCollectionModal } from "@/components/add-to-collection-modal";
import { Collection } from "@/shared/type/data-types";
import { ToastType } from "@/components/toast/toast.interface";
import { Toast } from "@/components/toast";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [loginOpen, setLoginOpen] = useState<boolean>(false);
  const [collectionOpen, setCollectionOpen] = useState<boolean>(false);
  const [collectionPlantId, setCollectionPlantId] = useState<string>("");
  const [userId, setUserId] = useState<string>("");
  const [collections, setCollections] = useState<Collection[]>([]);
  const [toastMessage, setToastMessage] = useState<string>("");
  const [toastType, setToastType] = useState<ToastType>("success");

  useEffect(() => {
    const handleRouteChange = () => {
      setLoading(true);
    };

    const handleRouteChangeComplete = () => {
      setLoading(false);
    };

    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [router.events]);

  useEffect(() => {
    if (toastMessage) {
      setTimeout(() => {
        setToastMessage("");
      }, 5000);
    }
  }, [toastMessage]);

  const handleOpenLogin = () => setLoginOpen(true);
  const handleOpenCollection = (
    plantId: string,
    userId: string,
    collection: Collection[]
  ) => {
    setCollectionOpen(true);
    setCollectionPlantId(plantId);
    setUserId(userId);
    setCollections(collection);
  };
  const handleUpdateToast = (message: string, type: ToastType) => {
    setToastMessage(message);
    setToastType(type);
  };

  return (
    <>
      <GlobalStyles />
      <SessionProvider session={session}>
        {loading ? (
          <Loading />
        ) : (
          <HomeLayout>
            <Header onLogin={() => setLoginOpen(!loginOpen)} />
            <Component
              {...pageProps}
              onLikeClick={handleOpenLogin}
              onCollectionClick={handleOpenCollection}
              onUpdateToast={handleUpdateToast}
            />
            <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
            <AddToCollectionModal
              open={collectionOpen}
              onClose={() => setCollectionOpen(false)}
              plantId={collectionPlantId}
              userId={userId}
              collections={collections}
              onUpdateToast={handleUpdateToast}
            />
            {toastMessage && (
              <Toast
                type={toastType}
                position="top-right"
                onClose={() => setToastMessage("")}
              >
                {toastMessage}
              </Toast>
            )}
          </HomeLayout>
        )}
      </SessionProvider>
    </>
  );
}
