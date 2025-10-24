import BlogDetailContent from "@/components/Blogs/BlogDetailContent";
import BlogDetailHero from "@/components/Blogs/BlogDetailHero";
import BlogDetailRelated from "@/components/Blogs/BlogDetailRelated";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <div>
      <BlogDetailHero />
      <BlogDetailContent />
      <BlogDetailRelated />
      <Footer />
    </div>
  );
};

export default page;
