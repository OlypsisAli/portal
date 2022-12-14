import { useWeb3Auth } from "../services/web3auth";
import styles from "../styles/Home.module.css";
import { WALLET_ADAPTERS } from "@web3auth/base";
import Image from "next/image";
import logo from "../public/Transparent_Logo.png";
import { Button, Tooltip } from "@mantine/core";

const Main = () => {
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

  const loggedInView = (
    <>
      <button onClick={getUserInfo} className={styles.card}>
        Get User Info
      </button>
      <button onClick={getAccounts} className={styles.card}>
        Get Accounts
      </button>
      <button onClick={getBalance} className={styles.card}>
        Get Balance
      </button>
      <button onClick={signMessage} className={styles.card}>
        Sign Message
      </button>
      {(web3Auth?.connectedAdapterName === WALLET_ADAPTERS.OPENLOGIN ||
        chain === "solana") && (
        <button onClick={signTransaction} className={styles.card}>
          Sign Transaction
        </button>
      )}

      <button onClick={signAndSendTransaction} className={styles.card}>
        Sign and Send Transaction
      </button>
      <button onClick={logout} className={styles.card}>
        Log Out
      </button>

      <div className={styles.console} id="console">
        <p className={styles.code}></p>
      </div>
    </>
  );

  const unloggedInView = (
    <>
      <div className={styles.logincontainer}>
        <Image className={styles.loginLogo} src={logo} />

        <Button
          // variant="gradient"
          radius="xl"
          size="xl"
          onClick={login}
          className={styles.loginButton}
        >
          LOGIN
        </Button>
      </div>
    </>
  );

  return <div>{provider ? loggedInView : unloggedInView}</div>;
};

export default Main;
