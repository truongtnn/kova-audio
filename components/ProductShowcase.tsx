const features = [
  {
    n: "01",
    title: "Núm vặn cơ thật",
    text: "Một chiết áp analog nằm gọn trên vành tai nghe phải. Xoay 270 độ, 41 nấc chia, phản hồi lực vừa đủ để cảm nhận từng mức âm lượng mà không cần nhìn.",
  },
  {
    n: "02",
    title: "Driver 40mm, màng titan phủ",
    text: "Dải trầm sâu không bị vỡ ở mức âm lượng cao, dải mid rõ giọng hát, treble được xử lý để nghe lâu không mỏi tai.",
  },
  {
    n: "03",
    title: "32 giờ nghe liên tục",
    text: "Hộp sạc đi kèm cấp thêm 3 lần sạc đầy. 10 phút sạc nhanh cho 4 giờ nghe khi bạn quên sạc qua đêm.",
  },
];

export default function ProductShowcase() {
  return (
    <section id="dial" className="border-t border-line/70">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="max-w-lg font-display text-3xl font-bold text-cream md:text-4xl">
          Được thiết kế xoay quanh một chi tiết duy nhất.
        </h2>
        <div className="mt-14 divide-y divide-line/70 border-y border-line/70">
          {features.map((f) => (
            <div key={f.n} className="grid gap-4 py-8 md:grid-cols-[80px_1fr_1fr] md:gap-10">
              <span className="font-mono text-sm text-amberDim">{f.n}</span>
              <h3 className="font-display text-xl font-semibold text-cream">{f.title}</h3>
              <p className="max-w-md text-muted">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
