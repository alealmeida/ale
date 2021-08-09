import Link from 'next/link';
import useSWR from 'swr';
import { useRouter } from 'next/router'
import { fetchAPI} from "../../lib/api";
import css from "./header.module.sass";

export const HeaderJobs = () => {
  const { query } = useRouter()
  const { data, error } = useSWR(`/api/work/`,
    fetchAPI
  )

  if (error) return <div>{error.message}</div>
  if (!data) return <div>Loading...</div>
  return (
  <ul className={css.list}>
    <li>
      <Link href="/">
        <a>Início</a>
      </Link>
    </li>
    {data.map((p, i) =>
    <li>
      <Link href="/[slug]" as={`/${p.slug}`}>
        <a>{p.name}</a>
      </Link>
    </li>
    )}
    <li>
      <Link href="/about">
        <a>Sobre</a>
      </Link>
    </li>
  </ul>
  )
}