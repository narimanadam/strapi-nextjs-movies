import React from "react";
import { ActorItem } from "@movies-app/components";
import { useRouter } from "next/router";

const ActorDetailsPage = ({ actor }) => {
  const router = useRouter();

  if (router.isFallback) {
    // your loading indicator
    return <div>loading...</div>;
  }
  return (
    <div className="container mx-auto mt-8">
      <ActorItem
        name={`${actor.first_name} ${actor.last_name}`}
        bio={actor.bio}
        img={actor.image.url}
        movies={actor.movies}
      />
    </div>
  );
};

export default ActorDetailsPage;

export const getStaticPaths = async () => {
  const { API_URL } = process.env;

  const res = await fetch(new URL(`${API_URL}/actors`));
  const actors = await res.json();
  const paths = actors.map((actor) => ({
    params: {
      id: actor.id.toString(),
    },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { API_URL } = process.env;

  const { id } = context.params;
  const res = await fetch(new URL(`${API_URL}/actors/${id}`));
  const actor = await res.json();

  return {
    props: {
      actor,
    },
  };
};
