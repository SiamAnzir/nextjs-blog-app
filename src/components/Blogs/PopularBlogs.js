"use client";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchBlogs } from "@/redux/features/blog/blogSlice";
import BlogCard from "./BlogCard";

const PopularBlogs = () => {
  const dispatch = useDispatch();
  const { blogs, isLoading, isError } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(fetchBlogs());
    //console.log("use-effect");
  }, []);

  return (
    <div className="my-4 grid grid-cols-1 md:grid-cols-2 gap-[15px] md:gap-[20px] main-article-section">
      {blogs &&
        blogs.results &&
        blogs.results.map((cardItem) => (
          <BlogCard key={cardItem.id} cardDetails={cardItem} />
        ))}
    </div>
  );
};

export default PopularBlogs;
