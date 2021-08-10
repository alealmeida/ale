import Link from 'next/link';
import css from "./header.module.sass";

export const HeaderJobs = () => {
  return (
  <ul className={css.list}>
    <li>
      <Link href="/">
        <a>Início</a>
      </Link>
    </li>
    {data.map((p, i) =>
    <li>
      <Link prefetch href={{
              pathname: '/j',
              query: { slug: p.slug },
            }} as={`/${p.slug}`}>
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