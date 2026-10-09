"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";
import { getProductBySlug } from "@/lib/products";

export type CartLine = { slug: string; qty: number };

type CartContextValue = {
  lines: CartLine[];
  addItem: (slug: string, qty?: number) => void;
  removeItem: (slug: string) => void;
  setQty: (slug: string, qty: number) => void;
  clear: () => void;
  totalItems: number;
  totalPrice: number;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "kova-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setLines(JSON.parse(raw));
    } catch {
      // ignore corrupted storage
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      // storage unavailable, ignore
    }
  }, [lines, hydrated]);

  function addItem(slug: string, qty = 1) {
    setLines((prev) => {
      const existing = prev.find((l) => l.slug === slug);
      if (existing) {
        return prev.map((l) => (l.slug === slug ? { ...l, qty: l.qty + qty } : l));
      }
      return [...prev, { slug, qty }];
    });
  }

  function removeItem(slug: string) {
    setLines((prev) => prev.filter((l) => l.slug !== slug));
  }

  function setQty(slug: string, qty: number) {
    if (qty <= 0) {
      removeItem(slug);
      return;
    }
    setLines((prev) => prev.map((l) => (l.slug === slug ? { ...l, qty } : l)));
  }

  function clear() {
    setLines([]);
  }

  const totalItems = useMemo(() => lines.reduce((sum, l) => sum + l.qty, 0), [lines]);

  const totalPrice = useMemo(
    () =>
      lines.reduce((sum, l) => {
        const product = getProductBySlug(l.slug);
        return sum + (product ? product.price * l.qty : 0);
      }, 0),
    [lines]
  );

  return (
    <CartContext.Provider
      value={{ lines, addItem, removeItem, setQty, clear, totalItems, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart phải được dùng bên trong CartProvider");
  return ctx;
}
