import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Hero";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>quran-cutie🤩</title>
        <meta
          name="description"
          content="Create beautiful images of verses from Quran"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </Layout>
  );
};

export default Home;
