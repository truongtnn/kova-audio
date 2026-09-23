const specs: [string, string][] = [
  ["Driver", "40mm, màng titan phủ PU"],
  ["Đáp tuyến tần số", "18Hz – 22kHz"],
  ["Chống nước", "IPX5"],
  ["Kết nối", "Bluetooth 5.3, độ trễ 60ms"],
  ["Pin tai nghe", "8 giờ / lần sạc"],
  ["Pin kèm hộp sạc", "32 giờ tổng cộng"],
  ["Sạc nhanh", "10 phút = 4 giờ nghe"],
  ["Trọng lượng", "5.8g mỗi bên"],
];

export default function SpecSheet() {
  return (
    <section id="specs" className="border-t border-line/70 bg-panel">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <h2 className="font-display text-3xl font-bold text-cream md:text-4xl">
            Bảng thông số
          </h2>
          <span className="font-mono text-xs text-muted">MODEL D1-2026</span>
        </div>
        <dl className="mt-10 grid grid-cols-1 gap-x-12 gap-y-0 md:grid-cols-2">
          {specs.map(([label, value]) => (
            <div
              key={label}
              className="flex items-baseline justify-between border-b border-line/60 py-4"
            >
              <dt className="text-sm text-muted">{label}</dt>
              <dd className="font-mono text-sm text-amber">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
