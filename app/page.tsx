import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import SpecSheet from "@/components/SpecSheet";
import Voices from "@/components/Voices";
import Preorder from "@/components/Preorder";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ProductShowcase />
      <SpecSheet />
      <Voices />
      <Preorder />
      <Footer />
    </main>
  );
}
