import "../styles/globals.css";
import type { AppProps } from "next/app";
import React, { useEffect, useState } from "react";
import { CHAIN_CONFIG_TYPE } from "../config/chainConfig";
import { WEB3AUTH_NETWORK_TYPE } from "../config/web3AuthNetwork";
import { Web3AuthProvider } from "../services/web3auth";
import Main from "../components/main";

function MyApp({ Component, pageProps }: AppProps) {
  const [web3AuthNetwork, setWeb3AuthNetwork] =
    useState<WEB3AUTH_NETWORK_TYPE>("mainnet");
  const [chain, setChain] = useState<CHAIN_CONFIG_TYPE>("mainnet");

  return (
    <>
      <Web3AuthProvider chain={chain} web3AuthNetwork={web3AuthNetwork}>
        {/* <Main /> */}
        <Component {...pageProps} />
      </Web3AuthProvider>
    </>
  );
}

export default MyApp;
