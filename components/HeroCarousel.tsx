"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ProductGlyph from "./ProductGlyph";
import DialGraphic from "./DialGraphic";
import { Product, formatVND } from "@/lib/products";

type Slide = Pick<Product, "slug" | "name" | "tagline" | "price" | "glyph">;

export default function HeroCarousel({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion || slides.length <= 1) return;

    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 3800);
    return () => clearInterval(timer);
  }, [slides.length]);

  const current = slides[index];

  return (
    <div>
      <div className="relative mx-auto aspect-square w-full max-w-sm">
        {slides.map((slide, i) => (
          <div
            key={slide.slug}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === index ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            {slide.slug === "dial-one" ? (
              <DialGraphic />
            ) : (
              <ProductGlyph type={slide.glyph} className="h-full w-full" />
            )}
          </div>
        ))}
      </div>

      <Link
        href={`/products/${current.slug}`}
        className="mt-6 block text-center transition-opacity"
      >
        <p className="font-display text-lg font-semibold text-cream">{current.name}</p>
        <p className="text-sm text-muted">{current.tagline}</p>
        <p className="mt-1 font-mono text-sm text-amber">{formatVND(current.price)}</p>
      </Link>

      <div className="mt-4 flex justify-center gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.slug}
            aria-label={`Xem ${slide.name}`}
            onClick={() => setIndex(i)}
            className={`h-1.5 w-5 transition-colors ${
              i === index ? "bg-amber" : "bg-line"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
