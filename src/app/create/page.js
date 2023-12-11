import CreateBlog from "@/components/Blogs/CreateBlog";
import { cookies } from "next/headers";

export default function CreateArticle() {
  const cookieStore = cookies();
  const access_token = cookieStore.get("token");
  console.log("access_token = ", access_token);
  return <CreateBlog />;
}
