import RecommendMovies from "@/components/RecommendMovies";
import AllMovies from "@/components/AllMovies";
import { fetchAllMovies } from "@/lib/fetchAllMovies";
import { GetStaticProps } from "next";
import { MovieData } from "@/types";
import { fetchRecommendMovies } from "@/lib/fetchRecommendMovie";

interface HomeProps {
    recommendedMovies: MovieData[];
    allMovies: MovieData[];
}

export default function Home({ recommendedMovies, allMovies }: HomeProps) {
    return (
        <div className="space-y-8">
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
        }
    };
};
