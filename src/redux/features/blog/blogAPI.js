"use client";

import axios from "axios";

export const getBlogs = async () => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/care-drop/v1/blog/popular-blog-list/?limit=5&offset=0`
  );
  console.log("api-call");
  return response.data;
};
/** Client Side Caching Code */
export const getCacheBlogs = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/care-drop/v1/blog/popular-blog-list/?limit=5&offset=0`,
    { cache: "force-cache" }
  );
  const data = await response.json();
  return data;
};
