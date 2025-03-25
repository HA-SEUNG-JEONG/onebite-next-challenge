import { useRouter } from "next/router";
import React from "react";

const Search = () => {
    const router = useRouter();
    const { q } = router.query;
    return (
        <div className="p-4">
            <h4 className="text-2xl font-bold">검색 결과 : {q}</h4>
        </div>
    );
};

export default Search;
