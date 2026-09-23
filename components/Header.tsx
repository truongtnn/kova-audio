export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-base/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-lg font-bold tracking-tight text-cream">
          KOVA <span className="text-amber">AUDIO</span>
        </a>
        <nav className="hidden gap-8 text-sm text-muted md:flex">
          <a href="#dial" className="transition-colors hover:text-cream">
            Núm vặn
          </a>
          <a href="#specs" className="transition-colors hover:text-cream">
            Thông số
          </a>
          <a href="#voices" className="transition-colors hover:text-cream">
            Người dùng
          </a>
        </nav>
        <a
          href="#preorder"
          className="rounded-sm border border-amber/60 px-4 py-2 text-sm font-medium text-amber transition-colors hover:bg-amber hover:text-base"
        >
          Đặt trước — 4.290.000đ
        </a>
      </div>
    </header>
  );
}
