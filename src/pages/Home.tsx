import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSlider from "@/components/home/HeroSlider";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSlider />
        <FeaturedProducts />
        <Services />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
