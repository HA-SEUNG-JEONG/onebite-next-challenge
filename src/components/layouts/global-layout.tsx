import Link from "next/link";

interface GlobalLayoutProps {
    children: React.ReactNode;
}

export default function GlobalLayout({ children }: GlobalLayoutProps) {
    return (
        <div className="min-h-screen bg-black text-white">
            <header className="text-[rgb(229,9,20)] p-4">
                <Link href="/" className="text-[20px] font-bold">
                    ONEBITE CINEMA
                </Link>
            </header>
            <main className="mx-auto max-w-[800px] px-5">{children}</main>
        </div>
    );
}
