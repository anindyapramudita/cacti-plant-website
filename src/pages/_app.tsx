import { Header } from "@/components/header";
import { HomeLayout } from "@/components/layouts/home";
import { LoginModal } from "@/components/login-modal";
import { GlobalStyles } from "@/styles/globals";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/router";
import { Loading } from "@/components/loading-page/";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [loginOpen, setLoginOpen] = useState<boolean>(false);

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

  const onLikeClick = () => setLoginOpen(true);

  return (
    <>
      <GlobalStyles />
      <SessionProvider session={session}>
        {loading ? (
          <Loading />
        ) : (
          <HomeLayout>
            <Header onLogin={() => setLoginOpen(!loginOpen)} />
            <Component {...pageProps} onLikeClick={onLikeClick} />
            <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
          </HomeLayout>
        )}
      </SessionProvider>
    </>
  );
}
