import { useRouter } from "next/router";
import React from "react";
import dummyData from "@/dummy.json";
import Image from "next/image";

const Detail = () => {
    const router = useRouter();
    const { id } = router.query;
    const movie = dummyData.find((movie) => movie.id === Number(id));
    console.log(movie);
    return (
        <div className="p-4">
            <div className="flex gap-4 justify-center mb-12">
                <div className="relative aspect-[2/3] w-48 overflow-hidden rounded-lg">
                    <Image
                        src={movie?.posterImgUrl ?? ""}
                        alt={movie?.title ?? ""}
                        fill
                        className="object-cover transition-transform w-32 h-32"
                    />
                </div>
            </div>
            <h4 className="mb-4 text-2xl font-bold">{movie?.title}</h4>
            <div className="flex flex-col gap-2">
                <p className="text-sm ">
                    {movie?.releaseDate} / {movie?.genres.join(", ")} /{" "}
                    {movie?.runtime}분
                </p>
                <p className="text-lg mb-4">{movie?.company}</p>
                <p className="text-lg font-bold">{movie?.subTitle}</p>
                <p className="text-lg">{movie?.description}</p>
            </div>
        </div>
    );
};

export default Detail;
