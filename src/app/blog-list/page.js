import BlogCard from "@/components/Blogs/BlogCard";

const BlogList = async () => {
  const res = await fetch(
    `${process.env.NEXT_APP_BASE_URL}/care-drop/v1/blog/blog-list/?limit=6&offset=0`,
    { next: { revalidate: 120 } }
  );

  const data = await res.json();

  //console.log(data);

  return (
    <main className="container mx-auto my-5">
      <h1>Blog List Page</h1>
      <div className="my-4 grid grid-cols-1 md:grid-cols-2 gap-[15px] md:gap-[20px] main-article-section">
        {data.results.map((cardItem) => (
          <BlogCard key={cardItem.id} cardDetails={cardItem} />
        ))}
      </div>
    </main>
  );
};

export default BlogList;
