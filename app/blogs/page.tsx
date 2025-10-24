import AllArticles from "@/components/Blogs/AllArticles";
import BlogsHero from "@/components/Blogs/BlogsHero";
import MostPopular from "@/components/Blogs/MostPopular";
import Footer from "@/components/Footer";

const blogs = () => {
  return (
    <div>
      <div className=" max-w-[988px] mx-auto mt-10">
        <BlogsHero />
        <MostPopular />
        <AllArticles />
      </div>
      <Footer />
    </div>
  );
};

export default blogs;
