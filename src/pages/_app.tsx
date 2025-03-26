import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
        }
    };

    const showSearchBar =
        router.pathname === "/" || router.pathname === "/search";

    return (
        <div className="min-h-screen bg-black text-white">
            <header className="text-[rgb(229,9,20)] p-4">
                <Link href="/" className="text-[20px] font-bold">
                    ONEBITE CINEMA
                </Link>
            </header>
            {showSearchBar && (
                <div className="p-4">
                    <form
                        onSubmit={handleSearch}
                        className="mx-auto max-w-[800px] flex gap-2"
                    >
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="영화를 검색해보세요"
                            className="flex-1 px-4 py-2 rounded text-white bg-[#434343] border-2 border-[#7e7b7b]"
                        />
                        <button
                            type="submit"
                            className="px-6 py-2 bg-[#434343] rounded font-bold hover:bg-gray-100"
                        >
                            검색
                        </button>
                    </form>
                </div>
            )}
            <main className="mx-auto max-w-[800px] px-5">
                <Component {...pageProps} />
            </main>
        </div>
    );
}
