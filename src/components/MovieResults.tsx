import { MovieData } from "@/types";
import MovieItem from "./MovieItem";

const MovieResults = ({ movies }: { movies: MovieData[] }) => {
    return (
        <div className="grid grid-cols-5 gap-4">
            {movies?.length === 0 ? (
                <div>검색 결과가 없습니다.</div>
            ) : (
                movies?.map((movie) => (
                    <MovieItem
                        key={movie.id}
                        id={movie.id}
                        posterImgUrl={movie.posterImgUrl}
                    />
                ))
            )}
        </div>
    );
};

export default MovieResults;
