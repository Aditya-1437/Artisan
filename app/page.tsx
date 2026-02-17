import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TemplateShowcase from "@/components/TemplateShowcase";
import Testimonials from "@/components/Testimonials";
import StartJourney from "@/components/StartJourney";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <TemplateShowcase />
      <Testimonials />
      <StartJourney />
      <Footer />
    </main>
  );
}
