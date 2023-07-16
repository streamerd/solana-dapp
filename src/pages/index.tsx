import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>artctrl</title>
        <meta
          name="description"
          content="artctrl"
        />  
      </Head>
      <HomeView />
    </div>
  );
};

export default Home;
