import React from "react";
import Image from "next/image";
import { GetServerSidePropsContext } from "next";
import { MovieData } from "@/types";

export const getServerSideProps = async (
    context: GetServerSidePropsContext
) => {
    try {
        const response = await fetch(
            `http://localhost:12345/movie/${context.params?.id}`
        );
        if (!response.ok) {
            throw new Error("네트워크 오류");
        }
        const movieResult = await response.json();
        return {
            props: { movieResult }
        };
    } catch {
        return {
            notFound: true
        };
    }
};

const Detail = ({ movieResult }: { movieResult: MovieData }) => {
    return (
        <div className="p-4">
            <div className="flex gap-4 justify-center mb-12">
                <div className="relative aspect-[2/3] w-48 overflow-hidden rounded-lg">
                    <Image
                        src={movieResult?.posterImgUrl ?? ""}
                        alt={movieResult?.title ?? ""}
                        fill
                        className="object-cover transition-transform w-32 h-32"
                    />
                </div>
            </div>
            <h4 className="mb-4 text-2xl font-bold">{movieResult?.title}</h4>
            <div className="flex flex-col gap-2">
                <p className="text-sm ">
                    {movieResult?.releaseDate} /{" "}
                    {movieResult?.genres.join(", ")} / {movieResult?.runtime}분
                </p>
                <p className="text-lg mb-4">{movieResult?.company}</p>
                <p className="text-lg font-bold">{movieResult?.subTitle}</p>
                <p className="text-lg">{movieResult?.description}</p>
            </div>
        </div>
    );
};

export default Detail;
