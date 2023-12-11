import PopularBlogs from "@/components/Blogs/PopularBlogs";

const Home = async () => {
  // const res = await fetch(
  //   `${process.env.NEXT_APP_BASE_URL}/care-drop/v1/blog/blog-list/?limit=6&offset=0`,
  //   { next: { revalidate: 120 } }
  // );

  // const data = await res.json();

  // console.log(data);

  return (
    <main className="container mx-auto my-5">
      <h1>Home Page</h1>
      <div className="my-3">Popular Blogs</div>
      <PopularBlogs />
    </main>
  );
};

export default Home;
