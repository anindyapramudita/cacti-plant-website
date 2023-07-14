import { Header } from "@/components/header";
import { HomeLayout } from "@/components/layouts/home";
import { LoginModal } from "@/components/login-modal";
import { GlobalStyles } from "@/styles/globals";
import type { AppProps } from "next/app";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [loginOpen, setLoginOpen] = useState<boolean>(false);

  return (
    <>
      <GlobalStyles />
      <HomeLayout>
        <Header onLogin={() => setLoginOpen(!loginOpen)} />
        <Component {...pageProps} />
        <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
      </HomeLayout>
    </>
  );
}
