import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Eagler Server List | Home</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta
                    property="og:description"
                    content="The brand new, rewritten Eaglercraft server list. Built from the ground up to be more secure and elegant."
                />
                <meta
                    property="twitter:description"
                    content="The brand new, rewritten Eaglercraft server list. Built from the ground up to be more secure and elegant."
                />
                <meta property="theme-color" content="#FB8464" />
                <meta
                    property="og:title"
                    content="Eagler Server List - Home"
                />
                <meta property="og:type" content="website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </div>
    );
}