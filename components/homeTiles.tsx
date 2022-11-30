import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  SimpleGrid,
  Skeleton,
  useMantineTheme,
} from "@mantine/core";
import styles from "../styles/Home.module.css";
import { useWeb3Auth } from "../services/web3auth";
import { AiOutlineQrcode } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";
import { BsWallet2 } from "react-icons/bs";
import { IoMdPhotos } from "react-icons/io";
import { AiOutlineMessage } from "react-icons/ai";
import { ImCheckmark } from "react-icons/im";
import { MdPermIdentity, MdSwapCalls } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import dynamic from "next/dynamic";
import { WidgetProps } from "@worldcoin/id";
import Wallet from "./Wallet";

const WorldIDWidget = dynamic<WidgetProps>(() => import("@worldcoin/id").then((mod) => mod.WorldIDWidget), { ssr: false });

const widgetProps: WidgetProps = {
  actionId: "wid_staging_2c0700135b5c8d0dd113861884bb7b73",
  signal: "user-id-1",
  enableTelemetry: true,
  appName: "Portal",
  signalDescription: "Portal dapp",
  theme: "dark",
  debug: false, // Recommended **only** for development
  onSuccess: (result) => console.log(result),
  onError: ({ code, detail }) => console.log({ code, detail }),
  onInitSuccess: () => console.log("Init successful"),
  onInitError: (error) => console.log("Error while initialization World ID", error),
};

const HomeTiles = () => {
  const [accounts, setAccounts] = useState();
  const PRIMARY_COL_HEIGHT = 300;

  const theme = useMantineTheme();
  const SECONDARY_COL_HEIGHT = PRIMARY_COL_HEIGHT / 2 - theme.spacing.md / 2;

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

  useEffect(() => {
    if (provider) {
      const getData = async () => {
        let acc = getAccounts;
        console.log("acc", acc);
        // console.log("data", data);
      };
      getData;
    }
    // return () => {
    // };
  }, [provider]);

  function getTest() {
    console.log("aaa");
  }

  // const fetchAccounts = async () => {
  //   // provider.getAccounts();
  //   let acc = await getAccounts;
  //   console.log('acc',acc)
  //   // setAccounts(acc);
  // };

  // console.log("getUserInfo", getUserInfo, "getAccounts", getAccounts);

  return (
    <Container my="md" className={styles.gridContainer}>
      {/* <button onClick={fetchAccounts} className={styles.card}>
        Get Accounts {accounts}
      </button> */}
      {/* <h1>Portal</h1> */}
      <SimpleGrid
        cols={2}
        spacing="md"
        breakpoints={[{ maxWidth: "sm", cols: 1 }]}
      >
        {/* <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} /> */}
        <Grid gutter="md">
          <Grid.Col>
            <div className={styles.homeGridAddress}>
                <WorldIDWidget {...widgetProps} /> 
            </div>
          </Grid.Col>
          <Grid.Col span={6}>
            <div className={styles.homeGridWallet}>
              <div className={styles.homeGridWalletContent}>
                <BsWallet2 size={40} style={{ color: '#7A56EA'}} />
                <br></br>
                Wallet
              </div>
            </div>
          </Grid.Col>
          <Grid.Col span={6}>
            <div className={styles.homeGridNFT}>
              <div className={styles.homeGridNFTContent}>
                <IoMdPhotos size={40} style={{ color: '#7A56EA'}} />
                <br></br>
                NFT
              </div>
            </div>
          </Grid.Col>
          <Grid.Col span={6}>
            <div className={styles.homeGridMessages}>
              <div className={styles.homeGridMessagesContent}>
                <AiOutlineMessage size={40} style={{ color: '#7A56EA'}} />
                <br></br>
                Messages
              </div>
            </div>
          </Grid.Col>
          <Grid.Col span={6}>
            <div className={styles.homeGridRD}>
              <div className={styles.homeGridRDContent}>
                <MdPermIdentity size={40} style={{ color: '#7A56EA'}} />
                <br></br>
                Polygon ID
              </div>
            </div>
          </Grid.Col>
          <Grid.Col span={6}>
            <div className={styles.homeGridRD}>
              <div className={styles.homeGridRDContent}>
                <BiWorld size={40}  style={{ color: '#7A56EA'}}/>
                <br></br>
                World ID
              </div>
            </div>
          </Grid.Col>
          <Grid.Col span={6}>
            <div className={styles.homeGridRD}>
              <div className={styles.homeGridRDContent}>
                <MdSwapCalls size={40} style={{ color: '#7A56EA'}} />
                <br></br>
                Swap
              </div>
            </div>
          </Grid.Col>
        </Grid>
      </SimpleGrid>
      <Wallet></Wallet>
    </Container>
  );
};
export default HomeTiles;
