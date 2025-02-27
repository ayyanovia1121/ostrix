import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PromptArea from "@/components/PromptArea";


export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Background with multiple gradients */}
      <div className="fixed inset-0 bg-black">
        {/* Left gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/40 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-950/20 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,146,60,0.05),transparent_50%)]" />
      </div>

      <div className="relative z-10">
        <Header />
        <main className="container mx-auto flex flex-col items-center justify-center px-4 py-20">
          <Hero />
          <PromptArea />
        </main>
        <Footer />
      </div>
    </div>
  );
}
