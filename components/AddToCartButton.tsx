"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Button } from "./ui/Button";

export default function AddToCartButton({ slug }: { slug: string }) {
  const { addItem } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  function handleClick() {
    addItem(slug, 1);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1600);
  }

  return (
    <Button onClick={handleClick} className="w-full sm:w-auto sm:px-8">
      {justAdded ? "Đã thêm vào giỏ" : "Thêm vào giỏ hàng"}
    </Button>
  );
}
