import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { searchMovie } from "@/lib/searchMovie";
import { MovieData } from "@/types";
import MovieResults from "@/components/MovieResults";

interface SearchPageProps {
    movies: MovieData[];
    query: string;
}

const Search = ({ movies, query }: SearchPageProps) => {
    const router = useRouter();
    const [searchResult, setSearchResult] = useState(movies);
    const [isLoading, setIsLoading] = useState(false);

    const keyword = typeof router.query.q === "string" ? router.query.q : query;

    useEffect(() => {
        const fetchMovies = async () => {
            const data = await searchMovie(keyword);
            setSearchResult(data);
            setIsLoading(false);
        };
        fetchMovies();
    }, [keyword]);

    return (
        <div className="p-4">
            <h2 className="mb-4 text-xl font-bold">
                &quot;{keyword}&quot; 검색 결과
            </h2>
            {isLoading ? (
                <div className="flex h-[50vh] items-center justify-center">
                    <div className="text-xl">검색 중...</div>
                </div>
            ) : (
                <MovieResults movies={searchResult} />
            )}
        </div>
    );
};

export default Search;
