import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";
import { InnerLoading } from "../components/loading";
import { useEffect, useState } from "react";
import api from "../api";
import Server from "../components/server";

export default function Home() {
    const [loading, setLoading] = useState(true);
    const [serversInfo, setServersInfo] = useState(null);
    useEffect(() => {
        api.getServers(0) // TODO: Get ?page param and pass it to api.getServers()
            .then((data) => {
                setServersInfo(data.data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    return (
        <>
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
                <meta property="og:title" content="Eagler Server List - Home" />
                <meta property="og:type" content="website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.root}>
                <Navbar />
                <h1>Servers</h1>
                <p>View a list of available servers.</p>
                {loading ? (
                    <InnerLoading />
                ) : (
                    <>
                        {serversInfo ? (
                            serversInfo.map((server, index) => (
                                <Server server={server} key={index} />
                            ))
                        ) : (
                            <p>Failed to load servers</p>
                        )}
                    </>
                )}
            </div>
        </>
    );
}
