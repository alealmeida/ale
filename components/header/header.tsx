import Link from "next/link";
import { useRouter } from "next/router";

const Header = ({ jobs }) => {
  return (
    <header>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        {jobs.map((j) => (
          <li key={j.id}>
            <Link
              href={{
                pathname: "/jobs/[slug]",
                query: { slug: j.slug },
              }}
              as={`/jobs/${j.slug}`}
            >
              <a>{j.slug}</a>
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};


export default Header;
