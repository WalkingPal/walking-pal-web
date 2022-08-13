import { Stack } from "@mui/material";
import { Footer } from "components/Footer";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "./index.module.scss";

const Home: NextPage = () => {
	return (
    <Stack
      minHeight='100vh'
    >
      <Footer />
    </Stack>
	);
};

export default Home;
