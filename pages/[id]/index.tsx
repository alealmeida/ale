import { useRouter } from 'next/router'
import useSWR from 'swr'
import { fetchAPI } from "../../lib/api";
import { HeaderJobs } from '../../components/header/header';
export default function Job() {
  const { query } = useRouter()
  const { data, error } = useSWR(
    () => query.id && `/api/work/${query.id}`,
    fetchAPI 
  )

  if (error) return <div>{error.message}</div>
  if (!data) return <div>Loading...</div>

  return (
    <div>
      <HeaderJobs  />
      <h2>Trabalhos de</h2>
      <h1 style={{"color":"blue"}}>{data.name}</h1>
    </div>
  )
}