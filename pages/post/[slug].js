/* eslint-disable quotes */
import React from "react";
import { useRouter } from "next/router";

import {
  PostDetail,
  Author,
  Comments,
  CommentsForm,
  Loader,
} from "../../components";
import { getPosts, getPostDetails } from "../../services";
import { AdjacentPosts } from "../../sections";

const PostDetails = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <>
      <div className="mx-auto flex flex-col max-w-7xl items-center  justify-between px-4 py-5 sm:px-6 sm:py-4 md:justify-start md:space-x-10 lg:px-0">
        <div className="col-span-1 lg:col-span-10">
          <PostDetail post={post} />
          <Author author={post.author} />
          <h1 className="pt-16 text-4xl font-black">Similar Articles</h1>
          <AdjacentPosts slug={post.slug} createdAt={post.createdAt} />
          <CommentsForm slug={post.slug} />
          <Comments slug={post.slug} />
        </div>
      </div>
    </>
  );
};
export default PostDetails;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);
  return {
    props: {
      post: data,
    },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}
