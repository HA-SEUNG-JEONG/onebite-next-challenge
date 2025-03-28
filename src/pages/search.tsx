import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { searchMovie } from "@/lib/searchMovie";
import { MovieData } from "@/types";
import MovieResults from "@/components/movieResults";

interface SearchPageProps {
    movies: MovieData[];
    query: string;
}

const Search = ({ movies, query }: SearchPageProps) => {
    const router = useRouter();
    const [searchResult, setSearchResult] = useState(movies);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchMovies = async () => {
            const searchQuery =
                typeof router.query.q === "string" ? router.query.q : "";
            setIsLoading(true);
            try {
                const newMovies = await searchMovie(searchQuery);
                setSearchResult(newMovies);
            } finally {
                setIsLoading(false);
            }
        };

        fetchMovies();
    }, [router.query.q]);

    return (
        <div className="p-4">
            <h2 className="mb-4 text-xl font-bold">
                &quot;{query}&quot; 검색 결과
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

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const searchQuery = typeof query.q === "string" ? query.q : "";
    const movies = await searchMovie(searchQuery);

    return {
        props: {
            movies,
            query: searchQuery
        }
    };
};

export default Search;
