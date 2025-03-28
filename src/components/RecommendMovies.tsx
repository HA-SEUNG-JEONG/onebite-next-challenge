import React from "react";
import MovieItem from "./MovieItem";
import { MovieData } from "@/types";
import { fetchRecommendMovies } from "@/lib/fetchRecommendMovie";

export const getServerSideProps = async () => {
    const recommendedMovies = await fetchRecommendMovies();
    return {
        props: { recommendedMovies }
    };
};

const RecommendMovies = ({
    recommendedMovies
}: {
    recommendedMovies: MovieData[];
}) => {
    return (
        <section>
            <h3 className="mb-4 text-2xl font-bold">지금 가장 추천하는 영화</h3>
            <div className="grid grid-cols-3 gap-4">
                {recommendedMovies.map((movie) => (
                    <MovieItem
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        posterImgUrl={movie.posterImgUrl}
                    />
                ))}
            </div>
        </section>
    );
};

export default RecommendMovies;
