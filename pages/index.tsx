import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout/layout";
import Header from "../components/header/header";
import Link from "next/link";

const Home = ({jobs}) => (
  <Layout>
    <Head>
      <title>Home</title>
    </Head>
    <div>
      <Header jobs={jobs} />
      <h2>Soon</h2>
    </div>
  </Layout>
);

export async function getStaticProps() {
  const dev = process.env.NODE_ENV !== "production";
  const server = dev ? "http://localhost:3000" : "https://alealmeida.co/";
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(`${server}/api/work`);
  const jobs = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      jobs,
    },
  };
}

export default Home;
