import React from "react";
import Image from "next/image";
import logo from "../public/Original_Logo.png";
import styles from "../styles/Home.module.css";
import { useWeb3Auth } from "../services/web3auth";

type Props = {};

const NavBar = (props: Props) => {
  const {
    provider,
    login,
    logout,
    getUserInfo,
    getAccounts,
    getBalance,
    signMessage,
    signTransaction,
    signAndSendTransaction,
    web3Auth,
    chain,
  } = useWeb3Auth();

  return (
    <>
      {provider ? (
        <div className={styles.nav}>
          <div className={styles.navLogo}>
            <Image src={logo} />
          </div>
          <div className={styles.loginStatus}>
            {provider ? (
              <span className={styles.dotGreen}></span>
            ) : (
              <span className={styles.dotRed}></span>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default NavBar;
