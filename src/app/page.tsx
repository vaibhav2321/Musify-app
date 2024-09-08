import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import Navbar from "@/components/Navbar";
import TestimonialCards from "@/components/TestimonialCards";
import UpComingWebinars from "@/components/UpComingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg=grid-white/[0.02]">
      {/* <Navbar/> */}
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <TestimonialCards/>
      <UpComingWebinars/>
      <Instructors/>
      <Footer/>
    </main>
  );
}
