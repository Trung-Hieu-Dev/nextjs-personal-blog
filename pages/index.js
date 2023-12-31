import { Fragment } from "react";

import Head from "next/head";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";

import { getFeaturedPosts } from "../lib/posts-utils";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Hieu's Blog</title>
        <meta
          name="description"
          content="I put my heart into creating this blog with the goal of finding a job."
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 60,
  };
}

export default HomePage;
