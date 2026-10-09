import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/ui/Section";
import PageHeader from "@/components/PageHeader";
import ProductsExplorer from "@/components/ProductsExplorer";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Sản phẩm — KOVA AUDIO",
};

export default function ProductsPage() {
  return (
    <main>
      <Header />
      <Section py="md">
        <PageHeader
          eyebrow="Danh mục"
          title="Toàn bộ dòng Dial"
          description="Mỗi sản phẩm đều giữ một chi tiết chung: một núm vặn cơ thật để điều khiển, thay cho cảm ứng."
        />
        <div className="mt-10">
          <ProductsExplorer products={products} />
        </div>
      </Section>
      <Footer />
    </main>
  );
}
