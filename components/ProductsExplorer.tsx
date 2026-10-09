"use client";

import { useMemo, useState } from "react";
import { Product } from "@/lib/products";
import ProductCard from "./ProductCard";

type SortKey = "default" | "price-asc" | "price-desc" | "name-asc";

const sortLabels: Record<SortKey, string> = {
  default: "Mặc định",
  "price-asc": "Giá: thấp đến cao",
  "price-desc": "Giá: cao đến thấp",
  "name-asc": "Tên: A → Z",
};

export default function ProductsExplorer({ products }: { products: Product[] }) {
  const categories = useMemo(
    () => ["Tất cả", ...Array.from(new Set(products.map((p) => p.category)))],
    [products]
  );

  const [category, setCategory] = useState<string>("Tất cả");
  const [sort, setSort] = useState<SortKey>("default");

  const filtered = useMemo(() => {
    let list = products;
    if (category !== "Tất cả") {
      list = list.filter((p) => p.category === category);
    }
    const sorted = [...list];
    if (sort === "price-asc") sorted.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") sorted.sort((a, b) => b.price - a.price);
    if (sort === "name-asc") sorted.sort((a, b) => a.name.localeCompare(b.name, "vi"));
    return sorted;
  }, [products, category, sort]);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-6 border-b border-line/70 pb-6">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`border px-3 py-1.5 text-sm transition-colors ${
                category === c
                  ? "border-amber text-amber"
                  : "border-line/70 text-muted hover:text-cream"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <label className="flex items-center gap-2 text-sm text-muted">
          Sắp xếp
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
            className="border border-line/70 bg-panel px-2 py-1.5 text-cream outline-none focus:border-amber"
          >
            {Object.entries(sortLabels).map(([key, label]) => (
              <option key={key} value={key}>
                {label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <p className="mt-4 text-xs text-muted">{filtered.length} sản phẩm</p>

      {filtered.length === 0 ? (
        <p className="mt-12 text-muted">Không có sản phẩm nào trong danh mục này.</p>
      ) : (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
