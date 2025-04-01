import React from "react";
import Image from "next/image";
import {
    GetStaticPaths,
    GetStaticPropsContext,
    InferGetStaticPropsType
} from "next";

import { fetchAllMovies } from "@/lib/fetchAllMovies";
import { useRouter } from "next/router";
import { fetchDetailMovies } from "@/lib/fetchDetailMovies";
import Head from "next/head";

export const getStaticPaths: GetStaticPaths = async () => {
    const movies = await fetchAllMovies();

    const paths = movies.map((movie) => ({
        params: { id: movie.id.toString() }
    }));

    return {
        paths,
        fallback: "blocking"
    };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
    const id = typeof context.params?.id === "string" ? context.params.id : "";
    try {
        // id가 존재하지 않으면 에러 처리
        if (!id) {
            throw new Error("ID가 유효하지 않습니다");
        }
        // 문자열로 변환하여 전달
        const movieResult = await fetchDetailMovies(id);

        return { props: { movieResult } };
    } catch {
        return { notFound: true };
    }
};

const Detail = ({
    movieResult
}: InferGetStaticPropsType<typeof getStaticProps>) => {
    const router = useRouter();

    // fallback이 true일 때 로딩 상태 처리
    if (router.isFallback) {
        return (
            <div className="flex h-[70vh] items-center justify-center">
                <div className="text-xl">영화 정보를 불러오는 중...</div>
            </div>
        );
    }

    if (!movieResult) {
        return <div>영화 정보가 존재하지 않습니다.</div>;
    }

    return (
        <div className="p-4">
            <Head>
                <title>{movieResult.title} | 한입 씨네마</title>

                <meta
                    property="og:title"
                    content={`${movieResult.title} | 한입 씨네마에 등록된 영화들을 살펴보세요.`}
                />
                <meta
                    property="og:description"
                    content={movieResult.description}
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex gap-4 justify-center mb-12">
                <div className="relative aspect-[2/3] w-48 overflow-hidden rounded-lg">
                    <Image
                        src={movieResult.posterImgUrl ?? ""}
                        alt={movieResult.title ?? ""}
                        fill
                        className="object-cover transition-transform w-32 h-32"
                    />
                </div>
            </div>
            <h4 className="mb-4 text-2xl font-bold">{movieResult.title}</h4>
            <div className="flex flex-col gap-2">
                <p className="text-sm ">
                    {movieResult.releaseDate} / {movieResult.genres.join(", ")}{" "}
                    / {movieResult.runtime}분
                </p>
                <p className="text-lg mb-4">{movieResult.company}</p>
                <p className="text-lg font-bold">{movieResult.subTitle}</p>
                <p className="text-lg">{movieResult.description}</p>
            </div>
        </div>
    );
};

export default Detail;
