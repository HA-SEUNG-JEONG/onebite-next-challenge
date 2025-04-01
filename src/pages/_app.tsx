import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

import Head from "next/head";
import SearchLayout from "@/components/layouts/search-layout";
import GlobalLayout from "@/components/layouts/global-layout";

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();
    const showSearchBar =
        router.pathname === "/" || router.pathname === "/search";

    const Layout = showSearchBar ? SearchLayout : GlobalLayout;

    return (
        <Layout>
            <Head>
                <title>ONEBITE CINEMA</title>
                <meta name="description" content="ONEBITE CINEMA" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" href="/favicon.ico" />
                <link rel="manifest" href="/manifest.json" />
            </Head>
            <Component {...pageProps} />
        </Layout>
    );
}
