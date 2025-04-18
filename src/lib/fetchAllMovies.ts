import { MovieData } from "@/types";

export const fetchAllMovies = async (): Promise<MovieData[]> => {
    try {
        const response = await fetch(
            "https://onebite-cinema-api-eight.vercel.app/movie"
        );
        if (!response.ok) {
            throw new Error("네트워크 오류");
        }
        return await response.json();
    } catch (error) {
        console.error("오류 발생:", error);
        return [];
    }
};
