import { useRouter } from "next/router";
import React from "react";

const Detail = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <div className="p-4">
            <h4 className="text-2xl font-bold">{id} 영화 상세 페이지</h4>
        </div>
    );
};

export default Detail;
