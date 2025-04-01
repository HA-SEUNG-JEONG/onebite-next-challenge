import RecommendMovies from "@/components/RecommendMovies";
import AllMovies from "@/components/AllMovies";
import { fetchAllMovies } from "@/lib/fetchAllMovies";
import { GetStaticProps } from "next";
import { MovieData } from "@/types";
import { fetchRecommendMovies } from "@/lib/fetchRecommendMovie";
import Head from "next/head";

interface HomeProps {
    recommendedMovies: MovieData[];
    allMovies: MovieData[];
}

export default function Home({ recommendedMovies, allMovies }: HomeProps) {
    return (
        <div className="space-y-8">
            <Head>
                <title>한입 씨네마</title>
                <meta property="og:image" content="../assets/thumbnail.png" />
                <meta property="og:title" content="한입 씨네마" />
                <meta
                    property="og:description"
                    content="한입 씨네마에 등록된 영화들을 살펴보세요."
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <RecommendMovies recommendedMovies={recommendedMovies} />
            <AllMovies allMovies={allMovies} />
        </div>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const [allMovies, recommendedMovies] = await Promise.all([
        fetchAllMovies(),
        fetchRecommendMovies()
    ]);

    return {
        props: {
            allMovies,
            recommendedMovies
        },
        revalidate: 3
    };
};
