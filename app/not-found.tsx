import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LinkButton } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main>
      <Header />
      <section className="mx-auto flex max-w-6xl flex-col items-start px-6 py-24">
        <span className="font-mono text-sm text-amberDim">404</span>
        <h1 className="mt-3 font-display text-4xl font-bold text-cream">
          Không tìm thấy trang này.
        </h1>
        <p className="mt-4 max-w-md text-muted">
          Có thể đường dẫn đã thay đổi hoặc sản phẩm không còn tồn tại. Quay
          lại trang chủ hoặc xem danh mục sản phẩm.
        </p>
        <div className="mt-8 flex gap-4">
          <LinkButton href="/">Về trang chủ</LinkButton>
          <LinkButton href="/products" variant="outline">
            Xem sản phẩm
          </LinkButton>
        </div>
      </section>
      <Footer />
    </main>
  );
}
