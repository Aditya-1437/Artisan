
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingSection from "@/components/PricingSection";

export default function PricingPage() {
    return (
        <main className="min-h-screen flex flex-col bg-[#F7F5F0]">
            <Navbar />
            <div className="pt-20"> {/* Add padding for fixed navbar */}
                <PricingSection />
            </div>
            <Footer />
        </main>
    );
}
