import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";
import Hero from "../components/Hero";

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
