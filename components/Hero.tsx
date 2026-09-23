import DialGraphic from "./DialGraphic";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-6 pb-20 pt-16 md:pt-24">
      <div className="grid items-center gap-14 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm text-amber">The Dial One</p>
          <h1 className="mt-4 max-w-xl font-display text-5xl font-bold leading-[1.05] tracking-tightest2 text-cream md:text-6xl">
            Vặn để nghe, không phải chạm để đoán.
          </h1>
          <p className="mt-6 max-w-prose2 text-lg text-muted">
            Tai nghe không dây duy nhất giữ lại một núm vặn cơ thật. Xoay để
            chỉnh âm lượng chính xác đến từng nấc, không cảm ứng, không độ
            trễ, không chạm nhầm khi đang chạy.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <a
              href="#preorder"
              className="rounded-sm bg-amber px-6 py-3 font-medium text-base transition-transform hover:translate-y-[-1px]"
            >
              Đặt trước hôm nay
            </a>
            <a href="#dial" className="text-sm text-cream underline decoration-line underline-offset-4">
              Xem núm vặn hoạt động
            </a>
          </div>
          <p className="mt-8 font-mono text-xs tracking-wide text-muted">
            32H PIN &nbsp;·&nbsp; DRIVER 40MM &nbsp;·&nbsp; IPX5
          </p>
        </div>
        <div className="mx-auto aspect-square w-full max-w-sm">
          <DialGraphic />
        </div>
      </div>
    </section>
  );
}
