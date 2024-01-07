import NavBar from "@/components/common/NavBar";
import FooterSection from "@/components/sections/FooterSection";
import HeroSection from "@/components/sections/HeroSection";
import NewsletterSection from "@/components/sections/NewsletterSection";
import ServiceSection from "@/components/sections/ServiceSection";
import TeamSection from "@/components/sections/TeamSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import VideoPlayerSection from "@/components/sections/VideoPlayerSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavBar />
      <div className="px-4 md:px-6 lg:px-12">
        <HeroSection />
        <ServiceSection />
        <VideoPlayerSection />
        <TestimonialSection />
        <TeamSection />
        <NewsletterSection />
      </div>
      <FooterSection />
    </main>
  );
}
