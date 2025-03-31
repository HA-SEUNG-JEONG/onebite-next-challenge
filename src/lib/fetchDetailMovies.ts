import { MovieData } from "@/types";

export const fetchDetailMovies = async (id: string): Promise<MovieData> => {
    const response = await fetch(`http://localhost:12345/movie/${id}`);
    if (!response.ok) {
        throw new Error("네트워크 오류");
    }
    const data: MovieData = await response.json();
    return data;
};
