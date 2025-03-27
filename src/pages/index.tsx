import dummyData from "@/dummy.json";
import RecommendMovies from "@/components/RecommendMovies";
import AllMovies from "@/components/AllMovies";

export default function Home() {
    const recommendedMovies = dummyData.slice(0, 3);
    const allMovies = dummyData;

    return (
        <div className="space-y-8">
            <RecommendMovies recommendedMovies={recommendedMovies} />
            <AllMovies allMovies={allMovies} />
        </div>
    );
}
