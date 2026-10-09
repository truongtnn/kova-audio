"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { getProductBySlug, formatVND } from "@/lib/products";
import { Button, LinkButton } from "./ui/Button";

export default function CartView() {
  const router = useRouter();
  const { lines, setQty, removeItem, clear, totalItems, totalPrice } = useCart();

  if (lines.length === 0) {
    return (
      <div className="border border-line/70 p-10 text-center text-muted">
        <p>Giỏ hàng của bạn đang trống.</p>
        <LinkButton href="/products" className="mt-4">
          Xem sản phẩm
        </LinkButton>
      </div>
    );
  }

  function handleCheckout() {
    const query = new URLSearchParams({
      total: String(totalPrice),
      items: String(totalItems),
    });
    clear();
    router.push(`/thank-you?${query.toString()}`);
  }

  return (
    <div className="grid gap-10 md:grid-cols-[1fr_320px]">
      <div className="divide-y divide-line/60 border-y border-line/60">
        {lines.map((line) => {
          const product = getProductBySlug(line.slug);
          if (!product) return null;
          return (
            <div key={line.slug} className="flex flex-wrap items-center gap-4 py-5">
              <div className="flex-1">
                <Link
                  href={`/products/${product.slug}`}
                  className="font-display font-semibold text-cream hover:text-amber"
                >
                  {product.name}
                </Link>
                <p className="font-mono text-sm text-amber">{formatVND(product.price)}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  aria-label="Giảm số lượng"
                  onClick={() => setQty(line.slug, line.qty - 1)}
                  className="h-8 w-8 border border-line/70 text-cream hover:border-amber"
                >
                  −
                </button>
                <span className="w-6 text-center font-mono text-sm">{line.qty}</span>
                <button
                  aria-label="Tăng số lượng"
                  onClick={() => setQty(line.slug, line.qty + 1)}
                  className="h-8 w-8 border border-line/70 text-cream hover:border-amber"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeItem(line.slug)}
                className="text-sm text-muted hover:text-cream"
              >
                Xoá
              </button>
            </div>
          );
        })}
      </div>

      <div className="h-fit border border-line/70 p-6">
        <div className="flex items-baseline justify-between border-b border-line/60 pb-4">
          <span className="text-muted">Tổng cộng</span>
          <span className="font-display text-xl font-bold text-cream">
            {formatVND(totalPrice)}
          </span>
        </div>
        <Button onClick={handleCheckout} className="mt-5 w-full">
          Đặt hàng
        </Button>
        <button
          onClick={clear}
          className="mt-3 w-full text-center text-xs text-muted hover:text-cream"
        >
          Xoá toàn bộ giỏ hàng
        </button>
      </div>
    </div>
  );
}
