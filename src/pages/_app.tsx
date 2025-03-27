import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import GlobalLayout from "@/components/layouts/global-layout";
import SearchLayout from "@/components/layouts/search-layout";

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();
    const showSearchBar =
        router.pathname === "/" || router.pathname === "/search";

    const Layout = showSearchBar ? SearchLayout : GlobalLayout;

    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}
