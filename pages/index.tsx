import React from "react";
import Head from "next/head";
import useSWR from 'swr';
import styles from "../styles/Home.module.css";
import Layout from "../components/layout/layout";
import Header from "../components/header/header";
import Link from "next/link";


// const fetcher = (url) => fetch(url).then((res) => res.json())

const Home = ({props}) => {
//   const { data, error } = useSWR('/api/work', fetcher)

console.log(props)
// if (error) return <div>Failed to load</div>
// if (!data) return <div>Loading...</div>
  return (
  <Layout>
    <Head>
      <title>Home</title>
    </Head>
    <div>
      {/* <Header key={jobs.id} jobs={jobs} /> */}
      <h2>Soon</h2>
    </div>
  </Layout>
)
;}
// const Home = ({jobs}) => (
//   <Layout>
//     <Head>
//       <title>Home</title>
//     </Head>
//     <div>
//       <Header jobs={jobs} />
//       <h2>Soon</h2>
//     </div>
//   </Layout>
// );


export default Home;
