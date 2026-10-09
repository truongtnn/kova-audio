import { LinkButton } from "./ui/Button";

export default function Preorder() {
  return (
    <section id="preorder" className="border-t border-line/70 bg-panel2">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-6 py-20 md:flex-row md:items-end">
        <div>
          <p className="text-sm text-amber">Trọn bộ dòng Dial</p>
          <h2 className="mt-3 max-w-md font-display text-3xl font-bold text-cream md:text-4xl">
            6 sản phẩm, cùng một triết lý: núm vặn thay cho cảm ứng.
          </h2>
          <p className="mt-4 max-w-md text-muted">
            Từ tai nghe nhét tai đến loa để bàn — xem toàn bộ danh mục và
            chọn sản phẩm phù hợp với bạn.
          </p>
        </div>
        <LinkButton href="/products">Khám phá sản phẩm</LinkButton>
      </div>
    </section>
  );
}
