import { MovieData } from "@/types";

export const fetchRecommendMovies = async (): Promise<MovieData[]> => {
    try {
        const response = await fetch("http://localhost:12345/movie/random");
        if (!response.ok) {
            throw new Error("네트워크 오류");
        }
        return await response.json();
    } catch (error) {
        console.error("오류 발생:", error);
        return [];
    }
};
