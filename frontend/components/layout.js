import Header from "./header";
import Footer from "./footer";
import Head from "next/head";
import Script from "next/script";
import { Provider as WagmiProvider } from "wagmi";
import { providers } from "ethers";

import networks from "../utils/networks.json";

// Provider that will be used when no wallet is connected (aka no signer)
const provider = providers.getDefaultProvider(
  networks[networks.selectedChain].rpcUrls[0]
);

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <title>Zeroku</title>
        <meta name="title" content="Zeroku" />
        <meta name="description" content="Zero Knowledge Sudoku" />
        <meta name="theme-color" content="#ea580c" />
      </Head>
      <WagmiProvider autoConnect provider={provider}>
        <div className="flex flex-col min-h-screen px-2 bg-slate-900 text-slate-300">
          <Header />
          <main className="mb-auto">{children}</main>
          <Footer />
        </div>
      </WagmiProvider>
    </>
  );
}
