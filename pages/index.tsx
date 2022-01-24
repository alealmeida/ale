import {Navbar} from "./../components/navbar/navbar";
import {GetStaticProps} from "next"
import {getAll} from "../lib/jobs.service";
import Jobs from "./jobs";

const Home = ({jobs, pageProps}) => {
    console.log(pageProps)
    return (
        <section>
            <h1>Sou Alexandre Almeida</h1>
        </section>
    )
}
export const getStaticProps: GetStaticProps = async (context) => {
    const jobs = await getAll();
    return {
        props: {
            jobs: jobs
        }
    };
}

export default Home;