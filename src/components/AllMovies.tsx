import React from "react";
import MovieItem from "./MovieItem";
import { MovieData } from "@/types";
import { fetchAllMovies } from "@/lib/fetchAllMovies";

export const getServerSideProps = async () => {
    const allMovies = await fetchAllMovies();
    return {
        props: { allMovies }
    };
};

const AllMovies = ({ allMovies }: { allMovies: MovieData[] }) => {
    return (
        <section>
            <h3 className="mb-4 text-2xl font-bold">등록된 모든 영화</h3>
            <div className="grid grid-cols-5 gap-12">
                {allMovies.map((movie) => (
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

export default AllMovies;
