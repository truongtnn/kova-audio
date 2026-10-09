import Link from "next/link";
import CartIndicator from "./CartIndicator";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-base/90 backdrop-blur">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <MobileMenu />
          <Link href="/" className="font-display text-lg font-bold tracking-tight text-cream">
            KOVA <span className="text-amber">AUDIO</span>
          </Link>
        </div>
        <nav className="hidden gap-8 text-sm text-muted md:flex">
          <Link href="/products" className="transition-colors hover:text-cream">
            Sản phẩm
          </Link>
          <Link href="/about" className="transition-colors hover:text-cream">
            Giới thiệu
          </Link>
          <Link href="/contact" className="transition-colors hover:text-cream">
            Liên hệ
          </Link>
        </nav>
        <CartIndicator />
      </div>
    </header>
  );
}
