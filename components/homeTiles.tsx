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
        let acc = await getAccounts();
        console.log('acc',acc)
        // console.log("data", data);
      };
      setTimeout(getData, 5000)

    }
    // return () => {
    // };
  }, [provider]);

  function getTest() {

    console.log("aaa")
  }

  // const fetchAccounts = async () => {
  //   // provider.getAccounts();
  //   let acc = await getAccounts;
  //   console.log('acc',acc)
  //   // setAccounts(acc); 
  // };

  // console.log("getUserInfo", getUserInfo, "getAccounts", getAccounts);

  return (
    <Container my="md" className={styles.main}>
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
            <Skeleton
              height={SECONDARY_COL_HEIGHT}
              radius="md"
              animate={false}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Skeleton
              height={SECONDARY_COL_HEIGHT}
              radius="md"
              animate={false}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Skeleton
              height={SECONDARY_COL_HEIGHT}
              radius="md"
              animate={false}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Skeleton
              height={SECONDARY_COL_HEIGHT}
              radius="md"
              animate={false}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Skeleton
              height={SECONDARY_COL_HEIGHT}
              radius="md"
              animate={false}
            />
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
};
export default HomeTiles;
