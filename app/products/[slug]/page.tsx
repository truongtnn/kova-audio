import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/ui/Section";
import Link from "next/link";
import ProductGlyph from "@/components/ProductGlyph";
import AddToCartButton from "@/components/AddToCartButton";
import { getProductBySlug, products, formatVND } from "@/lib/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const product = getProductBySlug(params.slug);
  if (!product) return {};
  return { title: `${product.name} — KOVA AUDIO` };
}

export default function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  return (
    <main>
      <Header />
      <Section py="md">
        <Link href="/products" className="text-sm text-muted hover:text-cream">
          ← Quay lại danh mục
        </Link>
        <div className="mt-8 grid gap-14 md:grid-cols-2">
          <ProductGlyph type={product.glyph} className="mx-auto w-full max-w-sm" />
          <div>
            <p className="text-sm text-amber">{product.category}</p>
            <h1 className="mt-2 font-display text-4xl font-bold text-cream">
              {product.name}
            </h1>
            <p className="mt-3 max-w-md text-muted">{product.tagline}</p>
            <div className="mt-6 flex items-baseline gap-3">
              <span className="font-display text-2xl font-bold text-cream">
                {formatVND(product.price)}
              </span>
              {product.oldPrice && (
                <span className="font-mono text-sm text-muted line-through">
                  {formatVND(product.oldPrice)}
                </span>
              )}
            </div>
            <p className="mt-6 max-w-md text-muted">{product.description}</p>
            <div className="mt-8">
              <AddToCartButton slug={product.slug} />
            </div>
            <dl className="mt-10 divide-y divide-line/60 border-y border-line/60">
              {product.specs.map(([label, value]) => (
                <div key={label} className="flex items-baseline justify-between py-3">
                  <dt className="text-sm text-muted">{label}</dt>
                  <dd className="font-mono text-sm text-amber">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Section>
      <Footer />
    </main>
  );
}
