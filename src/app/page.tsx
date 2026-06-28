import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <Header />
      <Hero />
      <Categories />
      <Footer />
    </main>
  );
}