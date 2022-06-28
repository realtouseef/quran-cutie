import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import  { GetStaticProps } from "next";

const Home: NextPage = ({ ayat }) => {
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


export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_VERSE_URL}/10` as string);

  const ayat = await res.json()

  return {
    props: {
      ayat
    }
  }
}
