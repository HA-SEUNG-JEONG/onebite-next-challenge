import { MovieData } from "@/types";

export const fetchDetailMovies = async (id: string): Promise<MovieData> => {
    const response = await fetch(
        `https://onebite-cinema-api-eight.vercel.app/movie/${id}`
    );
    if (!response.ok) {
        throw new Error("네트워크 오류");
    }
    const data: MovieData = await response.json();
    return data;
};
