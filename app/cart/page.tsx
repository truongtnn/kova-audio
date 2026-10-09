import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/ui/Section";
import CartView from "@/components/CartView";

export const metadata: Metadata = {
  title: "Giỏ hàng — KOVA AUDIO",
};

export default function CartPage() {
  return (
    <main>
      <Header />
      <Section py="md">
        <h1 className="font-display text-4xl font-bold text-cream">Giỏ hàng</h1>
        <div className="mt-10">
          <CartView />
        </div>
      </Section>
      <Footer />
    </main>
  );
}
