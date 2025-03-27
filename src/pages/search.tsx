import { useRouter } from "next/router";
import React from "react";
import dummyData from "@/dummy.json";
import MovieItem from "@/components/MovieItem";

const Search = () => {
    const router = useRouter();
    const { q } = router.query;
    const searchQuery = typeof q === "string" ? q : "";

    const searchResult = dummyData.filter((movie) =>
        movie.title.includes(searchQuery)
    );

    return (
        <div className="p-4">
            <div className="grid grid-cols-5 gap-4">
                {searchResult.map((movie) => (
                    <MovieItem
                        key={movie.id}
                        id={movie.id}
                        posterImgUrl={movie.posterImgUrl}
                    />
                ))}
            </div>
        </div>
    );
};

export default Search;
