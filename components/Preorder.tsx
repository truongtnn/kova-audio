export default function Preorder() {
  return (
    <section id="preorder" className="border-t border-line/70 bg-panel2">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-6 py-20 md:flex-row md:items-end">
        <div>
          <p className="text-sm text-amber">Đợt đặt trước đầu tiên</p>
          <h2 className="mt-3 max-w-md font-display text-3xl font-bold text-cream md:text-4xl">
            Giao hàng tháng 12, giới hạn 500 chiếc.
          </h2>
          <p className="mt-4 max-w-md text-muted">
            Đặt trước hôm nay để nhận ưu đãi 15% và được khắc tên riêng lên
            hộp sạc.
          </p>
        </div>
        <div className="w-full max-w-sm border border-line/70 bg-base p-6">
          <div className="flex items-baseline justify-between">
            <span className="font-display text-3xl font-bold text-cream">4.290.000đ</span>
            <span className="font-mono text-xs text-muted line-through">5.050.000đ</span>
          </div>
          <button className="mt-6 w-full rounded-sm bg-amber py-3 font-medium text-base transition-transform hover:translate-y-[-1px]">
            Đặt trước ngay
          </button>
          <p className="mt-3 text-center text-xs text-muted">
            Không tính phí trước — thanh toán khi giao hàng
          </p>
        </div>
      </div>
    </section>
  );
}
