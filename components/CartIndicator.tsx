"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartIndicator() {
  const { totalItems } = useCart();

  return (
    <Link
      href="/cart"
      className="flex items-center gap-2 rounded-sm border border-amber/60 px-4 py-2 text-sm font-medium text-amber transition-colors hover:bg-amber hover:text-base"
    >
      Giỏ hàng
      <span className="font-mono text-xs">({totalItems})</span>
    </Link>
  );
}
