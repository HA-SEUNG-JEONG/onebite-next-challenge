import { useState } from "react";
import { useRouter } from "next/router";
import GlobalLayout from "./global-layout";

interface SearchLayoutProps {
    children: React.ReactNode;
}

export default function SearchLayout({ children }: SearchLayoutProps) {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
        }
    };

    return (
        <GlobalLayout>
            <div className="p-4">
                <form onSubmit={handleSearch} className="mx-auto flex gap-2">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="영화를 검색해보세요"
                        className="flex-1 rounded-lg border-2 border-[#7e7b7b] bg-[#434343] px-4 py-2 text-white"
                    />
                    <button
                        type="submit"
                        className="rounded-lg bg-[#434343] px-6 py-2 font-bold text-white hover:bg-gray-100"
                    >
                        검색
                    </button>
                </form>
            </div>
            {children}
        </GlobalLayout>
    );
}
