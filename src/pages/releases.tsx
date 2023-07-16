import type { NextPage } from "next";
import Head from "next/head";
import { ReleasesView } from "../views";

const Releases: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Press releases</title>
        <meta
          name="description"
          content="My press releases"
        />
      </Head>
      <ReleasesView />
    </div>
  );
};

export default Releases;
