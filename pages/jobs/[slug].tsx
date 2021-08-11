import { useRouter } from 'next/router'
import useSWR from 'swr'
import Layout from '../../components/layout/layout';
import Header from '../../components/header/header';

import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';

export default function Job({slug}) {
  // const router = useRouter()
  // const { id } = router.query
  console.log(slug)
  return (
    <Layout>
      <h2>Trabalhos de {slug}</h2>
    </Layout>
  )
}

// export async function getStaticProps() {
//   const dev = process.env.NODE_ENV !== "production";
//   const server = dev ? "http://localhost:3000" : "https://alealmeida.co/";
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   const res = await fetch(`${server}/api/work`);
//   const jobs = await res.json();

//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       jobs,
//     },
//   };
// }
// export async function getStaticPaths() {
//   const dev = process.env.NODE_ENV !== "production";
//   const server = dev ? "http://localhost:3000" : "https://alealmeida.co";
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   const res = await fetch(`${server}/api/work`);
//   const jobs = await res.json();
//   return {
//     paths: [
//       // String variant:
//       '/jobs',
//       // Object variant:
//       { params: { slug: jobs.slug } },
//     ],
//     fallback: true,
//   }
// }

interface IParams extends ParsedUrlQuery {
    slug: string,
}

export const getStaticPaths: GetStaticPaths = async () => {
    // const arr: string[] = ['caixa', 'pop']
    const arr: string[] = ['caixa','pop'];
    // const arr2: number[] = ['caixa','pop'];
    const paths = arr.map((slug) => {
        return {
            params: { slug },
        }
    })
    return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async (context) => {
    
  const dev = process.env.NODE_ENV !== "production";
  const server = dev ? "http://localhost:3000" : "https://alealmeida.co/";
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const res = await fetch(`${server}/api/work`);
  
    const { slug } = context.params as IParams // no longer causes error
    const props = fetch(`${server}/api/work`)
    return { props: {slug} }
}