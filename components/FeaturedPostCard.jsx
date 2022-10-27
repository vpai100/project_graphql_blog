/* eslint-disable quotes */
import React from "react";
import moment from "moment";
import Link from "next/link";

// eslint-disable-next-line no-unused-vars
import { grpahCMSImageLoader } from "../util";

const FeaturedPostCard = ({ post }) => (
  <div className="flex flex-col overflow-hidden rounded-lg shadow-xl lg:flex-row">
    <div className="flex-shrink-0">
      <img
        src={post.featuredImage.url}
        alt=""
        className="h-48 w-full object-cover lg:h-96 lg:max-w-3xl"
      />
    </div>
    <div className="flex flex-1 flex-col justify-between bg-white p-6">
      <div className="flex-1">
        <h1 className="p-1 transition duration-700 text-left text-2xl font-black mb-8 cursor-pointer hover:text-violet-600">
          <Link href={`/post/${post.slug}`}>{post.title}</Link>
          <p className="mt-3 text-base font-semibold text-gray-500">
            {post.excerpt}
          </p>
        </h1>
      </div>
      <div className="flex items-center justify-between mb-4 lg:mb-0 w-full lg:w-auto mr-8 items-center">
        <div className="text-center">
          <Link href={`/post/${post.slug}`}>
            <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-blue-700 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">
              Read Now
            </span>
          </Link>
        </div>
        <div className="font-medium text-gray-700">
          <span className="align-middle">
            {moment(post.createdAt).format("MMM DD, YYYY")}
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default FeaturedPostCard;
