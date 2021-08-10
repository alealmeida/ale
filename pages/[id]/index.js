import { useRouter } from 'next/router'
import useSWR from 'swr'
import Layout from '../../components/layout/layout';
import Header from '../../components/header/header';

export default function Job() {
  const router = useRouter()
  const { id } = router.query
  return (
    <Layout>
      <h2>Trabalhos de {id}</h2>
    </Layout>
  )
}