import React from "react";
import getConfig from "next/config";
import { NextSeo } from "next-seo";

const About = ({ data }) => {
  const SEO = {
    title: `${data.title}`,
    description: "This is teh about page description",
  };
  return (
    <>
      <NextSeo {...SEO} />
      <div className="container mx-auto">
        <h1 className="text-white">{data.title}</h1>
        <p
          className="text-white"
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
      </div>
    </>
  );
};

export default About;

const { publicRuntimeConfig } = getConfig();
export async function getServerSideProps() {
  const res = await fetch(new URL(`${publicRuntimeConfig.API_URL}/about-page`));
  const data = await res.json();
  return {
    props: {
      data,
    },
    revalidate: 1,
  };
}
