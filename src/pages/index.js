import Head from "next/head";
import Image from "next/image";
import { Layout } from "@/layout/layout";
import Hero from "@/components/Hero/Hero";
// import { Inter } from "@next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Living Stones Church</title>
        <meta
          name="description"
          content="Bringing Jesus
to Generations
by the Power of 
the Holy Spirit"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Living Stones Church" />
        <meta
          property="og:description"
          content="Bringing Jesus
          to Generations
          by the Power of 
          the Holy Spirit"
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/bF5B54T/og-image-01.jpg"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout></Layout>
    </>
  );
}
