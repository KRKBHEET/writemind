import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views/home";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Write Mind</title>
        <meta property="og:title" content="BHEET" />
        <meta property="og:site_name" content="Write Mind" />
        <meta property="og:description" content="My mind writing in the waves of the human language." />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/KRKBHEET/writemind/main/public/YinYang.png"
        />
      </Head>
      <HomeView/>
    </>
  );
};

export default Home;