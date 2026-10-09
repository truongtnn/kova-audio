import Link from "next/link";
import { Product, formatVND } from "@/lib/products";
import ProductGlyph from "./ProductGlyph";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group border border-line/70 p-5 transition-colors hover:border-amber/60"
    >
      <ProductGlyph type={product.glyph} className="aspect-square w-full" />
      <p className="mt-4 text-xs text-muted">{product.category}</p>
      <h3 className="mt-1 font-display text-lg font-semibold text-cream group-hover:text-amber">
        {product.name}
      </h3>
      <p className="mt-1 text-sm text-muted">{product.tagline}</p>
      <div className="mt-4 flex items-baseline gap-3">
        <span className="font-mono text-sm text-amber">{formatVND(product.price)}</span>
        {product.oldPrice && (
          <span className="font-mono text-xs text-muted line-through">
            {formatVND(product.oldPrice)}
          </span>
        )}
      </div>
    </Link>
  );
}
