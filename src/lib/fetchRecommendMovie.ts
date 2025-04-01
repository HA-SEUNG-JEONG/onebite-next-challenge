import { MovieData } from "@/types";

export const fetchRecommendMovies = async (): Promise<MovieData[]> => {
    try {
        const response = await fetch(
            "https://onebite-next-challenge-api.vercel.app/movie/random"
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
