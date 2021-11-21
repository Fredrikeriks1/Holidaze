import React from "react";
import Hero from "./Hero";
import Footer from "../layout/Footer";
import RecentlyViewed from "./RecentlyViewed";
import SearchList from "../search/SearchList";
import { Helmet } from "react-helmet";

export function Home() {
  return (
    <>
      <Helmet>
        <title>Home | Holidaze</title>
        <link rel="icon" type="image/svg" href="/favicon.svg" />
      </Helmet>
      <Hero />
      <SearchList />
      <RecentlyViewed />
      <Footer />
    </>
  );
}

export default Home;
