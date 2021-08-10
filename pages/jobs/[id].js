import { useRouter } from 'next/router'
import useSWR from 'swr'
import { fetchAPI } from "../../lib/api";
import { HeaderJobs } from '../../components/header/header';

export async function getStaticProps() {
  // `getStaticProps` is invoked on the server-side,
  // so this `fetcher` function will be executed on the server-side.
  const posts = await fetcher('/api/work/')
  return { props: { slug } }
}

export default function Job() {
  
  const { data } = useSWR('/api/work/', fetcher, { initialData: props.slug})


  return (
    <div>
      {/* <HeaderJobs  /> */}
      <h2>Trabalhos de</h2>
      <h1 style={{"color":"blue"}}>{data.name}</h1>
    </div>
  )
}