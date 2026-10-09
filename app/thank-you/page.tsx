import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LinkButton } from "@/components/ui/Button";
import { formatVND } from "@/lib/products";

export const metadata: Metadata = {
  title: "Cảm ơn bạn đã đặt hàng — KOVA AUDIO",
};

export default function ThankYouPage({
  searchParams,
}: {
  searchParams: { total?: string; items?: string };
}) {
  const total = Number(searchParams.total ?? 0);
  const items = Number(searchParams.items ?? 0);
  const hasOrderInfo = total > 0 && items > 0;

  return (
    <main>
      <Header />
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-lg border border-line/70 p-10 text-center">
          <span className="font-mono text-xs text-amberDim">ĐƠN HÀNG ĐÃ GHI NHẬN</span>
          <h1 className="mt-4 font-display text-3xl font-bold text-cream">
            Cảm ơn bạn đã đặt hàng tại KOVA AUDIO
          </h1>

          {hasOrderInfo && (
            <dl className="mt-8 space-y-3 border-y border-line/60 py-6 text-left font-mono text-sm">
              <div className="flex justify-between">
                <dt className="text-muted">Số sản phẩm</dt>
                <dd className="text-cream">{items}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted">Tổng cộng</dt>
                <dd className="text-amber">{formatVND(total)}</dd>
              </div>
            </dl>
          )}

          <p className="mt-6 text-sm text-muted">
            Đây là bản demo — chưa có cổng thanh toán hay email xác nhận thật
            được kết nối. Khi triển khai thật, trang này nên hiển thị mã đơn
            hàng và gửi email xác nhận cho khách.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <LinkButton href="/products">Tiếp tục mua sắm</LinkButton>
            <LinkButton href="/" variant="outline">
              Về trang chủ
            </LinkButton>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
