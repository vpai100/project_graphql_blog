/* eslint-disable quotes */
import React, { useState, useEffect } from "react";

import { AdjacentPostCard } from "../components/AdjacentPostCard";
import { getAdjacentPosts } from "../services";

const AdjacentPosts = ({ createdAt, slug }) => {
  const [adjacentPost, setAdjacentPost] = useState(null);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    getAdjacentPosts(createdAt, slug).then((result) => {
      setAdjacentPost(result);
      setDataLoaded(true);
    });
  }, [slug]);

  return (
    <div className="mx-auto mt-12 grid max-w-lg gap-5 md:grid-cols-2 md:max-w-none lg:max-w-none  lg:grid-cols-2 mb-12">
      {dataLoaded && (
        <>
          {adjacentPost.previous && (
            <div className={`${adjacentPost.next}`}>
              <AdjacentPostCard post={adjacentPost.previous} position="LEFT" />
            </div>
          )}
          {adjacentPost.next && (
            <div className={`${adjacentPost.previous}`}>
              <AdjacentPostCard post={adjacentPost.next} position="RIGHT" />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AdjacentPosts;
